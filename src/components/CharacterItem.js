import React from "react";
import { GlobalContext } from "../context/GlobalState";
import CharacterInfo from "./CharacterInfo";
import { Mars, Venus, Heart, HeartOutline } from "../assets/icons/Icons";

const CharacterItem = ({ character }) => {
  const { favorites, updateFavorites, setModal } = React.useContext(
    GlobalContext
  );

  const seeDetails = () => {
    setModal(true, CharacterInfo, {
      character,
    });
  };

  const addToFavorites = (e) => {
    e.stopPropagation();
    updateFavorites(character);
  };

  return (
    <div
      className="h-56 flex flex-col rounded text-center m-4 p-6 bg-gray-100 shadow cursor-pointer hover:bg-gray-200 transition duration-200"
      onClick={seeDetails}
    >
      <div className="flex">
        <div className="flex items-center font-bold text-blue-500 capitalize">
          {character.gender.toLowerCase() === "male" ? (
            <Mars className="fill-current w-4 h-4" />
          ) : (
            <Venus className="fill-current w-4 h-4" />
          )}
          <span className="ml-2">{character.species}</span>
        </div>
      </div>

      <div className="flex flex-col justify-center flex-1">
        <div className="flex flex-col justify-center font-bold">
          <span className="mt-6 text-lg">{character.name}</span>
        </div>
      </div>

      <div className="flex">
        <div
          className="text-sm ml-auto mt-6 text-red-500 transform hover:scale-110 transition duration-200"
          onClick={addToFavorites}
        >
          {favorites.find((c) => c.id === character.id) ? (
            <Heart className="fill-current w-6 h-6" />
          ) : (
            <HeartOutline className="fill-current w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
