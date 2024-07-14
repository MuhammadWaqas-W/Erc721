// const mnemonic = fs.readFileSync(".secret").toString().trim();
// // require("dotenv").config();
// // const infuraKey = "fj4jll3k.....";
// const fs = require("fs");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { mnemonic, ETHERSCAN_API_KEY } = require("./env.json");
module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
  },
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/5b93df3949ce4450b962ab372d314b63`
        ),
      // network_id: "*",
      network_id: 3,
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};

// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const fs = require("fs");
// const mnemonic = fs.readFileSync(".secret").toString().trim();
// require("dotenv").config();
// module.exports = {
// networks: {
//   rinkeby: {
//     provider: function () {
//       return new HDWalletProvider(
//         mnemonic,
//         `https://ropsten.infura.io/v3/5b93df3949ce4450b962ab372d314b63`
//       );
//     },
//     network_id: 4,
//   },
// },
//   plugins: ["truffle-plugin-verify"],
//   api_keys: {
//     etherscan: process.env.ETHERSCAN_API_KEY,
//   },
// };
