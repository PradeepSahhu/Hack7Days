"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function BoughtCard({
  itemName,
  itemSrc,
  itemDescription,
  itemPrice,
  setShowZoomCard,
  index,
  setZoomIndex,
}) {
  const handleclick = () => {
    setShowZoomCard(true);
    setZoomIndex(index);
  };

  return (
    <div
      className="relative inline-block w-52 group"
      onClick={() => handleclick()}
    >
      {/* //w-96 */}
      <div className="absolute bg-gradient-to-r from-pink-600 to-purple-600 blur-sm -inset-0.5 opacity-75 group-hover:opacity-100 transition duration-200 group-hover:blur-md"></div>
      <div className=" relative rounded-lg bg-black shadow-secondary-1">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat w-full"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          {/* h-80 */}
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={
              itemSrc
                ? itemSrc
                : "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            }
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div className="p-6 text-surface text-white flex flex-col items-center">
          <h5 className="mb-2 text-2xl font-medium leading-tight bg-gradient-to-r from-green-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            {itemName ? itemName : "Content Title"}
          </h5>
          <p className="mb-2 text-base text-center">
            {itemDescription
              ? itemDescription
              : "Some quick example text to build on the card title and make up the bulk of the cards content."}
          </p>
          <div className="mb-3">
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
            <p className="  rounded-xl">Item price : {itemPrice} Tokens</p>
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
