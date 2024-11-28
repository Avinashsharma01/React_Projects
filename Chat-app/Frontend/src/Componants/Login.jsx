import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };
        await axios
            .post("http://localhost:5000/api/login", data)
            .then((res) => {
                console.log(res.data);
                setEmail("");
                setPassword("");
                navigate("/home");
            });
        setEmail("");
        setPassword("");
        navigate("/home");
    };

    return (
        <>
            <div className="loginpage w-full h-screen flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className="w-1/4  h-3/5 bg-slate-600 text-white flex jucstify-center flex-col p-8 rounded-sm"
                >
                    <div className="header">
                        <h1 className="text-3xl text-center mb-10 uppercase">
                            {" "}
                            Login form{" "}
                        </h1>
                    </div>
                    <label htmlFor="Username">email </label>
                    <input
                        className=" text-white h-10 mb-5 px-3 outline-none  rounded-md"
                        type="text"
                        name="email"
                        placeholder="Username or email"
                        id="Username"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="Username">Password </label>
                    <input
                        className="  text-white h-10 px-3 outline-none  rounded-md"
                        type="text"
                        name="Password"
                        placeholder="Password"
                        id="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="mt-2">
                        If you are new here{" "}
                        <span className="text-green-500 underline">
                            {" "}
                            <NavLink to="/signup">Create account </NavLink>{" "}
                        </span>{" "}
                    </p>

                    <input
                        type="submit"
                        value="Login"
                        className=" cursor-pointer    h-10 mt-10 rounded-md text-white bg-blue-600"
                    />
                </form>
            </div>
        </>
    );
};

export default Login;
