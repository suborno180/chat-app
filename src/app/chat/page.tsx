import Image from "next/image";
import Link from "next/link";
import { CgMoreO } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { FaLink, FaRegEdit } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Home() {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "Maruf Suborno",
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
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[90%] mx-auto h-full  bg-white/30 backdrop-blur-lg rounded-lg">
        <div className="w-full h-full flex">
          <div className="hidden  rounded-lg rounded-r-none lg:flex flex-col min-w-[350px] max-w-[350px] min-h-[70vh] bg-white/20">
            {/* sidebar */}
            <div className="min-h-16 w-full flex items-center justify-between p-4">
              <div>
                <h1 className="text-2xl">Masseges</h1>
              </div>
              <div className="tooltip tooltip-success" data-tip="Create Group">
                <button>
                  <FaRegEdit />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 pt-2">
              <ul className="p-2 w-full flex flex-col gap-2">
                {/* Map over users array to generate user elements */}
                {users.map((user) => (
                  <li
                    key={user.id}
                    className={`flex items-center rounded-xl gap-4 p-4 overflow-hidden ${
                      user.id === 1
                        ? "bg-white/30"
                        : "bg-white/10 hover:bg-white/30"
                    }  w-full relative`}
                  >
                    <div className="absolute top-2 right-4">
                      {/* Display time */}
                      <span className="text-sm text-gray-200">{user.time}</span>
                    </div>
                    <div
                      className={`avatar ${user.online ? "online" : "offline"}`}
                    >
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
                      href={`/chat?id=${user.id}`}
                      className="absolute top-0 left-0 w-full h-full"
                    ></Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="min-h-16 w-full bg-white/20 flex items-center justify-between px-4">
              <div className="flex flex-col items-center">
                <div className={`avatar online`}>
                  <div className="w-12 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      src={"/pexels-photo-415829.webp"}
                      alt="User avatar"
                    />
                  </div>
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
        </div>
      </div>
    </main>
  );
}
