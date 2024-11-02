/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import html2pdf from "html2pdf.js";

function Message() {
    const location = useLocation();
    const { messages } = location.state || {}; // Safely access the state
    const { isAuthenticated, user } = useAuth0();

    // State to store filtered messages
    const [filteredMessages, setFilteredMessages] = useState([]);

    // Function to filter messages based on the logged-in user's email
    const filterMessages = () => {
        if (messages && user) {
            const userMessages = messages.filter(
                (msg) => msg.facultyEmail === user.email
            );
            setFilteredMessages(userMessages);
        }
    };

    // Filter messages on component mount and when `messages` or `user` changes
    useEffect(() => {
        filterMessages();
    }, [messages, user]);

    // Create a ref for the section to capture as PDF
    const messageRef = useRef();

    // Function to download the messages section as PDF
    const downloadPDF = () => {
        const element = messageRef.current;
        const options = {
            margin: 0.5,
            filename: "messages.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <>
            <div className="message bg-gray-600">
                <h1 className="text-white text-center py-5 mb-4 sticky top-[60px] bg-yellow-600 text-2xl">
                    Messages
                </h1>
                <div
                    id="serchbox"
                    className="sticky top-[60px] flex w-full justify-center bg-teal-400 py-2 p-1 mb-10"
                >
                    <div className="search flex justify-around items-center w-full">
                        <div className="btn">
                            <button
                                onClick={downloadPDF}
                                className="bg-blue-500 text-white p-2 rounded "
                            >
                                Download as PDF
                            </button>
                        </div>
                        <div className="inputtag">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Find student messages by email , name or message content , date etc."
                                className="w-[600px] h-[40px] px-2 outline-none"
                            />
                        </div>
                        <div className="searchbtn">
                            <button
                                id="searchbtn"
                                className="bg-yellow-500 text-white p-2 rounded"
                                onClick={filterMessages}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={messageRef}
                    className="messageList px-20 space-y-4 pb-10 "
                >
                    {filteredMessages && filteredMessages.length > 0 ? (
                        filteredMessages.map((msg, index) => (
                            <div
                                key={index}
                                x
                                className="messageItem space-y-2  bg-white shadow-xl ring-1 ring-slate-900/5 p-2 rounded-lg border border-gray-300 hover:scale-105 transform transition-all duration-300"
                            >
                                <h1 className="text-black">
                                    From: {user.name}
                                </h1>
                                <h1 className="text-black">{msg.message}</h1>
                                {(() => {
                                    const utcDate = new Date(msg.date); // UTC time
                                    const mydate = utcDate.toLocaleString(
                                        "en-IN",
                                        { timeZone: "Asia/Kolkata" }
                                    ); // Automatically converts to IST
                                    return (
                                        <h1 className="text-black">{mydate}</h1>
                                    );
                                })()}
                            </div>
                        ))
                    ) : (
                        <p className="text-white">No messages available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Message;
