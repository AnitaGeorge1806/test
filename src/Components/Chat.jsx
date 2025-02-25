import React from "react";
import { supabase } from "../supabase";
import { useEffect,useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../firebase"

function Chat(){
  const [messages, setMessages] = useState([])
  const [user] = useAuthState(auth);
  async function getMessages() {
    const { data: MessagesData, error } = await supabase
      .from("messages")
      .select()

    if (error) {
    } else {
      setMessages(MessagesData);
    }
  }

  useEffect(()=>{
    getMessages() })

    return(
    <><div className='msgs'>
      {
        messages.map(({id,created_at,sender,message})=>(
          <div key={id} className={`msg_${sender === user.email ? 'sent':'received'}`} >
            <p>{sender}</p>
            <p>{message}</p>
            <p>{created_at}</p>
          </div>
        ))

        }
      </div></>)
}
export default Chat;