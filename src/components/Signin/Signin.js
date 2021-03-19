import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Signin.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}


const Signin = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const [signInUser, setSignInUser] = useState({});
    var provider = new firebase.auth.GoogleAuthProvider();
    var ghProvider = new firebase.auth.GithubAuthProvider();
    const handleGoogle = () =>{
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var {displayName, email} = result.user;
        const signedWithGoogle = {displayName, email}
        setSignInUser(signedWithGoogle);
        history.replace(from);

      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    }

    const handleGitHub = () => {
        firebase
    .auth()
    .signInWithPopup(ghProvider)
    .then((result) => {
      var {displayName, email} = result.user;
      const signedWithGitHub = {displayName, email};
      setSignInUser(signedWithGitHub);
      history.replace(from);
      
    }).catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
      
    });
      }

    return (
        <div >
        <div className="register-form">
            <h4>Login</h4>
            <form action="">
                <p><input type="email" placeholder ="Email" required/></p>
                <p><input type="password" placeholder="password" required/></p>
                <input type="checkbox"></input>  Remember me      <span className="ml-5"><a href="#" className="text-danger">Forgot password</a></span>

                <p className="mt-4" ><input className="d-grid col-10 mx-auto btn btn-warning" type="submit" value="Login"/></p>
            </form>
            <p className="mt-4">Didn't have an account? <Link to="/login" className="text-danger">Create an account</Link></p>
        </div>
        <div className="register-google">
            <p>----------or----------</p>
            <button className="google-btn" onClick={handleGoogle}>Continue with google</button>
            <button className="google-btn mt-2" onClick={handleGitHub}>Continue with GitHub</button>
            <p>{signInUser.displayName}</p>
            <p>{signInUser.email}</p>
        </div>
    </div>
    );
};

export default Signin;