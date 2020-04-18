import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Loader from "../components/Loader";
import CharactersList from "../components/CharactersList";
import Search from "../components/Search";

const Episode = () => {
  const {
    loading,
    fetchEpisode,
    fetchCharacters,
    episode,
    characters,
  } = React.useContext(GlobalContext);

  const params = useParams();

  React.useEffect(() => {
    fetchEpisode(params.id);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (episode !== null) {
      fetchCharacters(characterIds(episode.characters));
    }
    // eslint-disable-next-line
  }, [episode]);

  const characterIds = () => {
    let urlToRemove = "https://rickandmortyapi.com/api/character/";
    return episode.characters.map((c) => parseInt(c.replace(urlToRemove, "")));
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        episode && (
          <React.Fragment>
            <h1 className="text-4xl font-bold text-center my-10 mx-4">
              {episode.name}
            </h1>
            <Search />
            <CharactersList characters={characters} />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default Episode;
