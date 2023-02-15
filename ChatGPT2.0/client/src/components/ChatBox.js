import React from 'react'
import ChatMessage from './ChatMessage'
function ChatBox({chatLog , handleSubmit , input ,setInput}) {
    return (
        <section className="chatbox">
            <div className="chat-log">
                {chatLog.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}


            </div>
            <div className="chat-input">
                <form onSubmit={handleSubmit}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} rows="1" className="chat-input-textarea" placeholder="Ask/Say anything"></input>
                </form>
            </div>
        </section>
    )
}

export default ChatBox
