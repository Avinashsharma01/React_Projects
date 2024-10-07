
import { useEffect, useState } from "react";

function Todo() {
    let initialTodo = [
        {
            id: 1,
            title: "This is the to do item",
            completed: false,
            deletable: false,
        },
        ///...............
    ];

    const [todo, setTodo] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : initialTodo;
    });

    // this will get the value of input
    const [todoinput, setTodoinput] = useState(""); // Initialize with an empty string

    const addTodo = () => {
        // if (todoinput) {
        //     const newTodo = {
        //         id: todo.length + 1,
        //         title: todoinput,
        //         completed: false,
        //     };
        //     setTodo([...todo, newTodo]); // Update the todo state
        //     setTodoinput(""); // Reset the todoinput state
        // }

        if (todoinput) {
            const newTodo = {
                id: todo.length + 1,
                title: todoinput,
                completed: false,
            };
            setTodo([...todo, newTodo]);
            setTodoinput("");
        }
    };

    const handleDone = (id) => {
        setTodo(
            todo.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo]); // This effect will run whenever `todo` changes

    // Step 1: Implement the deleteTodo function
    // const deleteTodo = (id) => {
    //     const updatedTodos = todo.filter((item) => item.id !== id);

    //     setTodo(updatedTodos); // Update the state with the filtered list
    // };

    const deleteTodo = (id) => {
        const updatedTodos = todo.filter(
            (item) => item.id !== id || item.deletable === false
        );
        setTodo(updatedTodos); // Update the state with the filtered list
    };

    return (
        <div
            className="main_container w-full h-screen flex justify-center items-center"
            style={{
                height: "calc(100vh - 120px)",
                // backgroundColor: "#e0f7fa",
            }}
        >
            <div className="container w-5/6 h-5/6 bg-slate-600 rounded-md flex justify-center items-center p-10  flex-col">
                <div className="todoAp h-screen  overflow-y-scroll  flex flex-col items-center  ">
                    <div
                        style={{
                            backgroundColor: "#023050",
                        }}
                        className="header sticky top-0 w-[500px] md:w-[700px] max-sm:w-[300px] text-center p-5"
                    >
                        <div className="head">
                            <h1 className="text-4xl text-white mb-5">
                                Todo App
                            </h1>
                        </div>
                        <div className="todoinput flex justify-center items-center ">
                            <input
                                type="text"
                                className="w-96 h-[40px] px-5 outline-none rounded-l-md cursor-pointer "
                                value={todoinput}
                                onChange={(e) => setTodoinput(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && addTodo()
                                }
                            />
                            <button
                                onClick={addTodo}
                                className=" text-white px-5 py-2 rounded-r-md"
                                style={{ backgroundColor: "#005f73" }}
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {/* All item will be added here */}

                    <div className="items  ">
                        {todo.map((item) => (
                            <div
                                key={item.id}
                                className="item flex justify-between items-center w-[500px] md:w-[700px]  max-sm:w-[300px] h-10 bg-slate-300 my-2 px-5 rounded-md"
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
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => handleDone(item.id)}
                                        className={`cursor-pointer rounded-md mr-2 text-white px-3 py-1 ${
                                            item.completed
                                                ? "bg-red-500"
                                                : "bg-green-500"
                                        }  max-sm:p-1 max-sm:text-sm  `}
                                    >
                                        {item.completed ? "Undo" : "Done"}
                                    </button>

                                    <button // Step 2: Call deleteTodo onClick
                                        onClick={() => deleteTodo(item.id)}
                                        className="bg-red-500 cursor-pointer rounded-md text-white px-3 py-1 max-sm:p-1 max-sm:text-sm "  
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
