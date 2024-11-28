import ChatUser from "./ChatUser"
import Messages from "./Messages"
import SendMessage from "./SendMessage"

function RightPart() {
  return (
    <div className="w-[75%] min-h-screen bg-slate-800 text-gray-400">
      <ChatUser/>
      <Messages/>
      <SendMessage/>
    </div>
  )
}

export default RightPart