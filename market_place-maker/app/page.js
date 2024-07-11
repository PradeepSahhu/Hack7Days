"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import AdvancedNav from "@/components/AdvancedNav";
import NextNav from "@/components/NextNav";
import Item from "@/components/Item";
import Search from "@/components/Search";
import Registered from "@/components/Registered";

export default function Home() {
  return (
    <div className="bg-black font-myFont">
      <AdvancedNav />
      <Search />
      {/* <NextNav /> */}
      <div className="bg-transparent inset-0 z-0">
        <img src="./grid.jpg" className="w-full h-3/4 opacity-35 inset-0" />
      </div>
      <div className="absolute  w-10/12 inset-32 h-11/12">
        <div className="">
          <div className="text-white text-[4rem] font-extrabold mt-28">
            One Place for all Your NFT Needs
          </div>
          <div className="text-white font-extralight text-[2rem]">
            Come and Make Your Own MarketPlace
          </div>
          <div className="flex justify-between">
            <button className="bg-yellow-400 mt-2 px-5 pt-3 pb-2.5 rounded-xl hover:bg-yellow-800">
              Get Started
              <img src="./arrow.png" className="h-8 w-8 inline-block ml-3" />
            </button>
          </div>
          <div className="text-[3rem] mt-16 flex justify-center font-bold text-yellow-400">
            <p>Our NFT Collections</p>
          </div>
          <div className="mt-16 gap-x-5 grid grid-cols-4">
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
      <div className="flex justify-center">
        <button className="bg-yellow-400 mt-2 px-5 pt-3 pb-2.5 rounded-xl hover:bg-yellow-800">
          View More (coming Soon)
          <img src="./arrow.png" className="h-8 w-8 inline-block ml-3" />
        </button>
      </div>

      <div className="mb-60 relative h-full">
        <div className="mx-32 ">
          <div className="flex justify-between">
            <p className="text-white text-2xl underline decoration-yellow-400 underline-offset-8 flex  justify-start">
              Trending
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-400  px-2 pt-1 pb-1 rounded-xl hover:bg-yellow-800 justify-end flex">
                12hr
              </button>
              <button className="bg-gray-400  px-2 pt-1 pb-1 rounded-xl hover:bg-yellow-800 justify-end flex">
                12hr
              </button>
            </div>
          </div>

          <div className="flex "></div>

          <div className="my-4 grid-cols-3 items-center">
            <div className="flex">
              <p className=" mr-3 inline-block mx-8">Registered MarketPlace</p>

              <p className="text-yellow-400 font-bold text-xl mx-8 inline-block">
                Addresses
              </p>

              <p className="text-gray-600 font-extralight text-sm mx-8 inline-block">
                Date Registered
              </p>
            </div>
            {/* <hr className="col-start-1 col-end-4 w-full h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" /> */}
          </div>

          <div className="flex justify-between ">
            <div className="flex justify-between gap-x-5 grid-cols-3 border-gray-600 border-2 px-3 py-4">
              <div>
                <Registered />
                <Registered />
                <Registered />
              </div>
            </div>
            {/* <div className="flex justify-between gap-x-5 grid-cols-3">
              <div>
                <Registered />
                <Registered />
                <Registered />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="text-white text-xl font-bold flex justify-center relative">
        <p>Copy right 2024 Pradeep Sahu</p>
      </div>
    </div>
  );
}
