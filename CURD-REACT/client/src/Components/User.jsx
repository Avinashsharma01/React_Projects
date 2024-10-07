import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
function User() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate= useNavigate()
    
    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", {name, email, password})
        .then(result => {
            console.log(result)
            Navigate("/")
        })
        .catch(err => console.log(err))
    }
    
    return (
        <>
            <div className="container w-full h-screen flex justify-center items-center">
                <div className="Register w-2/4 h-72 bg-gray-600 p-10">
                <h1 className="text-2xl" >Create User</h1>
                    <form action=""  onSubmit={Submit}>
                        <label htmlFor="">Name</label>
                        <input
                            className="block w-72 h-[30px]"
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="">Email</label>
                        <input
                            className="block w-72 h-[30px]"
                            type="text"
                            name="Email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="">Password</label>
                        <input
                            className="block w-72 h-[30px]"
                            type="text"
                            name="Password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="bg-green-700
               text-white mt-4" > Submit </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default User;
