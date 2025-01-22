import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Components/SignIn'
import { supabase } from './supabase'
import { auth } from "./firebase"
import SendMessage from './Components/SendMessage'
import {useAuthState} from "react-firebase-hooks/auth"


function App() {
  const [count, setCount] = useState(0)
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
      <SignIn/>
      <p>{user.email}</p>
      <p>
        {JSON.stringify(messages)}
      </p>
      <SendMessage/>
    </>
  )
}

export default App