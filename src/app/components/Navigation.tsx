"use client";

import { useState, useEffect } from "react";
import DartModeSwitch from "./DarkModeSwitch";

export default function Navigation() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // needs to be debbounced

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 flex justify-between items-center 
    fixed w-full z-10 transition duration-300 ease-in-out 
    ${isAtTop ? "" : "backdrop-blur-md shadow-xl"}`}
    >
      <div className="text-white">
        <h1 className="text-xl font-bold">Luis Hernández</h1>
      </div>
      <div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a className=" text-slate-400 hover:text-sky-400">About me</a>
          </li>
          <li>
            <a className=" text-slate-400 hover:text-sky-400">Projects</a>
          </li>
          <li>
            <a className=" text-slate-400 hover:text-sky-400">Contact</a>
          </li>
          <li>
            <DartModeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
}
