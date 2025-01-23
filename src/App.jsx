import { useEffect, useState } from 'react'
import './App.css'
import SignIn from './Components/SignIn'
import { supabase } from './supabase'
import { auth } from "./firebase"
import SendMessage from './Components/SendMessage'
import {useAuthState} from "react-firebase-hooks/auth"
import SignOut from "./Components/SignOut"

function App() {
  const [messages, setMessages] = useState({})
  const [user]=useAuthState(auth)

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
if(!user){
  return<SignIn/>
}
    return (
    <>
      {/* <SignIn/>
      <p>{user.email}</p> */}
      {/* <p>{JSON.stringify(messages)}</p> */}
      <div className='msgs'>{
        messages.map(({id,created_at,sender,message})=>(
          <div key={id} className={`msg_${sender === user.email ? 'sent':'received'}`} >
            <p>{sender}</p>
            <p>{message}</p>
            <p>{created_at}</p>
          </div>
        ))

        }
      </div>
      <SendMessage/>
      <SignOut/>
      </>
  )
}

export default App