import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/information-gathering.png";

function Nav() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const notifyout = () => toast("You Have logged out successfully");
    const notifyin = () => toast("You Have logged in successfully");
    console.log(user);
    return (
        <header className="bg-slate-600 text-white sticky top-0">
            <nav className="flex justify-around items-center h-[60px]">
                <div className="logo w-[25%] flex justify-around items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-72" />
                    </Link>
                </div>
                <div className="link  w-[50%] flex justify-around items-center ">
                    {isAuthenticated && (
                        <ul className="flex items-center font-serif">
                            <li className="p-2 w-24 text-center hover:bg-cyan-400 hover:px-5">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="p-2 w-24 text-center hover:bg-cyan-400 hover:px-5">
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li className="p-2 w-24 text-center hover:bg-cyan-400 hover:px-5">
                                <NavLink to="/Services">Services</NavLink>
                            </li>
                            <li className="p-2 w-24 text-center hover:bg-cyan-400 hover:px-5">
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="login w-[25%] flex justify-around items-center">
                    <ul className="flex items-center">
                        {isAuthenticated && (
                            <div className="profile ">
                                <div className="group  flex justify-center cursor-pointer ">
                                    <img
                                        className="w-12 rounded-[50%] "
                                        src={user.picture}
                                        alt={user.name}
                                    />
                                    <div className="dropdown hidden group-hover:block absolute bg-slate-600 p-2 rounded-md right-28 top-14   px-5 z-10  ">
                                        <p className="p-1">
                                            Username: {user.name}
                                        </p>
                                        <p className="p-1">
                                            Email: {user.email}
                                        </p>
                                        <p className="p-1">
                                            Id: {user.nickname}
                                        </p>
                                        <p className="p-1">Sub: {user.sub}</p>
                                        <p className="p-1">
                                            Email Verified:{" "}
                                            {user.email_verified ? "Yes" : "No"}
                                        </p>
                                    </div>
                                </div>

                                {/* conditional renddring */}
                            </div>
                        )}
                        <li className="p-2 login hover:bg-cyan-400 hover:px-5 mx-2 text-center w-[100px] ">
                            <NavLink to="#">
                                {isAuthenticated ? (
                                    <p
                                        onClick={() => {
                                            notifyout();
                                            logout({
                                                logoutParams: {
                                                    returnTo:
                                                        window.location.origin,
                                                },
                                            });
                                        }}
                                    >
                                        Logout
                                    </p>
                                ) : (
                                    <p
                                        onClick={() => {
                                            loginWithRedirect();
                                            notifyin();
                                        }}
                                    >
                                        Login
                                    </p>
                                )}
                            </NavLink>
                        </li>

                        {/* <li className="p-2 register  hover:bg-cyan-400 hover:px-5 w-[100px]" ><NavLink to="Register">Register</NavLink></li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
