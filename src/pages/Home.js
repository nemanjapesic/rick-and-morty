import React from "react";
import { GlobalContext } from "../context/GlobalState";
import Loader from "../components/Loader";
import CharactersList from "../components/CharactersList";

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
      {loading ? <Loader /> : <CharactersList characters={characters} />}
    </React.Fragment>
  );
};

export default Home;
