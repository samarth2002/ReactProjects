import React from 'react'
import "./Message.css"
function Message({message, timestamp, user, userImage }) {
    return (
        <div className = "message">
            <img src={userImage} alt="" />
            <div className="message-info">
                <h4>
                    {user} <span className = "message-timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                    {/* {user} <span className="message-timestamp">12 pm</span> */}

                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
