import React from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  loading: false,
  error: false,
  characters: [],
};

// Create Context
export const GlobalContext = React.createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  /* ACTIONS */
  const fetchCharacters = async () => {
    dispatch("SET_LOADER", true);

    try {
      const { data } = await axios.get("/character");

      dispatch({ type: "SET_CHARACTERS", characters: data.results });
    } catch (error) {
      dispatch({ type: "ERROR", error: error.response.data.error });
    } finally {
      dispatch("SET_LOADER", false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        characters: state.characters,
        fetchCharacters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
