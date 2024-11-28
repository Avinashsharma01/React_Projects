import { data } from "autoprefixer"; // Importing data from autoprefixer (not used in this code)
import axios from "axios"; // Importing axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing React hooks

function Todo() {
    // State to store the title of the new todo
    const [title, setTitle] = useState("");
    // State to store the list of todos
    const [todos, setTodos] = useState([]);
    // State to trigger updates
    const [update, setUpdate] = useState(false);
    // State to store the id of the todo being edited
    const [editing, setEdinting] = useState(null);
    // State to store the updated title of the todo being edited
    const [updateTitile, setUpdateTitle] = useState("");

    // Function to handle form submission for creating a new todo
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        axios
            .post("http://localhost:5000/create-todo", { title }) // Send a POST request to create a new todo
            .then((res) => {
                console.log(res.data); // Log the response data
                setTodos([...todos, res.data]); // Add the new todo to the list
                setTitle(""); // Clear the title input
            })
            .catch((err) => {
                console.log(err); // Log any errors
            });
    };

    // Function to handle deleting a todo
    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5000/delete-todo/${id}`) // Send a DELETE request to delete the todo
            .then((res) => {
                console.log(res.data); // Log the response data
                // Filter out the deleted todo from the todos state
                setTodos((previous) =>
                    previous.filter((data) => data._id !== id)
                );
            })
            .catch((err) => {
                console.log(err); // Log any errors
            });
    };

    // Function to handle updating a todo
    const handleUpdate = (selectedItem) => {
        setUpdate(true); // Set update state to true
        setEdinting(selectedItem); // Set the editing state to the selected item
        setUpdateTitle(selectedItem.title); // Set the update title state to the selected item's title
    };

    // Function to submit the updated todo
    const submitUpdate = () => {
        axios
            .put(`http://localhost:5000/update-todo/${editing._id}`, {
                title: updateTitile,
            }) // Send a PUT request to update the todo
            .then((data) => {
                setTodos((previous) =>
                    previous.map((item) =>
                        item._id === editing._id
                            ? { ...item, title: updateTitile }
                            : item
                    )
                );

                setUpdate(false); // Reset update state
                setEdinting(null); // Reset editing state
                setUpdateTitle(""); // Clear update title input
            })
            .catch((error) => {
                console.log(error); // Log any errors
            });
    };

    // Function to cancel the update
    const handleCancel = () => {
        setUpdate(false); // Reset update state
    };

    // Function to handle marking a todo as done or not done
    const handleDone = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo._id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);

        // // Optionally, you can send a request to update the todo on the server
        // axios
        //     .put(`http://localhost:5000/update-todo/${id}`, {
        //         completed: !todos.find((todo) => todo._id === id).completed,
        //     })
        //     .then((res) => {
        //         console.log(res.data); // Log the response data
        //     })
        //     .catch((err) => {
        //         console.log(err); // Log any errors
        //     });
    };

    // Fetch todos when the component mounts
    useEffect(() => {
        axios
            .get("http://localhost:5000/todos") // Send a GET request to fetch todos
            .then((res) => {
                console.log(res.data); // Log the response data
                setTodos(res.data); // Set the todos state with the fetched data
            })
            .catch((err) => {
                console.log(err); // Log any errors
            });
    }, []);

    return (
        <div
            className="main_container w-full h-screen flex justify-center items-center"
            style={{
                height: "calc(100vh - 120px)",
                // backgroundColor: "#e0f7fa",
            }}
        >
            <div className="container w-5/6 h-5/6 bg-slate-500 rounded-md flex justify-center items-center p-10  flex-col">
                <div className="todoAp h-screen  overflow-y-scroll   ">
                    <div className="header sticky top-0 bg-slate-700 w-[700px] text-center p-5">
                        <div className="head">
                            <h1 className="text-4xl text-white mb-5">
                                Todo App
                            </h1>
                        </div>
                        <div className="todoinput flex justify-center items-center ">
                            <input
                                type="text"
                                className="w-96 h-[40px] px-5 outline-none rounded-l-md cursor-pointer "
                                onChange={(e) => setTitle(e.target.value)} // Update title state on input change
                                value={title} // Set input value to title state
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleSubmit(e)
                                }
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-yellow-500 text-white px-5 py-2 rounded-r-md"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {/* All items will be added here */}
                    <div className="items   ">
                        {todos.map((item) => (
                            <div
                                key={item._id}
                                className="item flex justify-between items-center w-[500px] md:w-[700px]  max-sm:w-[300px] h-auto py-1  bg-slate-300 my-2 px-5 rounded-md"
                            >
                                <p
                                    className="max-sm:text-sm"
                                    style={{
                                        textDecoration: item.completed
                                            ? "line-through"
                                            : "none",
                                    }}
                                >
                                    {item.title}
                                </p>
                                <div className="flex justify-between items-center bg-red">
                                    <button
                                        className={`cursor-pointer rounded-md mr-2 text-white px-3 py-1 ${
                                            item.completed
                                                ? "bg-red-500"
                                                : "bg-green-500"
                                        }  max-sm:p-1 max-sm:text-sm  `}
                                        onClick={() => handleDone(item._id)}
                                    >
                                        {item.completed ? "Undo" : "Done"}
                                    </button>

                                    <button
                                        className="bg-red-500 cursor-pointer rounded-md text-white px-3 py-1 max-sm:p-1 max-sm:text-sm  mr-2"
                                        onClick={() => handleUpdate(item)} // Call handleUpdate on button click
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-500 cursor-pointer rounded-md text-white px-3 py-1 max-sm:p-1 max-sm:text-sm "
                                        onClick={() => handleDelete(item._id)} // Call handleDelete on button click
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Update pop up */}
                    {update ? (
                        <div className="  absolute top-32 w-[700px] h-[300px] flex justify-center flex-col items-center bg-slate-700">
                            <input
                                type="text"
                                className="w-96 text-black h-[30px] outline-none px-2"
                                onChange={(e) => setUpdateTitle(e.target.value)} // Update updateTitle state on input change
                                value={updateTitile} // Set input value to updateTitle state
                                onKeyDown={(e) =>
                                    e.key === "Enter" && submitUpdate()
                                }
                            />
                            <button
                                className="bg-yellow-500 cursor-pointer rounded-md text-white px-3 py-1 max-sm:p-1 max-sm:text-sm mt-5  "
                                onClick={submitUpdate} // Call submitUpdate on button click
                            >
                                Update
                            </button>
                            <button
                                className="bg-red-500 cursor-pointer rounded-md text-white px-3 py-1 max-sm:p-1 max-sm:text-sm mt-5  "
                                onClick={handleCancel} // Call handleCancel on button click
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default Todo;
