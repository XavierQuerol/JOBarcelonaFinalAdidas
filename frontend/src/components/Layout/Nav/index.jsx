import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [searchField, setSearchField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchField);
  };

  const handleInputChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 border-b border-gray-300 mx-3 gap-6">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-b border-gray-500 outline-none"
          onChange={handleInputChange}
        />
        <button>
          <BiSearchAlt2 className="absolute right-2 top-0 bottom-0 m-auto" />
        </button>
      </form>
      <div className="flex items-center justify-evenly w-full">
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/leagues">Leagues</Link>
      </div>
    </div>
  );
};
