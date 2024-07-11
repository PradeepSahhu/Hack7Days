"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import AdvancedNav from "@/components/AdvancedNav";
import NextNav from "@/components/NextNav";
import Item from "@/components/Item";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="bg-black">
      <AdvancedNav />
      <Search />
      {/* <NextNav /> */}
      <div className="bg-transparent inset-0 z-0">
        <img src="./grid.jpg" className="w-full h-3/4 opacity-35 inset-0" />
      </div>
      <div className="absolute  w-10/12 inset-32 h-3/4">
        <div className="">
          <div className="text-white text-[3rem] font-extrabold mt-28">
            One Place for all Your NFT Needs
          </div>
          <div className="text-white font-extralight text-[2rem]">
            Come and Join Now
          </div>
          <div className="flex justify-between">
            <button className="bg-yellow-400 mt-2 px-5 pt-3 pb-2.5 rounded-xl hover:bg-yellow-800">
              Get Started
              <img src="./arrow.png" className="h-8 w-8 inline-block ml-3" />
            </button>
          </div>
          <div className="mt-24 gap-x-5 grid grid-cols-4">
            <div className="col-start-1 col-end-1">
              <Item itemSrc={"./city.jpg"} />
            </div>
            <div className="col-start-2 col-end-2">
              <Item itemSrc={"./city2.jpg"} />
            </div>
            <div className="col-start-3 col-end-3">
              <Item itemSrc={"./dragon.jpg"} />
            </div>
            <div className="col-start-4 col-end-4">
              <Item itemSrc={"./gang.jpg"} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-full"></div>
    </div>
  );
}
