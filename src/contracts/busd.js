import { BusdABI } from "../abi";
import { ethers } from "ethers";
// import web3Modal from "../modal";
import { token } from "../address";

const contractBusd = async (provider) => {
  // let provider = await modal();
  let signer = provider.getSigner();
  let contract = new ethers.Contract(token, BusdABI, signer);
  return contract;
};

export const approve = async (address,provider) => {
  let cont = await contractBusd(provider);
  let value = 100000000000000000000000n;
  return await cont.approve(address, value);
};

export const checkApprove = async (owner, address,provider) => {
  let cont = await contractBusd(provider);
  let result = await cont.allowance(owner, address);
  return result;
};

export const getAccountBalance = async (owner,provider) => {
  let cont = await contractBusd(provider);
  let balance = await cont.balanceOf(owner);
  console.log(balance);
  return parseInt(ethers.utils.formatUnits(balance, 18));
};
