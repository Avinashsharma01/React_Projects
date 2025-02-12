/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../Project-3/style.css";

const StarRatting = ({ noOfStar = 5 }) => {
    const [ratting, setRatting] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRatting(getCurrentIndex);
    };

    const handleMove = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    };

    const handleLeave = () => {
        setHover(ratting);
    };

    return (
        <div className=" star-ratting w-full h-screen bg-slate-700 flex justify-center items-center flex-wrap content-center">
            {[...Array(noOfStar)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={`cursor-pointer text-white text-8xl ${
                            index <= (hover || ratting) ? "active" : "inactive"
                        }`}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMove(index)}
                        onMouseLeave={() => handleLeave()}
                    />
                );
            })}
        </div>
    );
};

export default StarRatting;
