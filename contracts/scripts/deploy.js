const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const SolCipher = await hre.ethers.getContractFactory("SolCipher");
  const solCipher = await SolCipher.deploy(8, "ETH / USD", 1);  // decimals, desc, version

  await solCipher.waitForDeployment();
  console.log("SolCipher deployed to:", await solCipher.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
