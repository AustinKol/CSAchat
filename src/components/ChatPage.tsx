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
    console.log(props.uid);

    firestore.collection('users').doc(props.uid).get().then((doc) => {
        if (doc.data()?.["timeCreated"]) {
            return;
        } else {
            firestore.collection('users').doc(props.uid).set({timeCreated: firebase.firestore.FieldValue.serverTimestamp()});
        }
    });

    const sendMessage = async (msg:any, person:any) => {
        await userMessages.add({
            text: msg,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            person: person
        });
        setFormValue('');
        // Scroll control
        scrollThing.current.scrollIntoView({behavior: 'smooth'});
    }

    const [messages] = useCollectionData(query);
    console.log(messages);

    return (
        <>
            <Container>
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
