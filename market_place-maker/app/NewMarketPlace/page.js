"use client";

import AdvancedNav from "@/components/AdvancedNav";
import Search from "@/components/Search";
import Link from "next/link";
import Item from "@/components/Item";
import Organization from "@/components/Organization";

export default function Home() {
  return (
    <div className="bg-black font-myFont">
      <AdvancedNav />
      <Search />
      <div className="bg-transparent inset-0 z-0">
        <img src="./grid.jpg" className="w-full h-3/4 opacity-35 inset-0" />
      </div>
      <div className="absolute  w-10/12 inset-32 h-11/12">
        <div className="">
          <div className="text-white text-[4rem] font-extrabold mt-28">
            Make Your NFT MarketPlace{" "}
            <span className="text-yellow-400">HERE</span>
          </div>
          <div className="text-white font-extralight text-[2rem]">
            Scroll Down to make it
          </div>
          {/* <div className="flex justify-between">
            <Link
              className="bg-yellow-400 mt-2 px-5 pt-3 pb-2.5 rounded-xl hover:bg-yellow-800"
              href="./NewMarketPlace"
            >
              Get Started
              <img src="./arrow.png" className="h-8 w-8 inline-block ml-3" />
            </Link>
          </div> */}

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
          <div className="relative"></div>
        </div>
      </div>
      <div>
        <Organization />
      </div>
    </div>
  );
}
