import React from "react";
import { GlobalContext } from "../context/GlobalState";

const CharacterItem = ({ character }) => {
  const { favorites, updateFavorites } = React.useContext(GlobalContext);

  return (
    <div className="h-56 flex flex-col rounded text-center m-4 p-6 bg-gray-100 shadow-md cursor-pointer hover:bg-gray-200 transition duration-200">
      <div className="flex">
        <div className="font-bold text-blue-500">
          <i
            className={`fa mr-2 ${
              character.gender.toLowerCase() === "male" ? "fa-mars" : "fa-venus"
            }`}
            aria-hidden="true"
          ></i>{" "}
          {character.species}
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
          onClick={(e) => {
            e.stopPropagation();
            updateFavorites(character);
          }}
        >
          <i
            className={`fa fa-2x ${
              favorites.find((c) => c.id === character.id)
                ? "fa-heart"
                : "fa-heart-o"
            }`}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
