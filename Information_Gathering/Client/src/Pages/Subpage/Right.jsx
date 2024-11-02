/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Right({ users, handleUserClick }) {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    // console.log(typeof users);
    // console.log(Array.isArray(users));

    const handleClick = (item) => {
        handleUserClick(item); // Pass clicked user to parent
    };

    return (
        <>
            <div
                id="righttpart"
                className="w-[60%]  bg-slate-500 p-3 overflow-y-scroll "
            >
                {users.length > 0 ? (
                    users.map((item) => (
                        <div
                            key={item._id}
                            className="user cursor-pointer w-full   bg-slate-300 hover:bg-slate-400 mt-2 px-3 py-2 rounded-lg flex "
                            onClick={() => handleClick(item)}
                        >
                            <div className="profileIMG flex justify-center items-center ">
                                <img
                                    src={user.picture}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full max-md:h-14 max-md:w-14   bg-orange-400 mr-10 "
                                />
                            </div>
                            <div className="rightdata max-md:text-sm max-sm:text-sm  ">
                                <h1 className="text-black">
                                    Name:- {item.name}
                                </h1>
                                <h1 className="text-black">
                                    Email:- {item.email}
                                </h1>
                                <h1 className="text-black">
                                    Mobile:- {item.mobile}
                                </h1>
                                <h1 className="text-black">
                                    Course:- {item.course}
                                </h1>
                                <h1 className="text-black">
                                    Branch:- {item.branch}
                                </h1>
                                <h1 className="text-black">
                                    Enrollment:- {item.enrollment}
                                </h1>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-white flex w-full h-screen justify-center items-center">
                        <h1 className="text-4xl -mt-24 ">No users found</h1>
                    </div>
                )}
            </div>
        </>
    );
}

export default Right;
