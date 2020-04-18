import React from "react";
import { Link } from "react-router-dom";

const EpisodeItem = ({ episode }) => {
  return (
    <Link to={`/episode/${episode.id}`}>
      <div className="h-56 flex flex-col rounded text-center m-4 p-6 bg-gray-100 shadow cursor-pointer hover:bg-gray-200 transition duration-200">
        <div className="flex">
          <div className="flex items-center font-bold text-blue-500 capitalize">
            <span className="ml-2">{episode.episode}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center flex-1">
          <div className="flex flex-col justify-center font-bold">
            <span className="mt-6 text-lg">{episode.name}</span>
          </div>
        </div>

        <div className="flex">
          <div className="text-xs ml-auto mt-6 tracking-wide uppercase">
            {episode.air_date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeItem;
