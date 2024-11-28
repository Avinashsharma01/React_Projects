import { LuSendHorizonal } from "react-icons/lu";
function SendMessage() {
    return (
        <div className="bg-slate-600 w-full h-[8vh] flex  items-center  ">
            <div className="inputfieldd  w-full">
                <input
                    type="text"
                    className="w-[90%] h-[60px] px-5 outline-none ml-5 rounded-xl "
                    placeholder="Type Here "
                />
            </div>
            <button>
                <LuSendHorizonal className="text-4xl mr-20" />
            </button>
        </div>
    );
}

export default SendMessage;
