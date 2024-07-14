"use client";
import { useState } from "react";
import ContractConnection from "@/Operations/Connection";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default function Search() {
  const [connectedAccount, setConnectedAccount] = useState();

  const handleAccount = async () => {
    await ContractConnection();
    await initWallet();
  };

  const initWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    setConnectedAccount(accounts[0]);

    if (accounts.length === 0) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("the requested account is " + account);
        setConnectedAccount(account[0]);
        console.log("MetaMask connected.");
      } catch (error) {
        console.log("can't connect to the account");
      }
    }

    return;
  };

  return (
    <div className="bg-transparent text-white">
      <nav className="bg-transparent text-white shadow-lg">
        <div className=" mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-white text-lg">NFT</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1 ">
                <a
                  href="#"
                  className="py-4 px-2 text-white font-semibold hover:text-[#1679AB] transition duration-300 rounded-xl"
                >
                  {connectedAccount ? connectedAccount : "No Account Connected"}
                </a>
                <div className="relative group">
                  <button className="py-4 px-2 text-white font-semibold hover:text-[#1679AB] transition duration-300">
                    Services
                  </button>
                  <div className="absolute hidden  bg-black shadow-lg w-[30rem] group-hover:flex group-hover:justify-between -left-52 gap-x-5">
                    <div className="inline-block w-1/2">
                      <div className="mb-6">
                        <p className="text-gray-700 text-start text-md">
                          Services
                        </p>
                      </div>

                      <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
                      <div className="flex justify-between mt-5 items-center">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          className="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 1
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          className="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 2
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          className="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 3
                        </a>
                      </div>
                    </div>
                    <div className="bg-black inline-block w-1/2">
                      <div className="mb-6">
                        <p className="text-gray-700 text-start text-md">
                          Services
                        </p>
                      </div>

                      <hr className="col-start-1 col-end-4 w-full h-1 mx-auto bg-gray-100 border-0 rounded  dark:bg-gray-700" />
                      <div className="flex justify-between mt-5 items-center">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          className="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 1
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          className="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 2
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <img
                          src="./right-arrow.png"
                          alt="Logo"
                          className="h-8  mr-2 w-1/12"
                        />
                        <a
                          href="#"
                          className="block px-1 py-2 text-white hover:bg-gray-100 w-11/12 text-sm"
                        >
                          Service 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="items-center flex">
              <div className="flex justify-center ">
                <input className="  text-[16px] rounded-sm px-1 py-0.5 border-1 text-black w-96 border-yellow-400 bg-transparent border-2 focus:border-yellow-400 focus:text-white focus:outline-none" />
              </div>
            </div>

            <div className="items-center flex gap-5">
              <div className="flex justify-center ">
                <button
                  className="  text-[16px] rounded-3xl px-3 py-2 bg-[#1679AB] border-1  text-black"
                  onClick={() => handleAccount()}
                >
                  Connect
                </button>
              </div>
              <div className="flex justify-center ">
                <button className=" text-[16px] rounded-md px-1 py-0.5  bg-gray-600 text-white">
                  Options
                </button>
              </div>
              <div className="flex justify-center ">
                <button className="  text-[16px] rounded-md px-1 py-0.5 background-blue-800 border-1 bg-yellow-400 text-black">
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
