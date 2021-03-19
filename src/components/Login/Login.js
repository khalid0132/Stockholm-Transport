import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    // newUser: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
  });

  const handleSignOut =() =>{
    console.log('Clicked sign outttttt')
    firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        password:'',
        photoURL: '',
      }
      setUser(signedOutUser);
      
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  const handleSubmit = (e) =>{
    // console.log(user.email, user.password);
    if(newUser && user.email && user.password){
      // console.log('submitting')
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((res) => { 
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      updateUserName(user.name);
      // console.log(res);
  })
  .catch((error) => {
    // Handle errors here
    // var errorCode = error.code;
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
    // ..
  });
    }

    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    // Signed in
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo);
    console.log('sign in user info', res.user);
    // ...
  })
  .catch((error) => {
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
  });
    }
    e.preventDefault();
  }

  const updateUserName = (name) =>{
    const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name,
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        console.log('User name updated successfully')
      }).catch((error) => {
        console.log(error)
      });
  }

  const handleBlur = (e) =>{
    // debugger;
    console.log(e.target.name, e.target.value)
    let isFormValid = true;
    if(e.target.name === 'email'){
      // const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value); // tested by Regular Expression
      // console.log(isEmailValid);
     isFormValid = /\S+@\S+\.\S+/.test(e.target.value); // tested by Regular Expression
  
    }
    if(e.target.name === 'password'){
      // const isPasswordValid = e.target.value.length > 6;
      // console.log(isPasswordValid);
      isFormValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(e.target.value); // 1 upper, 1 lower, 1 number
      
      // console.log(isPasswordValid && isUpLowNumPasswordValid );
    }
    if(isFormValid){
      // [...cart, newCart]
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }




  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
    const [signInUser, setSignInUser] = useContext(UserContext);
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
    // signInUser.email(() => {
    //   history.replace(from);
    // });

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
    // signInUser.email(() => {
    //   history.replace(from);
    // });

    return (
     <div >
      
      {
        user.isSignedIn && 
        <div>
          <p>Welcome, {user.name}!</p>
          <p>email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      }
        <div className="register-form">
            <h4>Create an account</h4>
            <form onSubmit={handleSubmit}>
                <p>{newUser && <input onBlur={handleBlur} type="text" name= "name" placeholder="Name" required></input>}</p>
                <p><input onBlur={handleBlur} type="text" name="email" placeholder="User Name or E-mail" required/></p>
                <p><input onBlur={handleBlur} type="password" name="password" id="" placeholder="your password" required/></p>
                <p><input type="password" placeholder="Confirm password" /></p>
                {/* <p><input className="d-grid col-8 mx-auto btn btn-primary" type="submit" value="Create an account"/></p> */}
                <p><input className="d-grid col-8 mx-auto btn btn-primary" type="submit" value={newUser? 'Sign Up' : 'Sign In'}/></p>
            </form>
            <p style={{color: 'red'}}>{user.error}</p>
       {user.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'Logged in'} successfully</p>}
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
        <div className="register-google">
            <p>----------or----------</p>
            <button className="google-btn" onClick={handleGoogle}>Continue with google</button><br/>
            <button className="google-btn mt-2" onClick={handleGitHub}>Continue with GitHub</button>
            <p>{signInUser.displayName}</p>
            <p>{signInUser.email}</p>
        </div>
    </div>
    );
};

export default Login;