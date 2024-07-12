"use client";
import { useEffect, useState } from "react";
import AdvancedNav from "@/components/AdvancedNav";
import Search from "@/components/Search";
import Animation from "@/components/Animation";
import BlankCard from "@/components/BlankCard";
import HomePopup from "@/components/HomePopup";
import UploadLinkPopUp from "@/components/UploadLinkPopUp";
import CollectionsPopUp from "@/components/CollectionsPopUp";
import Card from "@/components/Card";
export default function Home({ params }) {
  const [connected, setConnected] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [mintAndBurnCondition, setmintAndBurnCondition] = useState(false);
  const [transferFriendCondition, setTransferFriendCondition] = useState(false);
  const [boughtCondition, setBoughtCondition] = useState(false);
  const [burnCondition, setBurnCondition] = useState(false);
  const [nftCollection, setNftCollection] = useState([]);
  const [redeemNFT, setRedeemNFT] = useState(false);
  const [boughtNFT, setBoughtNFT] = useState([]);
  const [accounts, setAccounts] = useState(null);
  const [bal, setBal] = useState();
  const [showHomePopUp, setShowHomePopUp] = useState(false);
  const [showUploadLink, setShowUploadLink] = useState(false);
  const [showCollectionPopUp, setShowCollectionsPopUp] = useState(true);

  useEffect(() => {
    console.log(params.Marketplace);
  });

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
        <div className=" relative  h-9/12 rounded-xl mx-10 mt-10">
          <div className="my-2">
            <p className="text-xl ">
              Marketplace ID:{" "}
              <span className="text-yellow-400 ml-2">{params.Marketplace}</span>
            </p>
          </div>
          <div className="my-2">
            <p className="text-xl">
              Owner ID:{" "}
              <span className="text-yellow-400 ml-2">{params.Marketplace}</span>
            </p>
          </div>
          <div className="my-2">
            <p className="text-xl">
              Date Created:{" "}
              <span className="text-yellow-400 ml-2">2024-10-10</span>
            </p>
          </div>
          <div className="my-2">
            <p className="text-xl">
              Genera: <span className="text-yellow-400 ml-2">Fantacy</span>
            </p>
          </div>

          <div className="my-2">
            <p className="text-xl">
              NFT Available: <span className="text-yellow-400 ml-2">12</span>
            </p>
          </div>
          <div className="my-2">
            <p className="text-xl">
              Token Amount: <span className="text-yellow-400 ml-2">100</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Animation
            url={
              "https://lottie.host/770383c2-dc9d-469f-bf71-db2bb3d87a9a/AvhUr5PL2U.json"
            }
            width={350}
            height={350}
          />
        </div>
        <div className="grid items-end">
          <div className="grid justify-start">
            <button className="px-10 rounded-xl bg-yellow-400 pt-3 pb-2.5">
              Click here
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="grid grid-cols-3">
          <div className="grid col-start-1 col-end-4"></div>
        </div>
        <div className="w-full grid items-center my-10">
          <div className="grid grid-cols-4 gap-5">
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl">
                Mint DGN Tokens
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl">
                Transfer DGN Tokens
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl">
                Burn DGN Tokens
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl">
                View Bought NFTs
              </button>
            </div>
          </div>
        </div>
        {mintAndBurnCondition && (
          <MintAndBurnInput setAmount={setAmount} mintTokens={mintTokens} />
        )}
        {transferFriendCondition && (
          <TransferFriend
            setTransAmount={setTransAmount}
            setTransferAddress={setTransferAddress}
            transFriend={transFriend}
          />
        )}
        {burnCondition && (
          <BurnToken setBurnAmount={setBurnAmount} burnMyToken={burnMyToken} />
        )}
        {boughtCondition && <BoughtItems />}

        <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />

        {!redeemNFT && (
          <div className="">
            <div className="flex justify-center p-5">
              <button className="bg-gradient-to-r from-red-600 via-blue-600 to-indigo-600 px-8 pb-3 pt-4 text-xs font-medium uppercase leading-normal rounded-2xl">
                Show NFT Market Place
              </button>
            </div>
            <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          </div>
        )}

        {redeemNFT && (
          <div className="mt-10 col-start-1 col-end-4 bg-opacity-90 p-10 justify-center space-x-8 space-y-5">
            <div className="text-2xl bolder flex justify-center mb-10 ">
              <p className="bg-gradient-to-r from-red-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent px-10 text-5xl">
                NFT STORE
              </p>
            </div>
            {showMarket &&
              nftCollection.map((eachItem, index) => (
                <Item
                  key={index}
                  itemName={eachItem.name}
                  itemDescription={eachItem.description}
                  itemSrc={getImage(eachItem.image)}
                  itemPrice={eachItem.price}
                  mintNFTFunction={mintNFTs}
                  URI={urls[index]}
                />
              ))}
            ;
          </div>
        )}

        <div className="mt-10 col-start-1 col-end-4 bg-opacity-90 p-10 justify-center space-x-8 space-y-5">
          <div className="text-2xl bolder flex justify-center mb-10 ">
            <p className="bg-gradient-to-r from-red-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent px-10 text-5xl">
              NFTs To Buy
            </p>
          </div>

          <Card />
          <BlankCard setShowHomePopUp={setShowHomePopUp} />
          {showHomePopUp && (
            <HomePopup
              setShowHomePopUp={setShowHomePopUp}
              setShowUploadLink={setShowUploadLink}
              setShowCollectionsPopUp={setShowCollectionsPopUp}
            />
          )}
          {showUploadLink && (
            <UploadLinkPopUp
              setShowHomePopUp={setShowHomePopUp}
              setShowUploadLink={setShowUploadLink}
            />
          )}
          {showCollectionPopUp && (
            <CollectionsPopUp
              setShowHomePopUp={setShowHomePopUp}
              setShowCollectionsPopUp={setShowCollectionsPopUp}
            />
          )}
        </div>
      </div>
    </div>
  );
}
