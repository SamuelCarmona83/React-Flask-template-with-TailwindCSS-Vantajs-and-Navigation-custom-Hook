import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";

export const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`w-full h-12 flex transparent fixed
        ${scrollPosition > 200 ? "bg-white/20 backdrop-blur-sm" : "transparent"}
        `}
      style={{ transition: "all 1s ease-out" }}
    >
      <div className="flex justify-start h-full w-full">
        <p className="my-auto mx-8 text-white font-black">
          My New Project {scrollPosition}
        </p>
      </div>
      <div className="flex justify-end justify-items-end h-full w-full">
        <button className="bg-teal-600 rounded-md align-middle mx-8 my-2 px-4 text-white font-bold">
          Login
        </button>
      </div>
    </nav>
  );
};
