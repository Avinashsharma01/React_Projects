import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";
function Update() {

    const {id}= useParams()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const Navigate= useNavigate()


    useEffect(()=>{
        axios.get("http://localhost:3000/getUser/"+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setPassword(result.data.password)
            
        })
        .catch(err => console.log(err))
    })


    const UpdateBTN=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/updateUser/"+id, {name, email, password})
        .then(result => {
            console.log(result)
            // Navigate("/")
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="container w-full h-screen flex justify-center items-center">
                <div className="Register w-2/4 h-72 bg-gray-600 p-10">
                    <h1 className="text-2xl">Update User</h1>
                    <form action="" onSubmit={UpdateBTN}>
                        <label htmlFor="">Name</label>
                        <input
                            className="block w-72 h-[30px]"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="">Email</label>
                        <input
                            className="block w-72 h-[30px]"
                            type="text"
                            name="Email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="">Password</label>
                        <input
                            className="block w-72 h-[30px]"
                            type="text"
                            name="Password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="submit"
                            className="bg-green-700
               text-white mt-4"
               value="Update User"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Update;
