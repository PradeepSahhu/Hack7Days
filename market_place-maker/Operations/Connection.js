import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

async function ContractConnection() {
  console.log(process);
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

    const instanceVar = await web3ModalVar.connect();
    const providerVar = new ethers.providers.Web3Provider(instanceVar);

    const contractAddress = "0x84af008BE17fcd0673d6Bc784939836e82e10C3A";
    console.log(contractAddress);
    console.log(instanceVar);

    const abi = process.env.FactoryABI;
    console.log(abi);

    try {
      const signer = providerVar.getSigner();
      const smartContract = new ethers.Contract(contractAddress, abi, signer);

      const newSmartContract = smartContract.connect(signer);
      console.log("The signer is : " + providerVar);
      return newSmartContract;
      // const response = await contractWithSigner.readNum();
      // console.log(response);

      // console.log(parseInt(response));
      // // setStoredNumber(parseInt(response));
      // // setRetrieveLoader(false);
      // return;
    } catch (error) {
      console.log("Their is some error");
      console.log(error);
    }
  }
}

export default ContractConnection;
