import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

    
function Home() {

    const [users, setUsers]= useState([])



    useEffect(()=>{
        axios.get("http://localhost:3000")
        .then(result => {
            setUsers(result.data)
            
        })
        .catch(err => console.log(err))
    })

    return (
        <>
            <header>
                <nav className=" w-full h-[60px] bg-slate-600 text-fuchsia-100 flex justify-around  items-center">
                    <div className="logo">
                        <h1 className="text-2xl">Avinash Sharma</h1>
                    </div>
                    <div className="link">
                        <NavLink className="mr-4  cursor-pointer" href="">
                            Home
                        </NavLink>
                        <NavLink
                            className="mr-4  cursor-pointer"
                            to="/Register"
                        >
                            Register
                        </NavLink>
                        <NavLink className="mr-4  cursor-pointer" href="">
                            Contact
                        </NavLink>
                        <NavLink className="mr-4  cursor-pointer" href="">
                            Services
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main className="p-10">
                <h1 className="text-xl text-red-700">Created User</h1>

                <div className="tables w-full h-[80vh] flex justify-center items-center ">
                    <table className="border">
                        <thead>
                        <tr>
                            <th className="p-4" >Name</th>
                            <th className="p-4" >Email</th>
                            <th className="p-4" >Password</th>
                            <th className="p-4" >Actions </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            users.map((item, index)=>(
                                <tr key={index}>
                                   
                                    <td className="p-4">{item.name}</td>
                                    <td className="p-4">{item.email}</td>
                                    <td className="p-4">{item.password}</td>
                                    <td className="p-4"  > <NavLink to={`/update/${item._id}`}  className="bg-yellow-500 mr-2" >Update</NavLink>
                                    <NavLink to={`/delete/${item._id}`}  className="bg-red-500" >Delete</NavLink>
                                    
                                     </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Home;
