import React, { useEffect, useRef } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useState } from 'react';
import { Button, Container, Form, Row, Col, ListGroup } from 'react-bootstrap';

function ChatPage(props:any) {
    const firestore = firebase.firestore();
    
    const [formValue, setFormValue] = useState('');
    const scrollThing = useRef<HTMLDivElement>(null!);

    const userMessages = firestore.collection('users').doc(props.uid).collection("messages");
    const query = userMessages.orderBy('time');

    const roomClose = "Ce chat a été fermé par le modérateur.";

    const sendMessage = async (msg:any, person:any) => {
        firestore.collection('users').doc(props.uid).get().then((doc) => {
            if (doc.data()?.["timeCreated"] && doc.data()?.["isFinished"]) {
                return;
            } else {
                firestore.collection('users').doc(props.uid).set({timeCreated: firebase.firestore.FieldValue.serverTimestamp(), isFinished: false});
            }
        });

        await userMessages.add({
            text: msg,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            person: person
        });
        setFormValue('');
        // Scroll control
    }

    async function killRoom() {
        //firestore.collection('users').doc(props.uid).delete();
        await sendMessage(roomClose, 1);
        await firestore.collection('users').doc(props.uid).update({isFinished: true});
        props.thread("");
    }

    const [messages] = useCollectionData(query);
    //console.log(messages);


    const left = {maxWidth: "50%", wordWrap: "break-word", placeSelf: "flex-start", borderColor: "#007bff", borderRadius: "3px", marginTop: "3px", borderWidth: "1px"};
    const right = {maxWidth: "50%", wordWrap: "break-word", placeSelf: "flex-end", borderRadius: "3px", marginTop: "3px", borderWidth: "1px"};
    const center = {wordWrap: "break-word", placeSelf: "flex-center", borderColor: "#F01a0a", borderRadius: "3px", marginTop: "3px", borderWidth: "1px"};

    const listMessages = messages && messages.map((msg:any, i) => {
        var position:any = left;
        if (msg["person"]^props.person) {
            position = left;
        } else {
            position = right;
        }
        if (msg["text"] === "") return(<></>);
        if (msg["text"] === roomClose && props.person === 0) {
            props.signout();
            position = center;
        }
        return(
            <ListGroup.Item style={position} key={i}>
                {msg["text"]}
            </ListGroup.Item>
        );
    });

    useEffect(() => {
        scrollThing.current && scrollThing.current.scrollIntoView({behavior: 'smooth'});
    });

    return (
        <>
            <Container className="fixed-top">
                {
                    props.person === 1 ?
                        <Row>
                            <Col>
                                <Button onClick={() => props.thread("")}>Retourner au menu</Button>
                            </Col>
                            <Col>
                                <Button onClick={killRoom}>Finir ce chat</Button>
                            </Col>
                        </Row>
                    : <></>
                }
            </Container>
            <Container>
                <Row>
                    <Col>
                        <ListGroup style={{paddingBottom: "100px"}}>
                            {listMessages}
                            <div ref={scrollThing}></div>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            <Container className="fixed-bottom" style={{backgroundColor: "white"}}>
                    <Form className="input-group mb-3" onSubmit={async (e) => {e.preventDefault(); sendMessage(formValue, props.person)}}>
                        <Form.Control value={formValue} onChange={c => setFormValue(c.target.value)} type="text" placeholder="Message" />
                        <div className="input-group-append">
                            <Button variant="outline-primary" type="submit">
                                Envoyer
                            </Button> 
                        </div>
                    </Form>
            </Container>
        </>
    );
}

export default ChatPage;
