import React, { useRef } from 'react';

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
        scrollThing.current.scrollIntoView({behavior: 'smooth'});
    }

    async function killRoom() {
        //firestore.collection('users').doc(props.uid).delete();
        await sendMessage("Ce chat a été fermé par le modérateur.", 1);
        await firestore.collection('users').doc(props.uid).update({isFinished: true});
        props.thread("");
    }

    const [messages] = useCollectionData(query);
    console.log(messages);

    return (
        <>
            <Container>
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

                <Row>
                    <Col>
                        <ListGroup>
                            {messages && messages.map((msg:any, i) => {
                                return(<ListGroup.Item style={msg["person"]^props.person ? {placeSelf: "flex-start", borderColor: "#007bff", borderRadius: "3px", marginTop: "3px", borderWidth: "1px"} : {placeSelf: "flex-end", borderRadius: "3px", marginTop: "3px", borderWidth: "1px"}} key={i}>
                                    {msg["text"]}
                                </ListGroup.Item>);
                            })}
                            <div ref={scrollThing}></div>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            <Container className="fixed-bottom">
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
