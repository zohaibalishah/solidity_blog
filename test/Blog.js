const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Blog", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const Lock = await ethers.getContractFactory("Blog");
    const lock = await Lock.deploy();
    return { lock, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Create post", async function () {
      const { lock,owner,otherAccount  } = await loadFixture(deployOneYearLockFixture);
      await lock.addPost("post 1","post description")
      expect(await lock.getNumOfPost()).to.equal(1);
    });
 
  });

 
});
