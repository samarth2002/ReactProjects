import {useState, useEffect} from 'react'
import "./Chat.css"
import {useParams} from "react-router-dom"
import { StarBorderOutlined } from '@mui/icons-material'
import { InfoOutlined } from '@mui/icons-material'
import db from "../firebase"
import Message from "../components/Message"
import ChatInput from '../components/ChatInput'

function Chat() {
    const {roomId} = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot)=>
            setRoomMessages(snapshot.docs.map(doc=>doc.data()))
        )
    },[roomId])


    return (
        <div className = "chat">
            <div className="chat-header">
                <div className="chat-header-left">
                    <h4 className="chat-channel-name">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined/>
                    </h4>
                </div>
                <div className="chat-header-right">
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </div>
            </div>
            <div className="chat-messages">
                {roomMessages.map(({message, timestamp, user, userImage})=>(
                <Message 
                    message = {message}
                    timestamp = {timestamp}
                    user = {user}
                    userImage = {userImage}
                />))}
            </div>
            <ChatInput channelName=  {roomDetails?.name} channelId= {roomDetails?roomId:null} />
        </div>
    )
}

export default Chat
