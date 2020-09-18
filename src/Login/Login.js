import React, { useContext, useState } from 'react';
import './Login.css'
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';



const Booking = () => {
    const [logInData, setlogInData] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    
    
    const [newUser, setNewUser] = useState(false);

    const handleSubmit = (e) => {
            if ( newUser && logInData.password && logInData.email) {
                    firebase.auth().createUserWithEmailAndPassword(logInData.email, logInData.password)
                    .then( res => {
                    console.log(res)
                    const newUserInfo = {...logInData, successSignUp: true};
                    newUserInfo.error = '';
                    setlogInData(newUserInfo)
                    history.replace(from);
                    
                    
                })
                .catch( error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    //const newUserInfo = {...logInData};
                    //newUserInfo.error = error.message;
                    //setlogInData(newUserInfo)
                    console.log(errorCode, errorMessage);
                    const newUserInfo = {...logInData, error: errorMessage, successSignUp: false};
                    
                    setlogInData(newUserInfo)
                    console.log(logInData)
                    // ...
                  });

            }
            if(!newUser && logInData.password && logInData.email ){
                    firebase.auth().signInWithEmailAndPassword(logInData.email, logInData.password)
                    .then ( res =>  {
                   
                    const newUserInfo = {...logInData, successSignIn: true};
                    newUserInfo.error = '';
                    newUserInfo.successSignUp= false;
                    setlogInData(newUserInfo)
                    history.replace(from);
                
                    } )
                    .catch(error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = {...logInData, error: errorMessage, successSignIn: false};
                    
                    setlogInData(newUserInfo)
                    console.log(logInData)
                    // ...
                     });
                     }
            e.preventDefault();

    }
    const handleGoogleSignIn = () => {
        
            var provider = new firebase.auth.GoogleAuthProvider();
             firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setlogInData(signedInUser)
            
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    }
    const handleBlur = (e) => {
        let isFormValid;

      if (e.target.name === 'email'){
          isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

      }  
      if (e.target.name === 'name'){
        isFormValid = e.target.value.length > 0;

    }  

      if (e.target.name === 'password'){
          isFormValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
         
    }  
    if (isFormValid){
        
            const newUserInfo = {...logInData}
            newUserInfo[e.target.name] = e.target.value;
            setlogInData(newUserInfo)
    }

    }
    const updateUserName = name =>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
       
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });

    }
    const handleFacebookSignIn = () =>{
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('fb user ',user)
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setlogInData(signedInUser)
            
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          

    }

    return (
        <div id='sundarbans'>
            
            <h1 >Welcome!</h1>
    <h3 >Your Destination:</h3>
    
            <Button onClick={handleGoogleSignIn} variant="contained" color="primary">Sign In with Google</Button>
            <br/>
            <br/>
            <Button onClick = {handleFacebookSignIn} variant="contained" color="primary">Sign In with Facebook</Button>
            <br/>
            <br/>
            <input  type="checkbox" onChange = {() => setNewUser(!newUser)} name="newUser" id=""/>
            <label  htmlFor="newUser">New User Sign Up</label>

            <form onSubmit={handleSubmit}>
                { newUser && <input type="text" name="name" id="" onBlur={handleBlur} placeholder='Your Name' required/>
             
             }
             { newUser && <br />
             }
            <input  type="text" name="email" id="" onBlur={handleBlur} placeholder="Write your Email" required/>
            <br/>
            <input  type="password" name="password" onBlur={handleBlur} id="" placeholder= "Write your password" required/>
            <br/>
            <input type="submit" value={newUser? "Sign Up" : 'Sign In'}/>
            </form>
            <p style={{ color: 'Red'}} >{logInData.error}</p>
            {
                logInData.successSignUp && <p style={{ color: 'Green'}} >User created successfully!</p>

            } 
            {
                logInData.successSignIn && <p style={{ color: 'Green'}} >User logged in successfully!</p>
            } 

            
        </div>
    );
};

export default Booking;