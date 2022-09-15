import * as hre from 'hardhat';

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const butovskyNFTFactory = await hre.ethers.getContractFactory("ButovskyNFT");
  const butovskyNFT = await butovskyNFTFactory.deploy();
  await butovskyNFT.deployed();

  console.log(`ButovskyNFT deployed to ${ butovskyNFT.address }`);
  console.log(`ButovskyNFT deployed by ${ owner.address }`)

  const mintTx = await butovskyNFT.safeMint();
  await mintTx.wait();

  /*
  butovskyNFT.on("Minted", (to, tokenId) => {
    console.log(`Token #${ tokenId } has been minted to ${ to }!`)
  })
  */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});