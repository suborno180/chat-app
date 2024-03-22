import { FaRegEdit } from "react-icons/fa";
import ChatSidebar from "./Sidebar";
import ChatInbox from "./Inbox";
import Link from "next/link";

function Chat() {
  // Sample user data

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[90%] mx-auto h-full  bg-white/30 backdrop-blur-lg rounded-lg">
        <div className="w-full h-full flex">
          <div className="hidden  rounded-lg rounded-r-none lg:flex flex-col min-w-[350px] max-w-[350px] min-h-[70vh] bg-white/20">
            {/* sidebar */}
            <div className="min-h-16 w-full flex items-center justify-between p-4">
              <div>
                <Link href={'/chat'} className="text-2xl">Masseges</Link>
              </div>
              <div className="tooltip tooltip-success" data-tip="Create Group">
                <button>
                  <FaRegEdit />
                </button>
              </div>
            </div>
            <ChatSidebar />
          </div>
          <ChatInbox />
        </div>
      </div>
    </main>
  );
}
export default Chat