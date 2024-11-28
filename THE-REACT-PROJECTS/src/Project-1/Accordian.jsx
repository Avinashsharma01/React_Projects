import { useState } from "react";
import data from "./data";

const Accordian = () => {
    const [selectId, setSelectId] = useState();
    const [multiSelect, setMultiselect] = useState(false);
    const handleClick = (id) => {
        setSelectId(id == selectId ? null : id);
        setMultiselect(false);
    };

    // handle multiple
    const handleMultiple = () => {
        setMultiselect(true == multiSelect ? null : true);
        setSelectId(null);
    };
    return (
        <div className="w-full h-auto min-h-screen bg-cyan-800 flex  justify-center items-center flex-col space-y-5">
            <h1
                className="text-white text-4xl underline cursor-pointer bg-cyan-700 py-2 w-full text-center"
                onClick={handleMultiple}
            >
                Accordian
            </h1>
            {data ? (
                data.map((item) => (
                    <div
                        key={item.id}
                        className="w-96 h-32  bg-slate-700 text-white flex justify-center items-center flex-col px-5"
                    >
                        <h1
                            onClick={() => handleClick(item.id)}
                            className="text-2xl text-yellow-400 cursor-pointer underline py-1  "
                        >
                            {item.id}
                        </h1>

                        {/* i have put this inside the or condition  */}
                        {/* {multiSelect ? (
                            <div className="text-center">
                                <h1 className="text-lg">{item.title}</h1>
                                <h2>{item.content}</h2>
                            </div>
                        ) : null}
                         */}
                        {selectId == item.id || multiSelect ? (
                            <div className="text-center">
                                <h1 className="text-lg">{item.title}</h1>
                                <h2>{item.content}</h2>
                            </div>
                        ) : null}
                    </div>
                ))
            ) : (
                <h1>There is nothing</h1>
            )}
        </div>
    );
};

export default Accordian;
