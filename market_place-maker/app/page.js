"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import AdvancedNav from "@/components/AdvancedNav";
import NextNav from "@/components/NextNav";

export default function Home() {
  return (
    <div className="bg-black">
      <AdvancedNav />
      {/* <NextNav /> */}
    </div>
  );
}
