function ChatUser() {
  return (
    <div>
      <div className="Username h-[8vh]  flex items-center justify-center bg-slate-600">
      <div className="img">
                <img
                    className="w-[60px] rounded-full"
                    src="\images\Avinash.png"
                    alt=""
                />
            </div>
            <div className="name">
                <h1>Avinash Sharma</h1>
                <p>online</p>
            </div>
      </div>
    </div>
  )
}

export default ChatUser