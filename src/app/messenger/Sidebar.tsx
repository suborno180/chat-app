import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChatSidebar = ({id}: {id: number}) => {
const chatUserID = id;
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
  return (
    <>
      <div className="flex flex-col w-full gap-4 pt-2">
        <ul className="p-2 w-full flex flex-col gap-2">
          {/* Map over users array to generate user elements */}

          {users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center rounded-xl gap-4 p-4 overflow-hidden ${
                user.id === Number(chatUserID) ? "bg-white/30" : "bg-white/10 hover:bg-white/30"
              }  w-full relative`}
            >
              <div className="absolute top-2 right-4">
                {/* Display time */}
                <span className="text-sm text-gray-200">{user.time}</span>
              </div>
              <div className={`avatar ${user.online ? "online" : "offline"}`}>
                <div className="w-12 rounded-full">
                  <Image
                    width={40}
                    height={40}
                    src={user.avatar}
                    alt="User avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1>{user.name}</h1>
                <p className="text-xs max-w-[230px] line-clamp-1 overflow-hidden">
                  {user.message}
                </p>
              </div>
              <Link
                href={`/messenger/${user.id}`}
                className="absolute top-0 left-0 w-full h-full"
              ></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChatSidebar;
