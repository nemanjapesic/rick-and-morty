import React from "react";
import { GlobalContext } from "../context/GlobalState";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, characters, fetchCharacters } = React.useContext(
    GlobalContext
  );

  React.useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        characters.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))
      )}
    </React.Fragment>
  );
};

export default Home;
