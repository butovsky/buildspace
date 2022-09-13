import * as hre from 'hardhat'

async function main() {
  const [owner, waver] = await hre.ethers.getSigners();
  const WavePortal = await hre.ethers.getContractFactory("WavePortal");
  const wave = await WavePortal.deploy();
  await wave.deployed();

  console.log(`WavePortal deployed to ${ wave.address }`);
  console.log(`WavePortal deployed by ${ owner.address }`)
  console.log(`Total waves count: ${ await wave.totalWaves() }`)

  const waveWithWaver = wave.connect(waver);
  const waveTx = await waveWithWaver.wave("Hi", owner.address);
  console.log(`Processing the wave...`)
  await waveTx.wait();

  console.log(`Total waves count: ${ await wave.totalWaves() }`)

  const ownerWaves = await wave.myWaves();
  console.log(`Your waves: ${ ownerWaves.map(wave => `${wave.message} from ${wave.from}`) }`);

  wave.on("UserWaved", (from, to) => {
    console.log(`${ from } has waved to ${ to }!`)
  })


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
