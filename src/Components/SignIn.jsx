import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../firebase";

function SignIn(){
    async function SignInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
    return(
        <div>
            <button onClick={SignInWithGoogle}>SIGN IN </button>
        </div>
    )
}
export default SignIn;