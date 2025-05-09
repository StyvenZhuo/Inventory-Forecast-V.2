import {
  faBell,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Topbar = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 mx-3 border-stone-300">
      <div className="flex p-0.5 items-center justify-between">
        <div className="flex items-center gap-2 ml-auto p-1.5">
          <button
            type="submit"
            className="w-9 p-1 bg-stone-500 text-white rounded hover:bg-stone-600 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-1 border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <button className="text-2xl mr-5 cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="text-2xl mr-5 cursor-pointer">
            <FontAwesomeIcon icon={faUserCircle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
