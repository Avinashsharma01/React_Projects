import { useState } from "react";
import data from "./data";
function Accordian() {
    const [Answer, setAnswer] = useState();
    // console.log(Answer)
    let GetID = (hello) => {
        console.log(hello);
        setAnswer(hello === Answer ? null : hello);
    };
    return (
        <div className="Wraper w-full h-screen flex justify-center items-center">
            <div className="Accordian text-center  w-2/4 px-2 py-2">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="title cursor-pointer bg-slate-700 mb-2 px-10 py-3"
                            onClick={() => GetID(item.id)}
                        >
                            <h1 className="text-white">{item.question}</h1>
                            <span className="text-white">+</span>


                            {Answer === item.id ? (
                                <div>
                                    <p className="text-gray-400">
                                        {item.answer}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>Data no present</div>
                )}
            </div>
        </div>
    );
}

export default Accordian;
