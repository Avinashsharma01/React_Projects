import { NavLink } from "react-router-dom";

function Login() {
    return (
        <div className="loginpage w-full h-screen flex justify-center items-center">
            <form
                action=""
                className="w-1/4  h-3/5 bg-slate-600 text-white flex jucstify-center flex-col p-8 rounded-sm"
            >
                <div className="header">
                    <h1 className="text-3xl text-center mb-10 uppercase">
                        {" "}
                        Login form{" "}
                    </h1>
                </div>
                <label htmlFor="Username">Username </label>
                <input
                    className=" text-black h-10 mb-5 px-3 outline-none  rounded-md"
                    type="text"
                    name="Username"
                    placeholder="Username or email"
                    id="Username"
                />
                <label htmlFor="Username">Password </label>
                <input
                    className="  text-black h-10 px-3 outline-none  rounded-md"
                    type="text"
                    name="Password"
                    placeholder="Password"
                    id="Password"
                />
                <p className="mt-2">
                    If you are new here{" "}
                    <span className="text-green-500 underline">
                        {" "}
                        <NavLink to="/Register">Create account </NavLink>{" "}
                    </span>{" "}
                </p>

                <input
                    type="submit"
                    value="Login"
                    className="    h-10 mt-10 rounded-md text-white bg-blue-600"
                />
            </form>
        </div>
    );
}

export default Login;
