import React from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  loading: false,
  error: false,
  episodes: [],
  episode: null,
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
  const fetchEpisodes = async (page) => {
    dispatch({ type: "SET_LOADER", payload: true });
    dispatch({ type: "SET_EPISODES", episodes: [] });

    try {
      if (page) {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/episode?page=${page}`
        );
        dispatch({ type: "SET_EPISODES", episodes: data });

        dispatch({ type: "SET_PAGE", currentPage: page });
      } else {
        const { data } = await axios.get("/episode");
        dispatch({ type: "SET_EPISODES", episodes: data });
        dispatch({ type: "SET_PAGE", currentPage: state.currentPage });
      }
    } catch (error) {
      dispatch({ type: "ERROR", error: error.response.data.error });
    } finally {
      dispatch({ type: "SET_LOADER", payload: false });
    }
  };

  const fetchEpisode = async (episode) => {
    dispatch({ type: "SET_LOADER", payload: true });
    dispatch({ type: "SET_EPISODE", episode: null });

    try {
      const { data } = await axios.get(`/episode/${episode}`);
      dispatch({ type: "SET_EPISODE", episode: data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error.response.data.error });
    } finally {
      dispatch({ type: "SET_LOADER", payload: false });
    }
  };

  const fetchCharacters = async (characters) => {
    dispatch({ type: "SET_LOADER", payload: true });
    dispatch({ type: "SET_CHARACTERS", characters: [] });

    try {
      const { data } = await axios.get(`/character/${characters}`);
      dispatch({ type: "SET_CHARACTERS", characters: data });
      dispatch({ type: "SET_PAGE", currentPage: state.currentPage });
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
        episodes: state.episodes,
        episode: state.episode,
        characters: state.characters,
        character: state.character,
        favorites: state.favorites,
        currentPage: state.currentPage,
        modal: state.modal,
        searchTerm: state.searchTerm,
        fetchEpisodes,
        fetchEpisode,
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
