import Button from "./ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-sans text-3xl font-bold text-gray-700">
          My UX Tip
        </h1>
        <p className="font-sans text-gray-500 text-xs">
          Courtesy of{" "}
          <Link
            href="https://animations.dev/"
            className="text-sky-600 hover:text-sky-800"
          >
            Emil Kowalski
          </Link>
        </p>
      </div>
      <h2 className="text-center text-lg/relaxed font-medium text-gray-800 p-4 max-w-[500px]">
        For elements appearing on the screen, such as a popover, use an{" "}
        <span className="text-gray-800 bg-gray-200 px-1.5 mx-1 py-1 rounded-lg text-base">
          ease-out
        </span>
        easing curve instead of
        <span className="text-gray-800 bg-gray-200 px-1.5 ml-1 py-1 rounded-lg text-base">
          ease-in
        </span>
        .
      </h2>
      <div className="flex gap-20 items-center justify-center">
        <Button easing="ease-in" />
        <Button easing="ease-out" />
      </div>
    </div>
  );
}
