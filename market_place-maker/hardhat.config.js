require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    etherlinkTest: {
      url: "https://node.ghostnet.etherlink.com",
      accounts: [
        "c4afff5af0204c8a8e653a3641cda0442aad699eaa6f37876a8e8152be3f69e1",
      ],
    },
  },
};
