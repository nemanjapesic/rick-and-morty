import React from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  loading: false,
  error: false,
  characters: [],
  character: {},
  favorites: [],
  currentPage: 1,
  modal: {
    open: false,
    content: null,
    props: null,
  },
  searchTerm: "",
};

// Create Context
export const GlobalContext = React.createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  /* ACTIONS */
  const fetchCharacters = async (page) => {
    dispatch({ type: "SET_LOADER", payload: true });

    try {
      if (page) {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        dispatch({ type: "SET_CHARACTERS", characters: data });

        dispatch({ type: "SET_PAGE", currentPage: page });
      } else {
        const { data } = await axios.get("/character");
        dispatch({ type: "SET_CHARACTERS", characters: data });
        dispatch({ type: "SET_PAGE", currentPage: state.currentPage });
      }
    } catch (error) {
      dispatch({ type: "ERROR", error: error.response.data.error });
    } finally {
      dispatch({ type: "SET_LOADER", payload: false });
    }
  };

  const updateFavorites = (character) => {
    if (state.favorites.find((c) => c.id === character.id)) {
      dispatch({ type: "REMOVE_FAVORITE", character });
    } else {
      dispatch({ type: "ADD_FAVORITE", character });
    }
  };

  const setModal = (open, content = null, props = null) => {
    dispatch({ type: "SET_MODAL", modal: { open, content, props } });
  };

  const setSearch = (searchTerm) => {
    dispatch({ type: "SET_SEARCH", searchTerm });
  };

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        characters: state.characters,
        character: state.character,
        favorites: state.favorites,
        currentPage: state.currentPage,
        modal: state.modal,
        searchTerm: state.searchTerm,
        fetchCharacters,
        updateFavorites,
        setModal,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
