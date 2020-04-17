import React from "react";
import { GlobalContext } from "../context/GlobalState";
import CharactersList from "../components/CharactersList";

const Favorites = () => {
  const { favorites } = React.useContext(GlobalContext);

  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold text-center my-10 mx-4">
        Favorite Characters
      </h1>
      <CharactersList characters={favorites} />
    </React.Fragment>
  );
};

export default Favorites;
