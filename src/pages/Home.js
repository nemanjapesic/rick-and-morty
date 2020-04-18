import React from "react";
import { GlobalContext } from "../context/GlobalState";
import Loader from "../components/Loader";
import EpisodesList from "../components/EpisodesList";
import Search from "../components/Search";

const Home = () => {
  const { loading, fetchEpisodes, episodes, currentPage } = React.useContext(
    GlobalContext
  );

  React.useEffect(() => {
    if (currentPage > 1) {
      fetchEpisodes(currentPage);
    } else {
      fetchEpisodes();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <h1 className="text-4xl font-bold text-center my-10 mx-4">
            Welcome to Rick and Morty
          </h1>
          <Search />
          <EpisodesList episodes={episodes} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
