fint port = netstat -aon

kill process = taskkill /PID 4321 /F

// i will use this for formate date
// const utcDate = new Date('2024-10-22T18:33:22.102Z'); // UTC time
// const istDate = new Date(utcDate.getTime() + (5.5 _ 60 _ 60 \* 1000)); // Convert to IST

// console.log(istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

home

import axios from "axios";
import { useEffect, useState } from "react";
import Left from "./Subpage/Left";
import Right from "./Subpage/Right";

function Home() {
const [users, setUsers] = useState([]);
const [selectedUser, setSelectedUser] = useState(null); // State to store selected user

    useEffect(() => {
        axios
            .get("http://localhost:4000/user")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Function to handle selected user
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <>
            <main className="main homepage w-full h-auto">
                <div
                    id="serchbox"
                    className="sticky top-[60px] flex w-full justify-center bg-teal-400 p-1"
                >
                    <div className="search">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Find student"
                            className="w-[600px] h-[40px] px-2 outline-none"
                        />
                        <button
                            id="searchbtn"
                            className="bg-yellow-500 text-white h-[40px] px-2"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Main section start */}
                <div id="mainbox" className="flex">
                    {/* Pass selectedUser to Left component */}
                    <Left selectedUser={selectedUser} />
                    {/* Pass users and handleUserClick to Right component */}
                    <Right users={users} onUserClick={handleUserClick} />
                </div>
            </main>
        </>
    );

}

export default Home;

right

import { useAuth0 } from "@auth0/auth0-react";

function Right({ users, onUserClick }) {
const { user } = useAuth0();

    const handleClick = (item) => {
        onUserClick(item); // Pass clicked user to parent
    };

    return (
        <div id="righttpart" className="w-[60%] h-screen bg-slate-500 p-3 overflow-y-auto">
            {users.length > 0 ? (
                users.map((item) => (
                    <div
                        key={item._id}
                        className="user cursor-pointer w-full h-auto bg-slate-300 mt-2 px-3 py-2 rounded-lg flex"
                        onClick={() => handleClick(item)}
                    >
                        <div className="profileIMG flex justify-center items-center">
                            <img
                                src={user.picture}
                                alt={item.name}
                                className="w-20 h-20 rounded-full bg-orange-400 mr-10"
                            />
                        </div>
                        <div className="rightdata">
                            <h1 className="text-black">Name:- {item.name}</h1>
                            <h1 className="text-black">Email:- {item.email}</h1>
                            <h1 className="text-black">Mobile:- {item.mobile}</h1>
                            <h1 className="text-black">Course:- {item.course}</h1>
                            <h1 className="text-black">Enrollment:- {item.enrollment}</h1>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-white">No users found</div>
            )}
        </div>
    );

}

export default Right;

left

function Left({ selectedUser }) {
return (
<div
            id="leftpart"
            className="w-[40%] h-screen bg-slate-700 flex justify-center items-center"
        >
<div className="text">
<div className="Studentdata bg-slate-400 w-96 h-[500px] flex flex-col items-center pt-10">
<div className="profileimg">
<img
src={selectedUser ? selectedUser.picture : "https://via.placeholder.com/150"}
alt=""
className="w-20 h-20 rounded-full"
/>
</div>
<div className="leftdata">
{selectedUser ? (
<>
<h1 className="text-white">
<span className="font-bold text-black">Name:-</span> {selectedUser.name}
</h1>
<h1 className="text-white">
<span className="font-bold text-black">Email:-</span> {selectedUser.email}
</h1>
<h1 className="text-white">
<span className="font-bold text-black">Mobile:-</span> {selectedUser.mobile}
</h1>
<h1 className="text-white">
<span className="font-bold text-black">Course:-</span> {selectedUser.course}
</h1>
<h1 className="text-white">
<span className="font-bold text-black">Enrollment:-</span> {selectedUser.enrollment}
</h1>
</>
) : (
<h1 className="text-white">Select a user to see details</h1>
)}
</div>
</div>
<div className="btn flex justify-center">
<button className="bg-yellow-500 text-white w-20 p-2 mt-5">
Submit
</button>
</div>
</div>
</div>
);
}

export default Left;
