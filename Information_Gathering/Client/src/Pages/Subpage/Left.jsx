/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Left({ selectedUser }) {
    const { isauthenticated, user } = useAuth0();
    const [message, setMessage] = useState("");
    const [faculty, setFaculty] = useState([]);
    const [facultyId, setFacultyId] = useState("");

    // fetch the faculty data
    useEffect(() => {
        axios
            .get("http://localhost:3000/faculty")
            .then((res) => {
                setFaculty(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(user.email);

    // get the faculty id
    useEffect(() => {
        faculty.map((item) => {
            if (item.email === user.email) {
                setFacultyId(item._id);
            }
        });
    }, [user.email, faculty]);

    // // submit message to the user selected //  created by me //  working fine
    // const submitMessage = () => {
    //     axios.post("http://localhost:3000/user/postMessage", {
    //         selectedUser: selectedUser._id,
    //         facultyId: facultyId,
    //         message: message,
    //     });
    // };

    // // submit the messase
    // const submitMessage = async () => {
    //     try {
    //         // // Show feedback to user (optional)
    //         // setLoading(true);

    //         // Send post request
    //         const response = await axios.post(
    //             "http://localhost:3000/user/postMessage",
    //             {
    //                 selectedUser: selectedUser._id,
    //                 facultyId: facultyId,
    //                 message: message,
    //             }
    //         );
    //         setSendResponse(true);

    //         // Handle response or success feedback
    //         console.log("Message sent successfully:", response.data);
    //         setMessage(""); // Clear the message field (optional)

    //         return response.data; // Return data for further use if needed
    //     } catch (error) {
    //         // Handle error
    //         console.error("Error sending message:", error);
    //         alert("Failed to send message. Please try again.");
    //     } finally {
    //         // Reset loading state
    //         // setLoading(false);
    //     }
    // };

    const submitMessage = async () => {
        try {
            const data = {
                facultyId: facultyId,
                studentId: selectedUser._id,
                facultyEmail: user.email,
                message: message,
            };

            // Send post request
            const response = await axios.post(
                "http://localhost:3000/user/postMessage",
                data
            );

            notifySuccess(); // Show success notification immediately
            setMessage(" "); // Clear the message field if needed

            console.log("Message sent successfully:", response.data);
            return response.data; // Return data for further use if needed
        } catch (error) {
            console.error(
                "Error sending message:",
                error.response ? error.response.data : error.message
            );
            alert(
                "You have to select a student and  write a message to send it."
            );
            notifyError(); // Show error notification if it fails
        }
    };

    const notifySuccess = () =>
        toast.success("Submitted Successfully", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const notifyError = () =>
        toast.error("Submission Failed. Please try again.", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    return (
        <>
            <div
                id="leftpart"
                className=" w-[40%]  bg-slate-700 flex justify-center items-center"
            >
                <div className="text">
                    <div className="Studentdata bg-slate-400 w-96 h-[600px] flex flex-col items-center pt-10">
                        <div className="profileimg -mt-6 mb-2">
                            <img
                                src="https://lh3.googleusercontent.com/a/AAcHTtewIAOe2YGiD49UmTgVPso-Nx1H-gvq1HEywL_DBJeYKEM=s96-c"
                                alt=""
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                        <div className="leftdata  ">
                            {selectedUser ? (
                                <div className="space-y-2 ">
                                    <h1 className="text-white bg-slate-500 px-2 hover:scale-105 transform transition-all duration-300  ">
                                        <span className="font-bold text-black">
                                            StudentDb ID:-
                                        </span>{" "}
                                        {selectedUser._id}
                                    </h1>
                                    <h1 className="text-white  bg-slate-500 px-2  hover:scale-105 transform transition-all duration-300 ">
                                        <span className="font-bold text-black">
                                            Name:-
                                        </span>{" "}
                                        {selectedUser.name}
                                    </h1>
                                    <h1 className="text-white  bg-slate-500  px-2 hover:scale-105 transform transition-all duration-300">
                                        <span className="font-bold text-black">
                                            Email:-
                                        </span>{" "}
                                        {selectedUser.email}
                                    </h1>
                                    <h1 className="text-white  bg-slate-500  px-2 hover:scale-105 transform transition-all duration-300">
                                        <span className="font-bold text-black">
                                            Mobile:-
                                        </span>{" "}
                                        {selectedUser.mobile}
                                    </h1>
                                    <h1 className="text-white  bg-slate-500 px-2 hover:scale-105 transform transition-all duration-300">
                                        <span className="font-bold text-black">
                                            Course:-
                                        </span>{" "}
                                        {selectedUser.course}
                                    </h1>
                                    <h1 className="text-white  bg-slate-500  px-2  hover:scale-105 transform transition-all duration-300  ">
                                        <span className="font-bold text-black ">
                                            Enrollment:-
                                        </span>{" "}
                                        {selectedUser.enrollment}
                                    </h1>

                                    <div className=" flex w-full justify-center  ">
                                        <NavLink
                                            to={{
                                                pathname: "/Message",
                                            }}
                                            state={{
                                                messages: selectedUser.messages,
                                            }}
                                            className="text-white text-center bg-green-700 p-2 rounded-md w-full "
                                        >
                                            Message
                                        </NavLink>
                                    </div>

                                    <select
                                        name=""
                                        id=""
                                        className="w-full outline-none mt-6 h-8 rounded-md px-2"
                                    >
                                        <option value="select">
                                            Select whom to talk with...
                                        </option>
                                        <option value="father">father</option>
                                        <option value="mother">mother</option>
                                        <option value="brothr">brothr</option>
                                        <option value="grandfather">
                                            grandfather
                                        </option>
                                        <option value="grandmother">
                                            grandmother
                                        </option>
                                    </select>
                                </div> //  it was empty
                            ) : (
                                <div className="w-full h-[280px] flex justify-center items-center">
                                    <h1 className="text-white">
                                        Select a user to to work with
                                    </h1>
                                </div>
                            )}
                        </div>
                        <textarea
                            id="textariaid"
                            cols={45}
                            rows={10}
                            className=" p-4 mt-5 outline-none "
                            placeholder="Type your message here"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        ></textarea>
                    </div>
                    <div className="btn flex justify-center">
                        <button
                            className="bg-yellow-500 text-white w-full mt-1 p-2 "
                            onClick={() => submitMessage()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Left;
