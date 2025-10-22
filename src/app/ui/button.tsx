"use client";

import { useState } from "react";
import clsx from "clsx";
import { ColourIcon, TextIcon, CropIcon } from "./icons";

interface ButtonProps {
  easing: "ease-in" | "ease-out";
}

export default function Button({ easing }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-50 px-4 py-2 rounded-lg shadow-sm ring  ring-black/15 hover:bg-gray-100 dark:hover:bg-gray-700 transition font-sans font-medium "
      >
        Options
      </button>
      <div
        className={clsx(
          "absolute top-[120%] w-[150px] text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 left-[50%] -translate-x-[50%] flex flex-col p-1.5 rounded-lg shadow-lg ring ring-black/10 dark:ring-white/10 transition-all origin-top duration-200",
          {
            "opacity-0 pointer-events-none scale-95": !isOpen,
            "opacity-100 scale-100": isOpen,
          },
          {
            "ease-in": easing === "ease-in",
            "ease-out": easing === "ease-out",
          }
        )}
      >
        <div className="flex items-center gap-2 justify-between p-2 rounded-md text-regular hover:text-sky-800 dark:hover:text-sky-400 font-medium font-sans text-slate-700 dark:text-slate-300 w-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          Colour
          <ColourIcon />
        </div>
        <div className="flex items-center gap-2 justify-between p-2 rounded-md text-regular hover:text-sky-800 dark:hover:text-sky-400 font-medium font-sans text-slate-700 dark:text-slate-300 w-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          Crop
          <CropIcon />
        </div>
        <div className="flex items-center gap-2 justify-between p-2 rounded-md text-regular hover:text-sky-800 dark:hover:text-sky-400 font-medium font-sans text-slate-700 dark:text-slate-300 w-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          Text
          <TextIcon />
        </div>
      </div>
    </div>
  );
}
