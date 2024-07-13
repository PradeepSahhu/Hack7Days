"use client";
import { useEffect, useState } from "react";
import AdvancedNav from "@/components/AdvancedNav";
import Search from "@/components/Search";
import Card from "@/components/Cards/Card";
import BoughtCard from "@/components/Cards/BoughtCard";
import ZoomCard from "@/components/PopUps/ZoomCard";
import MarketPlaceConnection from "@/Operations/MarketPlaceConnection";
import IpfsToArray from "@/Connections/Functionality/realPFS";

export default function BoughtNFT({ params }) {
  const [showZoomCard, setShowZoomCard] = useState(false);
  const [mintedNFT, setMintedNft] = useState();

  const alreadyBought = async () => {
    try {
      const contract = await MarketPlaceConnection(params.Marketplace);
      const res = await contract.getMintedNFT();
      // const res =
      //   "https://ipfs.io/ipfs/QmY3ZPzoxw83GUFMU1VB669VWTCzDWv565TdNCqhGSpPg9";
      const result = await IpfsToArray(res);

      setMintedNft(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = (ipfsURL) => {
    const hash = ipfsURL.split("ipfs://")[1];
    return `https://ipfs.io/ipfs/${hash}`;
  };

  useEffect(() => {
    console.log(params.Marketplace);
  }, []);

  if (mintedNFT == undefined) {
    alreadyBought();
  }

  return (
    <div className="bg-black font-myFont">
      <div className="bg-transparent inset-0 z-0">
        <img src="./grid.jpg" className="w-full h-3/4 opacity-25 inset-0" />
      </div>
      <div className="absolute inset-0">
        <AdvancedNav />
        <Search />
      </div>
      {/* <div className="absolute inset-20 mt-20 rounded-xl bg-gray-800">
        <div className=" relative  h-9/12 rounded-xl mx-10 mt-10 flex gap-x-5"> */}
      <div className="absolute inset-0 mt-24 col-start-1 col-end-4 bg-opacity-90 p-10 justify-center space-x-8 space-y-5">
        <div className="text-2xl bolder flex justify-center mb-5 ">
          <p className="bg-yellow-400 to-indigo-600 bg-clip-text text-transparent px-10 text-5xl font-bold">
            Your NFTs
          </p>
        </div>

        <BoughtCard setShowZoomCard={setShowZoomCard} />
        <BoughtCard setShowZoomCard={setShowZoomCard} />
        <BoughtCard setShowZoomCard={setShowZoomCard} />
        {/* <BoughtCard setShowZoomCard={setShowZoomCard} />
        <BoughtCard setShowZoomCard={setShowZoomCard} />
        <BoughtCard setShowZoomCard={setShowZoomCard} />
        <BoughtCard setShowZoomCard={setShowZoomCard} />
        <BoughtCard setShowZoomCard={setShowZoomCard} /> */}
        {mintedNFT != undefined
          ? mintedNFT.map((eachNFT, index) => (
              <BoughtCard
                key={index}
                setShowZoomCard={setShowZoomCard}
                itemName={eachNFT.name}
                itemDescription={eachNFT.description}
                itemSrc={getImage(eachNFT.image)}
                itemPrice={eachNFT.price}
              />
            ))
          : ""}
      </div>
      {showZoomCard && <ZoomCard setShowZoomCard={setShowZoomCard} />}
    </div>
  );
}
