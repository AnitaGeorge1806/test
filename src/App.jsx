import './App.css'
import SignIn from './Components/SignIn'
import { auth } from "./firebase"
import SendMessage from './Components/SendMessage'
import {useAuthState} from "react-firebase-hooks/auth"
import SignOut from "./Components/SignOut"
import Chat from "./Components/Chat"

function App() {
  const [user]=useAuthState(auth)

if(!user){
  return<SignIn/>
}
    return (
    <>
      <Chat/>      
      <SendMessage/>
      <SignOut/>
    </>
  )
}

export default App