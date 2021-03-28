import firebase from "firebase";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatPage from "./ChatPage";

function AnonChat() {
    const auth = firebase.auth();
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        auth.signInAnonymously();
        console.log("singing in");
    }, []);
    
    return (<>
        {!loading && user?.isAnonymous ? <ChatPage uid={user.uid} person={0}/> : "Telechargement en cours..."}
    </>);
}

export default AnonChat;