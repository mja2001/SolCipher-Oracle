const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SolCipher", function () {
  let solCipher;

  beforeEach(async function () {
    const SolCipher = await ethers.getContractFactory("SolCipher");
    solCipher = await SolCipher.deploy(8, "ETH / USD", 1);
    await solCipher.waitForDeployment();
  });

  it("Should return initial values", async function () {
    const [, answer, , updatedAt, ] = await solCipher.latestRoundData();
    expect(answer).to.equal(0);
    expect(updatedAt).to.be.properAddress;  // Initial 0
  });

  it("Should update price", async function () {
    await solCipher.updatePrice(2000000000000000000n, 1);  // e.g., $2000 ETH
    const [, ans] = await solCipher.latestRoundData();
    expect(ans).to.equal(2000000000000000000n);
  });
});
