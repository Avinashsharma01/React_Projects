import { SiGooglegemini } from "react-icons/si";

const GeminiLoader = () => {
    return (
        <div className="loader flex w-full items-center justify-center gap-3">
            {/* <div className="load"> */}
            <SiGooglegemini className="gemini-icon text-sky-700 text-4xl animate-spin" />
            <p className="text-sky-700 font-semibold">Generating Response...</p>
            {/* </div> */}
        </div>
    );
};

export default GeminiLoader;
