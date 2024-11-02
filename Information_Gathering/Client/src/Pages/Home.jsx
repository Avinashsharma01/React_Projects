/* eslint-disable react/prop-types */
// import Footer from "../Components/Footer";
// import Nav from "../Components/Nav";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Left from "./Subpage/Left";
import Right from "./Subpage/Right";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

function Home({ allowedUser }) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const notify = () => toast("You Have make a search");
    const { isAuthenticated, user } = useAuth0();

    // search bar functionalty start from here
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:3000/user?search=${search}`)
            .then((res) => {
                // console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [search]);

    // Function to handle selected user
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    // console.log(users);

    return (
        <>
            {/* <Nav /> */}

            {/* main section start from here  */}
            <main id="main" className=" homepage w-full h-auto">
                <div
                    id="serchbox"
                    className=" sticky top-[60px] flex w-full justify-center bg-teal-400 p-1 "
                >
                    <div className="search  ">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Find student"
                            className="w-[600px] h-[40px] px-2 outline-none"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            id="searchbtn"
                            className="bg-yellow-500 text-white h-[40px] px-2"
                            onClick={notify}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Main section start from here  */}
                <div id="mainbox" className="flex h-screen ">
                    {/* Pass selectedUser to Left component */}
                    <Left selectedUser={selectedUser} />
                    {/* Pass users and handleUserClick to Right component */}
                    <Right users={users} handleUserClick={handleUserClick} />
                </div>
            </main>

            {/* <Footer /> */}
        </>
    );
}

export default Home;
