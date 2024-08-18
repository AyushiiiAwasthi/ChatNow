import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text,setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const handleEmoji =e =>{
    setText(prev=>prev + e.emoji);
    setOpen(false)
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png"></img>
          <div className="texts">
            <span>Jesse</span>
            <p>Last seen 3 mins ago</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png"></img>
          <img src="./video.png"></img>
          <img src="./info.png"></img>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png"></img>
          <div className="texts">
            <p>
              Hey Danny.You called?
            </p>
            <span>10 mins ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Oh No Jesse. I just clicked the dial button 13 times out of fun . You see?
            </p>
            <span>6 mins ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png"></img>
          <div className="texts">
            <p>
              C'mon Danny. I am too busy for this . Say it out , huh?
            </p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Where are you?The girls miss you.
            </p>
            <span>2 mins ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png"></img>
          <div className="texts">
            <img src="img1.jpg"/>
            <p>
              I'm at the beach with Becky. Will be back by midnight.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png"></img>
          <img src="./camera.png"></img>
          <img src="./mic.png"></img>
        </div>
        <input type="text" placeholder="Message..." value={text} onChange={e=>setText(e.target.value)}></input>
        <div className="emoji">
          <img src="./emoji.png" onClick={() => setOpen((prev) => !prev)}></img>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>     
          </div>
          
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
