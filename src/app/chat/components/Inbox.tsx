"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { CgMoreO } from "react-icons/cg";
import { FaLink } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const ChatInbox = () => {
  const searchParams = useSearchParams();
  const chatUserID = searchParams.get("id");
  const users = [
    {
      id: 1,
      name: "Odithi Hosien",
      message: "Lorem ipsum dolor sit amet consectetur dsf dsf sdf ",
      avatar:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      online: true,
      time: "2m",
    },
    {
      id: 2,
      name: "Zara Khatun",
      message: "Hello there!",
      avatar: "/pexels-photo-415829.webp",
      online: false,
      time: "5m",
    },
    {
      id: 3,
      name: "Jane Smith",
      message: "How are you doing?",
      avatar: "/1-intro-photo-final.jpg",
      online: true,
      time: "10m",
    },
    // Add more users as needed
  ];
  const chatUserData = users.filter((e)=> e.id === Number(chatUserID))
  return (
    <>
      <div className="w-full h-full">
        <div className="min-h-16 w-full bg-white/20 flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className={`avatar online`}>
              <div className="w-12 rounded-full">
                <Image
                  width={40}
                  height={40}
                  src={chatUserData[0].avatar}
                  alt="User avatar"
                />
              </div>
            </div>
            <div>
              <h1>{chatUserData[0].name}</h1>
              <p className="text-xs text-gray-300">Active</p>
            </div>
          </div>
          <div>
            <button>
              <CgMoreO size={20} />
            </button>
          </div>
        </div>
        <div className="w-full p-10">
          <div className="w-full min-h-[75vh] relative">
            <div className="w-full min-h-[65vh]">
              <div className="chat chat-start">
                <div className="chat-bubble bg-green-900 glass text-white/70">
                  {`It's over Anakin, <br />I have the high ground.`}
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-black glass">
                  {` You underestimate my power!`}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full min-h-16 bg-white/20 rounded-md flex items-center px-4">
              <div className="w-full flex items-center gap-4">
                <button className="text-black">
                  {/* upload media file */}
                  <FaLink />
                </button>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full bg-transparent"
                />
                <button className="btn">
                  <FiSend size={20} />
                  <span className="ml-2 hidden lg:flex">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInbox;
