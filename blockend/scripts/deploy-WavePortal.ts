import * as hre from 'hardhat'

async function main() {
  const [owner /*, waver */] = await hre.ethers.getSigners();
  const WavePortal = await hre.ethers.getContractFactory("WavePortal");
  const wave = await WavePortal.deploy();

  await wave.deployed();

  console.log(`WavePortal deployed to ${ wave.address }`);
  console.log(`WavePortal deployed by ${ owner.address }`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
