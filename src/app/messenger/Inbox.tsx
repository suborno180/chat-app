import React from "react";
import { FaLink, FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { CgMoreO } from "react-icons/cg";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";

const ChatInbox = ({id}: {id: number}) => {
    const users = [
        {
          id: 1,
          name: "Odithi Hosien",
          message: "Lorem ipsum dolor sit amet consectetur dsf dsf sdf ",
          avatar: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
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
      const Data = users.filter((e)=> e.id === id)
      const ChatUserData = Data[0]
  return (
    <>
      <div className="w-full h-full">
        {ChatUserData && (
          <div className="min-h-16 w-full bg-white/20 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <Link href={'/messenger'}>
              <IoMdArrowBack size={20} />
              </Link>
              <div
                className={`avatar ${
                  ChatUserData.online ? "online" : "offline"
                }`}
              >
                <div className="w-12 rounded-full">
                  <Image
                    width={40}
                    height={40}
                    src={ChatUserData.avatar}
                    alt="User avatar"
                  />
                </div>
              </div>
              <div>
                <h1>{ChatUserData.name}</h1>
                <p className="text-xs text-gray-300">
                  {ChatUserData.online ? "Active" : "Offline"}
                </p>
              </div>
            </div>
            <div>
              <button>
                <CgMoreO size={20} />
              </button>
            </div>
          </div>
        )}
        <div className="w-full p-4 lg:p-10">
          <div className="w-full min-h-[75vh] relative">
            <div className="w-full min-h-[65vh]">
              {ChatUserData ? (
                <div>
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
              ) : (
                <>
                  <div className="w-full min-h-[82vh] grid place-content-center">
                    <IoChatboxEllipsesOutline className="text-[200px]" />
                  </div>
                </>
              )}
            </div>
            {ChatUserData && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInbox;
