import { BusdABI } from "../abi";
import { ethers } from "ethers";
import modal from "../modal";
import { token } from "../address";

const contractBusd = async () => {
  let provider = await modal();
  let signer = provider.getSigner();
  let contract = new ethers.Contract(token, BusdABI, signer);
  return contract;
};

export const approve = async (address) => {
  let cont = await contractBusd();
  let value = 100000000000000000000000n;
  return await cont.approve(address, value);
};

export const checkApprove = async (owner, address) => {
  let cont = await contractBusd();
  console.log(cont, owner);
  let result = await cont.allowance(owner, address);
  return result;
};

export const getAccountBalance = async (owner) => {
  let cont = await contractBusd();
  let balance = await cont.balanceOf(owner);
  console.log(balance);
  return parseInt(ethers.utils.formatUnits(balance, 18));
};
