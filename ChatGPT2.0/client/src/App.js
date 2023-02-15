import logo from './logo.svg';
import './App.css';
import './normal.css'
import {useState, useEffect} from "react";
import SideMenu from './components/SideMenu';
// import ChatBox from './components/ChatBox';
import SvgComponent from './components/SvgComponent';



function App() {
  


  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user:"gpt",
    message:"How can I help you today?",
  },{
    user: "me",
    message: "I want to use ChatGPT today",
  }])

  function clearChat() {
    setChatLog([])
  }


  async function handleSubmit(e){
    e.preventDefault();
    // console.log("here: " + input)
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` } ]
    // console.log("wow" + chatLog[0])
    setInput("")
    setChatLog(chatLogNew)
    const messages = chatLogNew.map((message) => message.message).join("\n")
    const response = await fetch("http://localhost:3080/",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
  })
  const data = await response.json()
  setChatLog([...chatLogNew,{ user: "gpt", message: `${data.message}`}])
  console.log(chatLog)
  console.log(data.message)
}

  
  return (
    <div className="App">
      <SideMenu clearChat = {clearChat}/>
      {/* <ChatBox input = {input} handleSubmit = {handleSubmit}  setInput = {setInput} chatLog= {chatLog}/> */}
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
    
    </div>
  );
}
const ChatMessage = ({ message }) => {
  // console.log(message.user)
  return (
   
      <div className={`chat-message ${message.user === "gpt" && "chatgpt" }`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt" && <SvgComponent />}
        </div>
        <div className="message">{message.message}</div>
      </div>

    </div>
  )
}
export default App;
