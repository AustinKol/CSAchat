import firebase from "firebase";
import React from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useCollection, useCollectionData } from "react-firebase-hooks/firestore";
import ChatPage from "./ChatPage";

function TeacherDashboard() {
    const firestore = firebase.firestore();

    const users = firestore.collection('users');
    const queue = users.orderBy("timeCreated", "desc");

    const [userOrder, loading, error] = useCollection(queue);
    const [isChatting, setChatting] = useState("");

    if (isChatting === "") {
        return (
            <>
                <strong>
                    <ListGroup horizontal>
                        <ListGroup.Item bsPrefix="list-group-item col-md-2">Personne</ListGroup.Item>
                        <ListGroup.Item bsPrefix="list-group-item col-md-4">Temps Cree</ListGroup.Item>
                        <ListGroup.Item bsPrefix="list-group-item col-md-2">Lien</ListGroup.Item>
                    </ListGroup>
                </strong>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Loading</span>}
                {
                    userOrder &&
                    userOrder.docs.map((user: any, idx:any) => {
                        //const uidCreated = firestore.collection('users').get()
                        console.log(user.data());
                        return(
                            <ListGroup horizontal>
                                <ListGroup.Item bsPrefix="list-group-item col-md-2">Personne {idx+1}</ListGroup.Item>
                                <ListGroup.Item bsPrefix="list-group-item col-md-4">{new Date(user.data()["timeCreated"]["seconds"]*1000).toLocaleString()}</ListGroup.Item>
                                <ListGroup.Item bsPrefix="list-group-item col-md-2"><button onClick={()=>{setChatting(user.id)}}>Contactez</button></ListGroup.Item>
                            </ListGroup>
                        )
                    })
                }
            </>
        );
    }
    return (
        <>
            <ChatPage uid={isChatting} person={1}/>
        </>
    );
}

export default TeacherDashboard;


