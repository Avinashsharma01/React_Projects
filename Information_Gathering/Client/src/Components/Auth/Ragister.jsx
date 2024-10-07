import { NavLink } from "react-router-dom";

function Ragister() {
    return (
        <div className=" Registerpage w-full h-screen flex justify-center items-center">
            <form
                action=""
                className="bg-slate-600 text-white w-1/4  h-4/5 flex rounded-sm flex-col p-8 "
            >
                <div className="head flex justify-center ">
                    <h1 className="text-3xl mb-5 mt-12 uppercase">
                        Register here
                    </h1>
                </div>
                <label htmlFor="name">Name </label>
                <input
                    className=" text-black rounded-md outline-none  p-2 mb-5"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                />
                <label htmlFor="email">Email </label>
                <input
                    className=" text-black rounded-md outline-none  p-2 mb-5"
                    type="text"
                    name="email"
                    id="enail"
                    placeholder="Enter your email"
                />
                <label htmlFor="password">Password</label>
                <input
                    className=" text-black rounded-md outline-none  p-2 mb-2"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Create password"
                />
                <p>
                    Already have an account {" "}
                    <span className="text-green-500 underline">
                        {" "}
                        <NavLink to="/Login">Login </NavLink>{" "}
                    </span>
                </p>
                <input
                    className=" text-white rounded-md outline-none  p-2 mb-5 bg-blue-600 mt-5"
                    type="submit"
                    name=""
                    id=""
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default Ragister;
