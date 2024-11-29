/* eslint-disable react/prop-types */
import { SiGooglegemini } from "react-icons/si";
import { assets } from "../assets/assets";
import { Store } from "../ContextApi/Store"; // Correct import
import { useContext } from "react";
import GeminiLoader from "./GeminiLoader ";

const ResponseData = ({ finalOutput }) => {
    const { Loading } = useContext(Store); // Use Store directly

    console.log(Loading);
    return (
        <>
            <div className="px-52 py-10 flex-1 w-full min-h-[650px] h-auto">
                <div className="responseData h-full w-full flex gap-10 flex-col justify-center items-start">
                    <div className="profilePrompt flex justify-center items-end gap-5">
                        <img
                            src={assets.user_icon}
                            alt="user icon"
                            className="w-10 rounded-full"
                        />
                        <p className="font-semibold">Helloooooo</p>
                    </div>
                    {Loading ? (
                        <GeminiLoader /> // Use loader component here
                    ) : (
                        <div className="GeminiResponse flex gap-5">
                            <SiGooglegemini className="text-sky-700 text-2xl" />
                            <div
                                className="flex-1 overflow-y-auto text-[17px] font-light leading-8"
                                dangerouslySetInnerHTML={{
                                    __html: finalOutput,
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ResponseData;
