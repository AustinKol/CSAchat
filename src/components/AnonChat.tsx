import firebase from "firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatPage from "./ChatPage";

function AnonChat() {
    const auth = firebase.auth();
    const [user, loading] = useAuthState(auth);
    auth.signInAnonymously();
    return (<>
        {!loading ? <ChatPage uid={user.uid} /> : "Telechargement en cours..."}
    </>);
}

export default AnonChat;