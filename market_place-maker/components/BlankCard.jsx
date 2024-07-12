"use client";

import { useEffect } from "react";

export default function BlankCard({ handlePopUp }) {
  useEffect(() => {
    console.log(handlePopUp);
  });
  return (
    <div className="inline-block w-60" onClick={handlePopUp}>
      <h5 className="mb-2 text-2xl flex justify-center font-medium leading-tight bg-gradient-to-r from-green-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
        Add an NFT
      </h5>
      <div className="rounded-lg bg-yellow-200 shadow-secondary-1 flex justify-center">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat  h-70"
          data-twe-ripple-init
          data-twe-ripple-color="dark"
        >
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src="./plus.png"
            onClick={handlePopUp}
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
