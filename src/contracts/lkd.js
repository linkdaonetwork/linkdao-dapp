import { LkdTokenABI } from "../abi";
import { ethers } from "ethers";
import { LkdToken } from "../address";

const contractLkd = async (provider) => {
    // let provider = await modal();
    let signer = provider.getSigner();
    let contract = new ethers.Contract(LkdToken, LkdTokenABI, signer);  
    return contract;
  };

export const getAccountBalance = async (owner,provider) => {
    let cont = await contractLkd(provider);
    let balance = await cont.balanceOf(owner);
    return parseFloat(ethers.utils.formatUnits(balance, 18));
  };
  