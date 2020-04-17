import React from "react";
import { GlobalContext } from "../context/GlobalState";
import CharacterItem from "./CharacterItem";
import { ChevronLeft, ChevronRight } from "../assets/icons/Icons";

const CharactersList = ({ characters }) => {
  const { currentPage, fetchCharacters, searchTerm } = React.useContext(
    GlobalContext
  );

  let info = null;

  if (characters.info) {
    info = characters.info;
    characters = characters.results.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

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
          {info && (
            <div className="text-center pt-4 clear-both">
              <button
                className={`mx-2 text-white font-bold px-4 py-2 rounded transition duration-200 focus:outline-none ${
                  currentPage > 1
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (currentPage > 1) fetchCharacters(1);
                }}
              >
                <div className="flex">
                  <ChevronLeft className="fill-current w-4 h-4" />
                  <ChevronLeft className="fill-current w-4 h-4" />
                </div>
              </button>

              <button
                className={`mx-2 text-white font-bold px-4 py-2 rounded transition duration-200 focus:outline-none ${
                  info.prev.length > 0
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (info.prev.length > 0) {
                    fetchCharacters(parseInt(info.prev.split("=")[1]));
                  }
                }}
              >
                <ChevronLeft className="fill-current w-4 h-4" />
              </button>

              <span className="mx-6">{currentPage}</span>

              <button
                className={`mx-2 text-white font-bold px-4 py-2 rounded transition duration-200 focus:outline-none ${
                  info.next.length > 0
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (info.next.length > 0) {
                    fetchCharacters(parseInt(info.next.split("=")[1]));
                  }
                }}
              >
                <ChevronRight className="fill-current w-4 h-4" />
              </button>
              <button
                className={`mx-2 text-white font-bold px-4 py-2 rounded transition duration-200 focus:outline-none ${
                  currentPage < info.pages
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (currentPage < info.pages) fetchCharacters(info.pages);
                }}
              >
                <div className="flex">
                  <ChevronRight className="fill-current w-4 h-4" />
                  <ChevronRight className="fill-current w-4 h-4" />
                </div>
              </button>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className="text-center mx-4">Sorry, there are no characters.</div>
      )}
    </div>
  );
};

export default CharactersList;
