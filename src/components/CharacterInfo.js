import React from "react";
import { GlobalContext } from "../context/GlobalState";
import Spinner from "./Spinner";

const CharacterInfo = ({
  character: {
    id,
    image,
    name,
    type,
    gender,
    species,
    status,
    origin,
    location,
  },
  character,
}) => {
  const { favorites, updateFavorites } = React.useContext(GlobalContext);

  const [imgLoading, setImgLoading] = React.useState(true);

  const addToFavorites = (e) => {
    e.stopPropagation();
    updateFavorites(character);
  };

  return (
    <div className="w-full capitalize">
      <div style={{ position: "relative", width: 300, height: 300 }}>
        {imgLoading && (
          <div className="absolute w-full h-full flex justify-center items-center">
            <Spinner />
          </div>
        )}

        <img
          src={image}
          alt={name}
          onLoad={() => setImgLoading(false)}
          className="mx-auto"
        />
      </div>

      <h3 className="mt-2 py-2 flex justify-between items-center text-xl font-bold text-blue-500">
        {name}
        <div
          className="text-sm text-red-500 transform hover:scale-110 transition duration-200"
          onClick={addToFavorites}
        >
          <i
            className={`fa fa-2x ${
              favorites.find((c) => c.id === id) ? "fa-heart" : "fa-heart-o"
            }`}
            aria-hidden="true"
          ></i>
        </div>
      </h3>

      {type && (
        <p>
          <span className="font-bold">Type: </span>
          {type}
        </p>
      )}
      {gender && (
        <p>
          <span className="font-bold">Gender: </span>
          {gender}
        </p>
      )}
      {species && (
        <p>
          <span className="font-bold">Species: </span>
          {species}
        </p>
      )}
      {status && (
        <p>
          <span className="font-bold">Status: </span>
          {status}
        </p>
      )}
      {origin.name && (
        <p>
          <span className="font-bold">Origin: </span>
          {origin.name}
        </p>
      )}
      {location.name && (
        <p>
          <span className="font-bold">Location: </span>
          {location.name}
        </p>
      )}
    </div>
  );
};

export default CharacterInfo;
