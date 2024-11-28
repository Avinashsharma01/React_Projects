import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setCpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };

        await axios
            .post("http://localhost:5000/api/signup", data)
            .then((res) => {
                console.log(res.data);
                setName("");
                setEmail("");
                setPassword("");
                setCpassword("");
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className=" Registerpage w-full h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
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
                    className=" text-white rounded-md outline-none  p-2 mb-5"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email </label>
                <input
                    className=" text-white rounded-md outline-none  p-2 mb-5"
                    type="text"
                    name="email"
                    id="enail"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    className=" text-white rounded-md outline-none  p-2 mb-2"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Create password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Conform Password</label>
                <input
                    className=" text-white rounded-md outline-none  p-2 mb-2"
                    type="text"
                    name="confirmPassword"
                    id="password"
                    placeholder="Create password"
                    onChange={(e) => setCpassword(e.target.value)}
                />
                <p>
                    Already have an account{" "}
                    <span className="text-green-500 underline">
                        {" "}
                        <NavLink to="/login">Login </NavLink>{" "}
                    </span>
                </p>
                <input
                    className=" text-white rounded-md outline-none cursor-pointer p-2 mb-5 bg-blue-600 mt-5"
                    type="submit"
                    name=""
                    id=""
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Signup;
