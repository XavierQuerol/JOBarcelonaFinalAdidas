import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

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
        <p>Home</p>
        <p>Players</p>
        <p>Teams</p>
        <p>Leagues</p>
      </div>
    </div>
  );
};
