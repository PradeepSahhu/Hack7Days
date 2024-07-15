"use client";
import Image from "next/image";
// import { Navbar } from "@/components/navbar";
import AdvancedNav from "@/components/AdvancedNav";
import NextNav from "@/components/NextNav";
import Item from "@/components/Item";
import Search from "@/components/Search";
import Registered from "@/components/Registered";
import Link from "next/link";
import Animation from "@/components/Animation";
import ContractConnection from "@/Operations/Connection";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from "react";
import ChangeNetworkPopUp from "@/components/PopUps/ChangeNetwork";

import Network from "@/Operations/Network";

export default function Home() {
  const [registered, setRegistered] = useState();
  const [provider, setProvider] = useState();
  const [connectedAccount, setConnectedAccount] = useState();
  const [registeredMarketPlace, setRegisteredMarketPlace] = useState();
  const [showChangeNetwork, setShowChangeNetwork] = useState(false);
  const [showChainId, setShowChainID] = useState();

  const checkNetwork = async () => {
    const chainId = await Network();
    console.log("The returned Chain id  is : " + chainId);
    console.log(typeof chainId);
    setShowChainID(chainId);
    if (chainId != Number(128123)) {
      console.log("This is showing change the network");
      setShowChangeNetwork(true);
    }
  };

  const handleAccount = async () => {
    initWallet();
    ContractConnection();
  };

  const initWallet = async () => {
    console.log("Button is clicked");
    let accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length == 0) {
      try {
        console.log("init wallet is working");
        // check if any wallet provider is installed. i.e metamask xdcpay etc
        if (typeof window.ethereum === "undefined") {
          console.log("Please install wallet.");
          alert("Please install wallet.");
          return;
        } else {
          // raise a request for the provider to connect the account to our website
          const web3ModalVar = new Web3Modal({
            cacheProvider: true,
            providerOptions: {
              walletconnect: {
                package: WalletConnectProvider,
              },
            },
          });

          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          setConnectedAccount(accounts);

          if (accounts.length === 0) {
            try {
              const account = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              setConnectedAccount(account);
              console.log("MetaMask connected.");
            } catch (error) {
              console.log("can't connect to the account");
            }
          }

          const instanceVar = await web3ModalVar.connect();
          const providerVar = new ethers.providers.Web3Provider(instanceVar);
          setProvider(providerVar);
          console.log(provider);
          // readNumber(providerVar);
          return;
        }
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };

  const getDeployedMarketPlace = async () => {
    const contractInstance = await ContractConnection();
    const res = await contractInstance.getInstances();
    console.log(res);
    setRegisteredMarketPlace(res);
  };

  if (showChainId == undefined) {
    checkNetwork();
  }

  useEffect(() => {
    getDeployedMarketPlace();
    initWallet();
    // checkNetwork();
    // getDeployedMarketPlace();
  }, []);
  return (
    <div className="bg-black font-myFont">
      <AdvancedNav />
      <Search
        handleAccount={handleAccount}
        connectedAccount={connectedAccount}
      />
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
            <Link
              className="bg-yellow-400 mt-2 px-5 pt-3 pb-2.5 rounded-xl hover:bg-yellow-800"
              href="./NewMarketPlace"
            >
              Get Started
              <img src="./arrow.png" className="h-8 w-8 inline-block ml-3" />
            </Link>
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
              <p className="text-white px-2 pt-1 pb-1 rounded-xl hover:bg-yellow-800 justify-end flex underline underline-offset-8 decoration-yellow-400">
                Top
              </p>
              <button className="bg-yellow-400  px-2 pt-1 pb-1 rounded-xl hover:bg-yellow-800 justify-end flex">
                12hr
              </button>
              <button className="bg-yellow-400  px-2 pt-1 pb-1 rounded-xl hover:bg-yellow-800 justify-end flex">
                24hr
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
                {registeredMarketPlace
                  ? registeredMarketPlace.map((eachMarket, index) => (
                      <Link href={`${eachMarket.instanceAddress}`} key={index}>
                        <Registered
                          key={index}
                          mIndex={index + 1}
                          mName={eachMarket.name}
                          mAddress={eachMarket.instanceAddress}
                        />
                      </Link>
                    ))
                  : ""}
              </div>
            </div>

            {showChangeNetwork && (
              <ChangeNetworkPopUp setShowChangeNetwork={setShowChangeNetwork} />
            )}

            <div className="flex justify-between gap-x-5 grid-cols-3">
              <Animation
                url={
                  "https://lottie.host/b9e28391-16cf-4d8e-b592-5fd491f8398b/wCECNiQKUn.json"
                }
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-xl font-bold flex justify-center relative">
        <p>Copy right 2024 Pradeep Sahu</p>
      </div>
    </div>
  );
}
