import Image from "next/image";
import Link from "next/link";
import { CgMoreO } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { FaLink, FaRegEdit } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import ChatSidebar from "./components/Sidebar";
import ChatInbox from "./components/Inbox";

export default function Home() {
  // Sample user data


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
            {/* <ChatSidebar/> */}
          </div>
            <ChatInbox/>
        </div>
      </div>
    </main>
  );
}
