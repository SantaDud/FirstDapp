const { ethers } = require("hardhat");

async function main() {
  const complaintsStorageFactory = await ethers.getContractFactory(
    "Complaints"
  );
  const complaintsContract = await complaintsStorageFactory.deploy();

  await complaintsContract.deployed();
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
