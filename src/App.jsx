import { useEffect } from "react"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Notification from "./components/notification/Notification"

const App = () => {

    
  return (
    <div className='container'>
    {
       (
        <>
        <List/>
        <Chat/>
        <Detail/>
        </>
        
      ) 
    }
     <Notification /> 
    </div>
  )
}

export default App