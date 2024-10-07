// import { useEffect, useState } from "react";

function Todo() {
    return (
        <div
            className="w-full h-screen flex justify-center items-center bg-slate-400 "
            style={{
                height: "calc(100vh - 120px)",
            }}
        >
            <div className="container w-5/6 h-5/6 bg-slate-500 rounded-md flex justify-center items-center p-10  flex-col">
                <div className="todoAp h-screen  overflow-y-scroll   ">
                    <div className="header sticky top-0 bg-slate-700 w-[700px] text-center p-5">
                        <div className="head">
                            <h1 className="text-4xl text-white mb-5">
                                Todo App
                            </h1>
                        </div>
                        <div className="todoinput flex justify-center items-center ">
                            <input
                                type="text"
                                className="w-96 h-[40px] px-5 outline-none rounded-l-md cursor-pointer "
                            />
                            <button className="bg-yellow-500 text-white px-5 py-2 rounded-r-md">
                                Add
                            </button>
                        </div>
                    </div>

                    {/* All item will be added here */}

                    
                </div>
            </div>
        </div>
    );
}

export default Todo;
