import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/ChatSlice";
import { generateName, generateComment } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLivemessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          name: generateName(),
          comment: generateComment(),
        })
      );
    }, 4000);

    return () => {
      clearInterval(i);
    };
  });
  return (
    <>
      <div className="h-[480px] flex flex-col-reverse overflow-y-scroll p-3">
        {chatMessages.map((chat, index) => (
          <ChatMessage name={chat.name} comment={chat.comment} key={index} />
        ))}
      </div>
      {/* The form is to interact in chat for the user*/}
      <form
        className="p-1 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addChat({ name: "Harsh", comment: liveMessage }));
          setLivemessage("");
        }}
      >
        <input
          type="text"
          placeholder="chat"
          className="px-1 w-96"
          value={liveMessage}
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button className="bg-green-300 px-2 mx-2 w-16">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
