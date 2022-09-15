import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

import { ENV } from "./env.config";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: ENV('MUMBAI_API_URL'),
      accounts: [ENV('OWNER_PRIVATE_KEY')]
    }
  },
  etherscan: {
    apiKey: ENV('POLYGONSCAN_API_KEY')
  }
};

export default config;
