"use client";

import Button from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { CircleCheckIcon, CircleXIcon } from "./ui/icons";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [showQrCode, setShowQrCode] = useState(false);

  const handleOpenQR = () => {
    setShowQrCode(true);
  };

  const handleCloseQR = () => {
    setShowQrCode(false);
  };

  return (
    <div className="relative h-screen w-full flex flex-col gap-10 items-center justify-center pb-20">
      <div className="flex flex-col gap-4">
        <h1 className="font-sans text-3xl font-bold text-gray-700 dark:text-gray-200">
          My UX Tip
        </h1>
        <p className="font-sans text-gray-500 dark:text-gray-400 text-xs">
          Courtesy of{" "}
          <Link
            href="https://animations.dev/"
            className="text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-200 "
          >
            Emil Kowalski
          </Link>
        </p>
      </div>
      <h2 className="text-center text-lg/relaxed font-medium text-gray-800 dark:text-gray-200 p-4 max-w-[500px]">
        For elements appearing on the screen, such as a popover, use an
        <span className="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-1 py-0.5 mx-1.5 rounded-lg text-sm font-mono">
          ease-out
        </span>
        easing curve instead of
        <span className="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-1 py-0.5 ml-1.5 rounded-lg text-sm font-mono">
          ease-in
        </span>
        .
      </h2>
      <div className="flex gap-20 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <CircleXIcon />
          <Button easing="ease-in" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <CircleCheckIcon />
          <Button easing="ease-out" />
        </div>
      </div>
      <button
        onClick={handleOpenQR}
        className="absolute bottom-10 text-sm text-gray-500 dark:text-gray-400"
      >
        Show QR Code
      </button>
      <div
        onClick={handleCloseQR}
        className={clsx(
          " fixed inset-0 bg-black/90 flex items-center justify-center p-4 transition-opacity duration-200 ease",
          { "opacity-100 pointer-events-auto": showQrCode },
          { "opacity-0 pointer pointer-events-none": !showQrCode }
        )}
      >
        <Image src="/qr-code.png" alt="QR Code" width={300} height={300} />
      </div>
    </div>
  );
}
