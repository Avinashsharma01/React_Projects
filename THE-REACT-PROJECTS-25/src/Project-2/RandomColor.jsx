import { useState } from "react";

const RandomColor = () => {
    const [mycolor, setColor] = useState();

    // RGB COLOR
    const handleRGB = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        const rgbCOLOR = `RGB(${r}, ${g}, ${b})`;
        setColor(rgbCOLOR);
    };

    // HEX COLOR
    const handleHEX = () => {
        const hex = Math.floor(Math.random() * 16777215).toString(16); // Generate random number and convert to hex
        setColor(`#${hex.padStart(6, "0")}`);
    };

    // RANDOM COLOR
    const handleRandom = () => {
        Math.random() > 0.5 ? handleHEX() : handleRGB();
    };
    return (
        <div
            style={{ backgroundColor: mycolor }}
            className={`main w-full h-screen flex justify-center items-center space-x-5 relative`}
        >
            <h1 className="absolute top-5 text-white text-3xl uppercase underline tracking-widest">
                {" "}
                random color generator
            </h1>
            <div className="rgb">
                <button
                    onClick={handleRGB}
                    className="bg-yellow-600 text-white p-5 px-10 "
                >
                    {`${mycolor}`}
                </button>
            </div>
            <div className="hex">
                <button
                    onClick={handleHEX}
                    className="bg-yellow-600 text-white p-5 px-10"
                >
                    HEX:- {mycolor}
                </button>
            </div>
            <div className="random">
                <button
                    onClick={handleRandom}
                    className="bg-yellow-600 text-white p-5 px-10"
                >
                    RANDOM
                </button>
            </div>
        </div>
    );
};

export default RandomColor;
