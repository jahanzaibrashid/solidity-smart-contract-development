require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
require("dotenv").config();

const privatekey = fs.readFileSync("../.secret").toString().trim();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const {
  MATIC_INFURA_KEY,
  MUMBAI_INFURA_KEY,
  GOERLI_INFURA_KEY,
  MAINNET_INFURA_KEY,
  KOVAN_INFURA_KEY,
} = process.env;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
if (!MATIC_INFURA_KEY)
  throw new Error("Please set your MATIC_INFURA_KEY in a .env file");
if (!MUMBAI_INFURA_KEY)
  throw new Error("Please set your MUMBAI_INFURA_KEY in a .env file");
if (!GOERLI_INFURA_KEY)
  throw new Error("Please set your GOERLI_INFURA_KEY in a .env file");
if (!MAINNET_INFURA_KEY)
  throw new Error("Please set your MAINNET_INFURA_KEY in a .env file");
if (!KOVAN_INFURA_KEY)
  throw new Error("Please set your KOVAN_INFURA_KEY in a .env file");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  hardhat: {
    // forking: { url: MAINNET_INFURA_KEY || "" },
  },
  matic: {
    url_: MATIC_INFURA_KEY,
    url: " https://polygon-rpc.com",
    gasPrice: 60000000000,
    accounts: [privatekey],
  },
  mumbai: {
    url: "https://matic-mumbai.chainstacklabs.com",
    urlx: MUMBAI_INFURA_KEY,
    gasPrice: 8000000000,
    accounts: [privatekey],
  },
  goerli: {
    url: GOERLI_INFURA_KEY,
    accounts: [privatekey],
  },
  mainnet: {
    url: MAINNET_INFURA_KEY,
    accounts: [privatekey],
  },
  kovan: {
    url: KOVAN_INFURA_KEY,
    accounts: [privatekey],
  },
};
