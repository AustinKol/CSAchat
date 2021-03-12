import firebase from "firebase";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { useCollectionData } from "react-firebase-hooks/firestore";

function TeacherDashboard() {
    const firestore = firebase.firestore();

    const users = firestore.collection('users');
    const queue = users.orderBy("timeCreated", "desc");



    const [userOrder] = useCollectionData(queue);

    console.log(userOrder);
    





    return (
    
        <>

            {userOrder?.map((user) => {

                const uidCreated = firestore.collection('users').get
                    
                return(
                    <ListGroup horizontal>
                        <ListGroup.Item>This</ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>uidCreated</ListGroup.Item>
                        <a href='selfhelp'>
                            <ListGroup.Item>horizontally!</ListGroup.Item>
                        </a>
                        
                    </ListGroup>

                )

                    
                })
            }
                    


    
    
    
        </>
    );
}

export default TeacherDashboard;


