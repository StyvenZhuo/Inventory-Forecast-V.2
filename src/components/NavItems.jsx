import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Title = ({ title }) => {
  return (
    <div>
      <span className="title">{title}</span>
    </div>
  );
};
export const NavItems = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 text-stone-950 hover:text-gray-900 cursor-pointer py-2 px-4 rounded-lg hover:bg-stone-100">
      <FontAwesomeIcon icon={icon} />
      <span className="text-sm">{title}</span>
    </div>
  );
};
