import React from "react";
import { GlobalContext } from "../context/GlobalState";
import CharactersList from "../components/CharactersList";

const Favorites = () => {
  const { favorites } = React.useContext(GlobalContext);

  return <CharactersList characters={favorites} />;
};

export default Favorites;
