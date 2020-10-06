import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Card } from '@material-ui/core';
import NavigationBar from '../NavigationBar/NavigationBar';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoUrl, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoUrl
                }
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch(err => {
                console.log(err);
                console.log(err.message)

            });
    }
    return (
        <div>
             <NavigationBar></NavigationBar>
            <Container className="mt-5">
                <Card style={{ width: '28rem', height: '22rem' }}>
                    <h2 className="p-5">Login With</h2>
                    {
                        user.isSignedIn ? <button onClick={handleGoogleSignIn}>Google Sign out</button> :
                            <button onClick={handleGoogleSignIn}>Google Sign In</button>
                    }
                    {
                        user.isSignedIn && <p>Welcome, {user.name}</p>
                    }
                    <p>Don't Have an account? <a href="#">Create an account</a></p>
                </Card>
            </Container>
        </div>
    );
};

export default Login;