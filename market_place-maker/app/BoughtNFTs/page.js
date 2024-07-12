"use client";
import { useEffect, useState } from "react";
import AdvancedNav from "@/components/AdvancedNav";
import Search from "@/components/Search";

export default function BoughtNFT() {
  return (
    <div className="bg-black font-myFont">
      <div className="bg-transparent inset-0 z-0">
        <img src="./grid.jpg" className="w-full h-3/4 opacity-25 inset-0" />
      </div>
      <div className="absolute inset-0">
        <AdvancedNav />
        <Search />
      </div>
      <div className="absolute inset-20 mt-20 rounded-xl bg-gray-800">
        <div className=" relative  h-9/12 rounded-xl mx-10 mt-10 flex justify-between"></div>
      </div>
    </div>
  );
}
