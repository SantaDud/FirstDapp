require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: " http://127.0.0.1:8545/",
      chainId: 31337,
    },
    ganache : {
      url: "http://127.0.0.1:7545/",
      chainId: 1337,
    }
  },
  solidity: "0.8.17",
};