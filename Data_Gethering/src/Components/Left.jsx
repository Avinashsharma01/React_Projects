import { useState } from 'react';
function Left() {
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        response: "",
    });

    localStorage.setItem("data", JSON.stringify(data));
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        }
        );
        console.log(data);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(data);
    // }

    return (
        <div className=" left w-[40%] bg-slate-400 border-r-2">
            <div className="text-center">
                <div className="text h-[70px]  bg-cyan-600 text-white">
                    <h1 className="text-3xl font-bold">
                        Welcome to Input Dashboard
                    </h1>
                    <p className="text-lg">
                        We provide the best data for your business
                    </p>
                </div>

                <div className="form flex justify-center items-center h-[75vh] w-full">
                    <form onSubmit={handleChange} action="#" className="w-[60%] h-[85%] bg-cyan-800 p-10 flex  justify-center flex-col  rounded-md  "  >
                        {/* <label htmlFor="">ID</label> */}
                        <input className="mb-3 p-2 w-full rounded-sm" type="number"  placeholder="Enter Id " /><br />
                        {/* <label htmlFor="">Name</label> */}
                        <input className="mb-3 p-2 w-full rounded-sm" type="text" placeholder="Enter Name" /><br />
                        {/* <label htmlFor="">Number</label> */}
                        <input className="mb-3 p-2 w-full rounded-sm" type="email" placeholder="Enter Email" /><br />
                        {/* <label htmlFor="">Response</label> */}
                        <select name="" id="" className="p-2 rounded-sm">
                            <option value="">Select Response</option>
                            <option value="">Interested</option>
                            <option value="">Not Interested</option>
                        </select><br />
                        <button onClick={handleChange} className="bg-orange-400 text-white p-2 rounded-sm">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Left;
