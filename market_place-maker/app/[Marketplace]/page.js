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
import IpfsToArray from "@/Connections/Functionality/realPFS";
import fetchMultipleData from "@/Connections/Functionality/ipfsFetch";

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
  const [assetConnectionAddress, setAssetConnectionAddress] = useState();
  const [owner, setOwner] = useState();

  //ipfs
  const [allIPFS, setAllIPFS] = useState();
  const [toMintIPFS, setToMintIPFS] = useState();

  //collections.
  const [collections, setCollections] = useState();

  const urls = [
    "https://ipfs.io/ipfs/QmP52JDE2gdL3Rc8E83aEmD7SUnhcb5Jjhoy5YoSx4TPRZ", //lambo
    "https://ipfs.io/ipfs/QmcWWFLLWf4fUwHPbqhJJupvPXUW4p6iS3jUivKiG7H27B", //robot
    "https://ipfs.io/ipfs/QmUASD1U57tGLnupqBoieZfeX2hHWdVEmFz5Hs3kcXeguT", // space city
    "https://ipfs.io/ipfs/QmNqTfh67vgAMyrefF1UxZH3nj34VHtFx4FsxkLNUuwEXf", // space colony
    "https://ipfs.io/ipfs/QmUKHAfQqRsNDdyAtgKkQtkk5atn7t9nuGSpaZ4wh4vcdh", // punk girl
    "https://ipfs.io/ipfs/QmZsKUdF3mvhRbmXVPvC4Q6VGwmUiDTdXnLYSPtzt3VL7n", // girl cyber punk
    "https://ipfs.io/ipfs/QmbHSggvkZRbHXp5CpXty2JCAxznpdfQhfRhhg53Z9nymK", //god of destruction
    "https://ipfs.io/ipfs/QmY3ZPzoxw83GUFMU1VB669VWTCzDWv565TdNCqhGSpPg9", // destroied city
    "https://ipfs.io/ipfs/QmRsaFFU9DAfpMPHAtBLiMdr8NYB7WzBUUX6xm1NmwFpEy", //Dark Dragon
    "https://ipfs.io/ipfs/QmZ4fb2P13vuhAhQNUbS4Le8YDU2Cc1qPb2M7hTVG437fD", // lightning dragon
    "https://ipfs.io/ipfs/QmcN77SAPZJJfkngZcDKM6A1dMyRxdMyoPTnvc7WcCi866", // space dragon
    "https://ipfs.io/ipfs/QmU3jiyPfUcgjCB1KJMLeFNw6QnT2W3pGVszYaSAruvBHq", // Dwarf Forging
    "https://ipfs.io/ipfs/QmR7PNvVyDSnGXDccTBUd9bPMj91aAcDTf3piK1XCkKoQa", // army of undead
    "https://ipfs.io/ipfs/QmbwM9oRVGR9Xyd8DE59AHGrVJYGtRbkqxMEKEow9rT8vM", // army
  ];

  const setFunc = async (data) => {
    setToMintIPFS(data);
    console.log("The data is : " + data[0].price);
  };
  const setData = async (data) => {
    setCollections(data);
  };

  const getOwner = async () => {
    try {
      const contract = await MarketPlaceConnection(params.Marketplace);
      const res = contract.returnOwner();
      setOwner(res);
    } catch (error) {
      console.log(error);
    }
  };

  const BuyTokens = async () => {
    try {
      const contract = await MarketPlaceConnection(params.Marketplace);
      await contract.buyTokens(parseInt(amountValue), {
        value: parseInt(weiFortoken),
      });
      // console.log(parseInt(amountValue));
    } catch (error) {
      console.log(error);
    }
  };

  const toMintNFT = async (URI, price) => {
    try {
      const contract = await AssetConnection(params.Marketplace);
      await contract.redeemTokens(URI, price);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadLink = async () => {
    try {
      // console.log(
      //   "The address of asset Connection is : " + assetConnectionAddress
      // );
      const contract = await AssetConnection(assetConnectionAddress);
      await contract.addMintNFT(uploadString);
      console.log(uploadString);
    } catch (error) {
      console.log(error);
    }
  };

  const showTokensAmount = async () => {
    try {
      const contract = await MarketPlaceConnection(params.Marketplace);
      const response = await contract.checkingBalance();
      setTokenAmount(parseInt(response));
    } catch (error) {
      console.log(error);
    }
  };

  const getAssetConnectionAddress = async () => {
    try {
      const contract = await MarketPlaceConnection(params.Marketplace);
      const res = await contract.returnAsset();
      console.log("The response address is : " + res);
      setAssetConnectionAddress(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllIPFS = async () => {
    try {
      console.log(
        "The address of asset Connection is : " + assetConnectionAddress
      );
      const contract = await AssetConnection(assetConnectionAddress);
      console.log("The contract Instances are " + contract);

      const res = await contract.returnToMintNFT();
      setAllIPFS(res);
      console.log("Set all IPFS" + res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(params.Marketplace);
    showTokensAmount();
    getAssetConnectionAddress();
  }, []);

  if (allIPFS == undefined) {
    getAllIPFS();
  }
  if (toMintIPFS == undefined) {
    fetchMultipleData(allIPFS, setFunc);
  }
  if (owner == undefined) {
    getOwner();
  }

  if (collections == undefined) {
    fetchMultipleData(urls, setData);
  }
  const getImage = (ipfsURL) => {
    const hash = ipfsURL.split("ipfs://")[1];
    return `https://ipfs.io/ipfs/${hash}`;
  };

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
                  {owner ? owner : "No Owner"}
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
                NFT Available:{" "}
                <span className="text-yellow-400 ml-2">
                  {allIPFS ? allIPFS.length : "0xx"}
                </span>
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

        <hr className="col-start-1 col-end-4 w-full h-0.5 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />

        <div className="mt-10 col-start-1 col-end-4 bg-opacity-90 p-10 justify-center space-x-8 space-y-5">
          <div className="text-2xl bolder flex justify-center mb-10 ">
            <p className="bg-gradient-to-r from-red-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent px-10 text-5xl">
              NFTs To Buy
            </p>
          </div>

          {toMintIPFS
            ? toMintIPFS.map((eachItem, index) => (
                <Card
                  key={index}
                  itemName={eachItem.name}
                  itemDescription={eachItem.description}
                  itemSrc={getImage(eachItem.image)}
                  itemPrice={eachItem.price}
                  toMintNFT={toMintNFT}
                  URI={toMintIPFS[index]}
                />
              ))
            : ""}
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
              collections={collections}
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
