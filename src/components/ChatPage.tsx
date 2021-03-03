import React, { useRef } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useState } from 'react';
import { Button, Container, Form, Row, Col, ListGroup } from 'react-bootstrap';

// Initialize FirebaseFirestore and FirebaseAuth

function ChatPage(props:any) {
    const firestore = firebase.firestore();

    const [formValue, setFormValue] = useState('');
    const scrollThing = useRef<HTMLDivElement>(null!);

    const userMessages = firestore.collection('users').doc(props.uid).collection("messages");
    const query = userMessages.orderBy('time');

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
            <ListGroup>
                {messages && messages.map((msg:any, i) => <ListGroup.Item key={i}>{msg["text"]}</ListGroup.Item>)}
                <div ref={scrollThing}></div>
            </ListGroup>
            
            <Form onSubmit={async (e) => {e.preventDefault(); sendMessage(formValue, 0)}}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group controlId="msg">
                                <Form.Control value={formValue} onChange={c => setFormValue(c.target.value)} type="text" placeholder="Message" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="outline-primary" type="submit">
                                Envoyer
                            </Button> 
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    );
}

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }


//   return (
//     <button onClick={signInWithGoogle}>Sign in with Google</button>
//   )
// }

// function SignOut() {
//   return auth.currentUser && (

//     <button onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }


//
// function ChatRoom() {
//   return(
//     <>
//       <main>
//         {messages && messages.map(msg => <ChatMessage message={msg} />)}
//
//         <div ref={scrollThing}>
//
//         </div>
//
//       </main>
//
//
//
//       <form onSubmit={sendMessage (formValue)}>
//
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
//
//         <button type="submit"><p>send</p></button>
//       </form>
//
//       <div>
//
//       </div>
//
//     </>
//   )
// }
//
// function ChatMessage(props) {
//   const {text } = props.message;
//
//
//
//   return (
//     <div >
//
//
//
//       <p>{text}</p>
//     </div>
//   )
//
// }


export default ChatPage;
