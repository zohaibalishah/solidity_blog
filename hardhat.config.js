// require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle")

task("accounts","print list of accounts",async()=>{
  const accounts=await ethers.getSigners()
  for (const account of accounts) {
    console.log(account.address)
    
  }
})
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/<key>",
      }
    }
  }
};
