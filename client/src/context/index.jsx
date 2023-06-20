import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [contextValue, setContextValue] = useState("");

    const updateContextValue = (newValue) => {
        setContextValue(newValue);
    };

    return (
        <SearchContext.Provider value={{ contextValue, updateContextValue }}>
            {children}
        </SearchContext.Provider>
    );
};

SearchContextProvider.propTypes = {
    children: PropTypes.node
};