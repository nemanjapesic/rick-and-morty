import React from "react";
import { GlobalContext } from "../context/GlobalState";
import CharacterItem from "./CharacterItem";

const CharactersList = ({ characters }) => {
  const { searchTerm } = React.useContext(GlobalContext);

  characters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-hidden">
      {characters && characters.length ? (
        <React.Fragment>
          {characters.map((character) => (
            <div
              key={character.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 inline-block float-left"
            >
              <CharacterItem character={character} />
            </div>
          ))}
        </React.Fragment>
      ) : (
        <div className="text-center mx-4">Sorry, there are no characters.</div>
      )}
    </div>
  );
};

export default CharactersList;
