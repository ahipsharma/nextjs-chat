import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dyanmic from "next/dynamic";


// Dunaminc importing is done because, quill is by salesforce and dosen't supports react.
const ChatEngine = dyanmic(() => 
      import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dyanmic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();
  useEffect(()=>{
    if(typeof document !== null){
      setShowChat(true);
    }
  })

  useEffect(() =>{
    if(username.length === 0 || secret.length === 0) router.push("/")
  })

  if(!showChat) return <div />;
  return (
    <div className="background">
      <div className='shadow'>
        <ChatEngine 
          height='calc(100vh - 200px)'
          projectID='92fa55e0-eed2-4a23-925a-94b162b94875'
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() =><MessageFormSocial />}
        />
      </div>
    </div>
  );
}
