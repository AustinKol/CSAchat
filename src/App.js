import React, { useState, useRef } from 'react';





import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { AnyNaptrRecord, AnyNsRecord } from 'dns';

firebase.initializeApp({
    apiKey: "AIzaSyDpFJ1vMnojgESGXD-yjlQyIXU8GuJNQLA",
    authDomain: "csachat-9dff3.firebaseapp.com",
    databaseURL: "https://csachat-9dff3-default-rtdb.firebaseio.com",
    projectId: "csachat-9dff3",
    storageBucket: "csachat-9dff3.appspot.com",
    messagingSenderId: "384915371882",
    appId: "1:384915371882:web:2a14a7141b635d69381713"

})

// const auth = firebase.auth();
const firestore = firebase.firestore();

const formValue;


function App() {

  const dummy = useRef();

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query);

  const [formValue, setFormValue] = useState('');

  const sendMessage = async ( msg) => {
    
    // e.preventDefault();

    // const {uid,} = auth.currentUser;

      await messagesRef.add({
      text: msg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      person : false


    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavier: 'smooth'});

  }

  

  // const [user] = useAuthState(auth);

  return (
    <div>
      <header>

      </header>

      <section>
        <ChatRoom />
        {/* //{user ? <ChatRoom /> : <SignIn />} */}
      </section>
    </div>
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



function ChatRoom() {



  

  return(
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage message={msg} />)}

        <div ref={dummy}>

        </div>

      </main>



      <form onSubmit={sendMessage (formValue)}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>

        <button type="submit"><p>send</p></button>
      </form>
    
      <div>

      </div>

    </>
  )
}

function ChatMessage(props) {
  const {text } = props.message;



  return (
    <div >

   

      <p>{text}</p>
    </div>
  )

}


export default App;