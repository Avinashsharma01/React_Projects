import { useState } from "react";
import data from "./data";

const GptAccordian = () => {
    const [selectId, setSelectId] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);

    const handleClick = (id) => {
        if (!multiSelect) {
            setSelectId(selectId === id ? null : id);
        }
    };

    const handleModeToggle = () => {
        setMultiSelect(!multiSelect);
        setSelectId(null); // Reset single-select when switching modes
    };

    return (
        <div className="w-full h-auto min-h-screen bg-cyan-800 flex justify-center items-center flex-col space-y-5">
            <h1
                className="text-white text-4xl underline cursor-pointer"
                onClick={handleModeToggle}
            >
                Accordion{" "}
                {multiSelect ? "(Multi-Select Mode)" : "(Single-Select Mode)"}
            </h1>
            {data ? (
                data.map((item) => (
                    <div
                        key={item.id}
                        className="w-96 h-auto bg-slate-700 text-white flex justify-center items-center flex-col px-5 py-3"
                    >
                        <h1
                            onClick={() => handleClick(item.id)}
                            className="text-2xl text-yellow-400 cursor-pointer underline py-1"
                        >
                            {item.id}
                        </h1>
                        {(multiSelect || selectId === item.id) && (
                            <div className="text-center">
                                <h1 className="text-lg">{item.title}</h1>
                                <h2>{item.content}</h2>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <h1>There is nothing</h1>
            )}
        </div>
    );
};

export default GptAccordian;
