/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import { useState } from "react";
import { assets } from "../assets/assets";

const SearchBaar = ({ SendMessage, Handle, input }) => {
    return (
        <div className="for-center w-full h-auto flex justify-center mt-5 sticky bottom-0 left-0">
            <div className="main-botton  w-4/5  ">
                <div className="search-box flex justify-between items-center bg-slate-500 px-2 py-1  rounded-full">
                    <input
                        type="text"
                        name=""
                        id="INPUT_VALUE"
                        className=" rounded-full  bg-slate-500 h-12 w-[700px] px-3 outline-none  text-white"
                        onChange={Handle}
                        value={input}
                        placeholder="Write Your Prompt here."
                    />
                    <div className="flex justify-around gap-5 px-4">
                        <img
                            src={assets.gallery_icon}
                            alt=""
                            className="w-8 h-8 "
                        />
                        <img
                            src={assets.mic_icon}
                            alt=""
                            className="w-8 h-8 "
                        />
                        <img
                            src={assets.send_icon}
                            alt=""
                            className="w-8 h-8 "
                            onClick={SendMessage}
                        />
                    </div>
                </div>
                <p className="text-center bg-white pb-5">
                    This Gemini is build by Avinash Sharma, and this model can
                    make mistakes
                </p>
            </div>
        </div>
    );
};

export default SearchBaar;
