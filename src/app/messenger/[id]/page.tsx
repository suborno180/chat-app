import React from "react";
import { FaLink, FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { CgMoreO } from "react-icons/cg";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import ChatSidebar from "../Sidebar";
import ChatInbox from "../Inbox";

const page = ({ params }: { params: { id: string } }) => {

    const id = Number(params.id)

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[90%] mx-auto h-full  bg-white/30 backdrop-blur-lg rounded-lg">
        <div className="w-full h-full flex">
          <div className="hidden  rounded-lg rounded-r-none lg:flex flex-col min-w-[350px] max-w-[350px] min-h-[75vh] bg-white/20">
            {/* sidebar */}
            <div className="min-h-16 w-full flex items-center justify-between p-4">
              <div>
                <Link href={'/messenger'} className="text-2xl">Masseges</Link>
              </div>
              <div className="tooltip tooltip-success" data-tip="Create Group">
                <button>
                  <FaRegEdit />
                </button>
              </div>
            </div>
            <ChatSidebar id={id} />
          </div>
          <ChatInbox id={id}/>
        </div>
      </div>
    </main>
    </>
  );
};

export default page;
