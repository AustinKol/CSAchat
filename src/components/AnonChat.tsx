import firebase from "firebase";
import React, { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatPage from "./ChatPage";

function AnonChat() {
    const auth = firebase.auth();
    const [user, loading] = useAuthState(auth);

    const hasRun = useRef(false);
    useEffect(() => {
        if (!hasRun.current) {
            auth.signInAnonymously();
            console.log("[II] Singing in");
            hasRun.current = true;
        }
    }, [auth]);
    
    return (<>
        {!loading && user?.isAnonymous ? <ChatPage uid={user.uid} person={0}/> : "Telechargement en cours..."}
    </>);
}

export default AnonChat;