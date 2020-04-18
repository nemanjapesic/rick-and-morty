import React from "react";
import { GlobalContext } from "../context/GlobalState";

const Search = () => {
  const { searchTerm, setSearch } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setSearch("");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-w-xl mx-4 sm:mx-auto">
      <input
        type="search"
        className="appearance-none w-full bg-gray-100 text-gray-700 shadow rounded py-2 px-4 mb-3 focus:outline-none focus:bg-gray-200"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
