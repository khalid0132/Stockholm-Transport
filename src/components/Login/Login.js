import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [signInUser, setSignInUser] = useState({});
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle = () =>{
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var {displayName, email} = result.user;
        const signedWithGoogle = {displayName, email}
        setSignInUser(signedWithGoogle);

      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    }


    return (
     <div >
        <div className="register-form">
            <h4>Create an account</h4>
            <form action="">
                <p><input type="text" placeholder =" Name" /></p>
                <p><input type="text" placeholder ="Username or Email" required/></p>
                <p><input type="password" placeholder="password" required/></p>
                <p><input type="password" placeholder="Confirm password" required/></p>
                <p><input className="d-grid col-8 mx-auto btn btn-primary" type="submit" value="Create an account"/></p>
            </form>
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
        <div className="register-google">
            <p>----------or----------</p>
            <button className="google-btn" onClick={handleGoogle}>Continue with google</button>
            <p>{signInUser.displayName}</p>
            <p>{signInUser.email}</p>
        </div>
    </div>
    );
};

export default Login;