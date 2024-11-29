import { useState } from "react";
import { assets } from "../../assets/assets";
import generateAIContent from "../../config/Gemini.js";
import ResponseData from "../ResponseData.jsx";
import SearchBaar from "../SearchBaar.jsx";
import { Store } from "../../ContextApi/Store.jsx";
import { useContext } from "react";
function Main() {
    const [input, setInput] = useState("");
    const [finalOutput, setFinalOutput] = useState("");

    const { setLoading, Loading } = useContext(Store);
    // let data = async () => {
    //     let finalData = await generateAIContent(input);
    //     setFinalOutput(finalData);
    //     setLoading(true);
    // };

    // let data = async () => {
    //     setLoading(true); // Set loading to true before starting the fetch
    //     let finalData = await generateAIContent(input);
    //     // Adding the formation
    //     let newResponseArray = finalData.split("**");
    //     let newResponse;
    //     for (let i = 0; i < newResponseArray.length; i++) {
    //         if (i == 0 || i % 2 !== 1) {
    //             newResponse += newResponseArray[i];
    //         } else {
    //             newResponse += "<b>" + newResponseArray[i] + "</b>";
    //         }
    //     }
    //     let newResponse2 = newResponse.split("*").join("<br>");
    //     setFinalOutput(newResponse2);
    //     setLoading(false); // Set loading to false after data fetch is complete
    // };

    let data = async () => {
        setLoading(true); // Set loading to true before starting the fetch

        try {
            let finalData = await generateAIContent(input);

            // Split the response by '**'
            let newResponseArray = finalData.split("**");
            let newResponse = ""; // Initialize newResponse

            for (let i = 0; i < newResponseArray.length; i++) {
                if (i % 2 === 0) {
                    // For even indices, add plain text
                    newResponse += newResponseArray[i];
                } else {
                    // For odd indices, add bold text
                    newResponse += "<b>" + newResponseArray[i] + "</b>";
                }
            }

            // Replace '*' with '<br>' for line breaks
            let newResponse2 = newResponse.split("*").join("<br>");

            setFinalOutput(newResponse2); // Set the formatted output
        } catch (error) {
            console.error("Error generating AI content:", error);
            setFinalOutput("An error occurred while generating content.");
        }

        setLoading(false); // Set loading to false after data fetch is complete
    };

    let Handle = (e) => {
        setInput(e.target.value);
    };

    let SendMessage = () => {
        data();
        setInput("");
    };

    return (
        <div className="Main  w-full h-screen  ">
            <div className="nav bg-slate-700 flex justify-between px-5  py-2 items-center sticky top-0 right-0">
                <p className="text-4xl text-white ">Gemini</p>
                <h1 className="text-white text-2xl">Avinash Kumar Sharma</h1>
                <img
                    src={assets.user_icon}
                    alt=""
                    className="w-14 rounded-full"
                />
            </div>
            {/* center data of the website */}
            {finalOutput || Loading ? (
                <ResponseData finalOutput={finalOutput} />
            ) : (
                <div className="main-container  px-52  flex flex-col justify-around   w-full h-[650px] ">
                    <div className="greet text-6xl mt-20">
                        <p>
                            <span className="gradient-text ">
                                Hello, Avinash
                            </span>
                        </p>
                        <p>How can i help you today</p>
                    </div>
                    <div className="card-container justify-around items-center  flex">
                        <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptates, labore.
                            </p>
                            <img
                                src={assets.compass_icon}
                                alt=""
                                className="w-8 absolute
                    right-2 top-40  "
                            />
                        </div>
                        <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptates, labore.
                            </p>
                            <img
                                src={assets.bulb_icon}
                                alt=""
                                className="w-8 absolute
                    right-2 top-40"
                            />
                        </div>
                        <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptates, labore.
                            </p>
                            <img
                                src={assets.message_icon}
                                alt=""
                                className="w-8 absolute right-2 top-40"
                            />
                        </div>
                        <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptates, labore.
                            </p>
                            <img
                                src={assets.code_icon}
                                alt=""
                                className="w-8 absolute right-2 top-40"
                            />
                        </div>
                    </div>
                </div>
            )}
            {/* Search baar placed here  */}
            <SearchBaar
                SendMessage={SendMessage}
                Handle={Handle}
                input={input}
            />
        </div>
    );
}

export default Main;
