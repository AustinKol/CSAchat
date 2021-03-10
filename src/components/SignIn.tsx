import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import ChatPage from './ChatPage';
import TeacherDashboard from './TeacherDashboard';

function SignIn() {
    const auth = firebase.auth();
    const [user, loading] = useAuthState(auth);
    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult:any, redirectUrl:any) {
                var user = authResult.user;
                var credential = authResult.credential;
                var isNewUser = authResult.additionalUserInfo.isNewUser;
                var providerId = authResult.additionalUserInfo.providerId;
                var operationType = authResult.operationType;
                // Do something with the returned AuthResult.
                // Return type determines whether we continue the redirect
                // automatically or whether we leave that to developer to handle.
                return false;
            }
        },
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: false
            }
        ]
    }
    
    return (<>
        {user ? <TeacherDashboard/> : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>}
    </>);
}

export default SignIn;