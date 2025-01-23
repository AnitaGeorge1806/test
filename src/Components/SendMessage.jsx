import React, { useState } from "react";
import { supabase } from "../supabase";
import { auth } from"../firebase"
import {useAuthState} from "react-firebase-hooks/auth"

function SendMessage(){
const[user]=useAuthState(auth)
const[text,setText]=useState("")
async function send(){
    if(text!=""){
        const { error } = await supabase
        .from('messages')
        .insert({ sender: user.email, message: text });
        console.log(text)
        setText("")
    }

}
return(
    <div className="msgInput">
        <input className="msgInputBox" type="text" placeholder ="Write Message" value={text}
           onChange={e => setText(e.target.value)}/>
        <button type="button" onClick={()=>send()}>Send</button>

    </div>
)   
}

export default SendMessage;