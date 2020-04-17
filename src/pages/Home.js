import React from "react";
import { GlobalContext } from "../context/GlobalState";
import Loader from "../components/Loader";
import CharactersList from "../components/CharactersList";
import Search from "../components/Search";

const Home = () => {
  const {
    loading,
    fetchCharacters,
    characters,
    currentPage,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (currentPage > 1) {
      fetchCharacters(currentPage);
    } else {
      fetchCharacters();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <h1 className="text-4xl font-bold text-center my-10 mx-4">
            Welcome to Rick and Morty
          </h1>
          <Search />
          <CharactersList characters={characters} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
