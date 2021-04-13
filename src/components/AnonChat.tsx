import firebase from "firebase";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, useHistory } from "react-router-dom";
import ChatPage from "./ChatPage";

function AnonChat() {
    const auth = firebase.auth();
    const [user, loading] = useAuthState(auth);
    const hasRun = useRef(false);
    //const [signingOut, setSigningOut] = useState(false);
    let hist = useHistory();

    async function signOut() {
        //setSigningOut(true);
        console.log("[II] Signing out")
        setTimeout(function() {
            auth.signOut();
            hist.push("/");
        }, 3000);
    }

    useEffect(() => {
        if (!hasRun.current) {
            auth.signInAnonymously();
            console.log("[II] Singing in");
            hasRun.current = true;
        }
    }, [auth]);
    
    return (<>
        {!loading && user?.isAnonymous ? <ChatPage signout={signOut} uid={user.uid} person={0}/> : "Telechargement en cours..."}
    </>);
}

export default AnonChat;