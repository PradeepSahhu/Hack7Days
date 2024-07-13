"use client";
import { useEffect, useState } from "react";
import AdvancedNav from "@/components/AdvancedNav";
import Search from "@/components/Search";
import Animation from "@/components/Animation";
import BlankCard from "@/components/Cards/BlankCard";
import HomePopup from "@/components/PopUps/HomePopup";
import UploadLinkPopUp from "@/components/PopUps/UploadLinkPopUp";
import CollectionsPopUp from "@/components/PopUps/CollectionsPopUp";
import Card from "@/components/Cards/Card";
import BuyTokensPopUp from "@/components/PopUps/BuyTokensPopUp";
import TransferTokenPopUp from "@/components/PopUps/TransferTokensPopUp";
import Link from "next/link";
import MarketPlaceConnection from "@/Operations/MarketPlaceConnection";
import AssetConnection from "@/Operations/AssetConnection";

export default function Home({ params }) {
  const [connected, setConnected] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [boughtCondition, setBoughtCondition] = useState(false);
  const [burnCondition, setBurnCondition] = useState(false);
  const [nftCollection, setNftCollection] = useState([]);
  const [redeemNFT, setRedeemNFT] = useState(false);

  const [showHomePopUp, setShowHomePopUp] = useState(false);
  const [showUploadLink, setShowUploadLink] = useState(false);
  const [showCollectionPopUp, setShowCollectionsPopUp] = useState(false);
  const [showBuyToken, setShowBuyToken] = useState(false);
  const [showTransferToken, setShowTransferToken] = useState(false);

  //-----------------------------------

  const [amountValue, setAmountValue] = useState();
  const [tokenAmount, setTokenAmount] = useState();
  const [weiFortoken, setWeiForToken] = useState();
  const [uploadString, setUploadString] = useState();

  const BuyTokens = async () => {
    const contract = await MarketPlaceConnection(params.Marketplace);
    contract.buyTokens(parseInt(amountValue), { value: parseInt(weiFortoken) });
    // console.log(parseInt(amountValue));
  };

  const uploadLink = async () => {
    const contract = await AssetConnection();
    // await contract.addMintNFT(uploadString);
    console.log(uploadString);
  };

  const showTokensAmount = async () => {
    const contract = await MarketPlaceConnection(params.Marketplace);
    const response = await contract.checkingBalance();
    setTokenAmount(parseInt(response));
  };

  useEffect(() => {
    console.log(params.Marketplace);
    showTokensAmount();
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
        <div className=" relative  h-9/12 rounded-xl mx-10 mt-10 flex justify-between">
          <div className="">
            <div className="my-2">
              <p className="text-xl ">
                Marketplace ID:{" "}
                <span className="text-yellow-400 ml-2">
                  {params.Marketplace}
                </span>
              </p>
            </div>
            <div className="my-2">
              <p className="text-xl">
                Owner ID:{" "}
                <span className="text-yellow-400 ml-2">
                  {params.Marketplace}
                </span>
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
                Token Amount:{" "}
                <span className="text-yellow-400 ml-2">
                  {" "}
                  {tokenAmount ? tokenAmount : "100xx"}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Animation
              url={
                "https://lottie.host/770383c2-dc9d-469f-bf71-db2bb3d87a9a/AvhUr5PL2U.json"
              }
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="grid items-end my-5">
          <div className="grid justify-center ">
            <button className="px-10 rounded-xl bg-yellow-400 pt-3 pb-2.5 shadow-orange-500 shadow-md">
              Withdraw Amount
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
              <button
                className="bg-gradient-to-r from-yellow-400 to-black px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
                onClick={() => setShowBuyToken(true)}
              >
                Buy DGN Tokens
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-yellow-400  to-black px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
                onClick={() => setShowTransferToken(true)}
              >
                Transfer DGN Tokens
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-black px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl">
                Burn DGN Tokens
              </button>
            </div>
            <div className="flex justify-center">
              <Link
                className="bg-gradient-to-r from-yellow-400 to-black px-8 pb-2.5 pt-3 text-xs font-medium uppercase leading-normal rounded-2xl"
                href="./BoughtNFTs"
              >
                View Bought NFTs
              </Link>
            </div>
          </div>
        </div>

        {burnCondition && (
          <BurnToken setBurnAmount={setBurnAmount} burnMyToken={burnMyToken} />
        )}
        {boughtCondition && <BoughtItems />}

        <hr className="col-start-1 col-end-4 w-full h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />

        {/* {!redeemNFT && (
          <div className="">
            <div className="flex justify-center p-5">
              <button className="bg-gradient-to-r from-red-600 via-blue-600 to-indigo-600 px-8 pb-3 pt-4 text-xs font-medium uppercase leading-normal rounded-2xl">
                Show NFT Market Place
              </button>
            </div>
            <hr className="col-start-1 col-end-4 w-full h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
          </div>
        )} */}

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
              setUploadString={setUploadString}
              uploadLink={uploadLink}
            />
          )}
          {showCollectionPopUp && (
            <CollectionsPopUp
              setShowHomePopUp={setShowHomePopUp}
              setShowCollectionsPopUp={setShowCollectionsPopUp}
            />
          )}
          {showBuyToken && (
            <BuyTokensPopUp
              setShowBuyToken={setShowBuyToken}
              setAmountValue={setAmountValue}
              BuyTokens={BuyTokens}
              setWeiForToken={setWeiForToken}
            />
          )}
          {showTransferToken && (
            <TransferTokenPopUp setShowTransferToken={setShowTransferToken} />
          )}
        </div>
      </div>
    </div>
  );
}
