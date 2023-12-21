import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/ChatSlice";
import { generateName, generateComment, generateImage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLivemessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          img: generateImage(),
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
      <div className="h-[480px] flex flex-col-reverse overflow-y-scroll px-3 py-2  border-b-2 ">
        {chatMessages.map((chat, index) => (
          <ChatMessage
            name={chat.name}
            comment={chat.comment}
            img={chat.img}
            key={index}
          />
        ))}
      </div>
      {/* The form is to interact in chat for the user*/}
      <form
        className="px-1 py-4 ml-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              img: "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
              name: "Harsh",
              comment: liveMessage,
            })
          );
          setLivemessage("");
        }}
      >
        <input
          type="text"
          placeholder="Chat"
          className="px-1 ps-4 w-96 h-8 rounded-xl bg-zinc-200 dark:bg-zinc-700 dark:text-slate-200"
          value={liveMessage}
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button className="dark:text-white ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send-horizontal"
          >
            <path d="m3 3 3 9-3 9 19-9Z" />
            <path d="M6 12h16" />
          </svg>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
