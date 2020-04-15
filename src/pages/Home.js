import React from "react";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { characters, fetchCharacters } = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </React.Fragment>
  );
};

export default Home;
