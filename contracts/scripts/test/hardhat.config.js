require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    kopli: {  // Reactive Kopli Testnet
      url: "https://kopli-rpc.reactive.network",
      chainId: 5318008,
      accounts: ["YOUR_PRIVATE_KEY"]  // Add via .env: require("dotenv").config(); process.env.PRIVATE_KEY
    },
    sepolia: {  // For origin testing
      url: "https://sepolia.infura.io/v3/YOUR_API_KEY",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
