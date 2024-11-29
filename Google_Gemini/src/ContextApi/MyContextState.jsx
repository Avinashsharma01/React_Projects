import PropTypes from "prop-types";
import { Store } from "./Store";
import { useState } from "react";

export const MyContextState = ({ children }) => {
    const avinash = {
        name: "Avinash",
        lastName: "Sharma",
        age: 23,
        style: "text-white text-4xl",
        color: "text-red-500",
    };
    const [Loading, setLoading] = useState(false);

    return (
        <Store.Provider value={{ avinash, Loading, setLoading }}>
            {children}
        </Store.Provider>
    );
};

MyContextState.propTypes = {
    children: PropTypes.node.isRequired,
};
