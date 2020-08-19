const ethers = require("ethers");
const provider = require("../utils/provider");
const wallet = require("../utils/wallet");
const { address, abi } = require("../utils/config");

const main = async () => {
  const account = wallet.connect(provider);
  const usdc = new ethers.Contract(address, abi, account);

  const tx = await usdc.gimmeSome({ gasPrice: 20e9 });

  console.log(`Transaction Hash: ${tx.hash}`);
  const receipt = tx.wait();
  console.log(`Transaction confirmed in block number: ${receipt.blockNumber}`);
  console.log(`Gas used: ${receipt.gasUsed.toString()}`);
};
main();
