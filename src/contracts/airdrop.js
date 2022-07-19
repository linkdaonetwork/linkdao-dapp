import {AirDropABI } from "../abi";
import {ethers} from 'ethers'
import modal from '../modal'
import {airdrop} from '../address'

export const contractAirdrop = async()=>{
    let provider = await modal()
    let signer = provider.getSigner()
    let contract = new ethers.Contract(airdrop,AirDropABI,signer)
    return contract
}

export const claimAirdrop = async (account) => {
  let cont = await contractAirdrop();
  let value = "0.001";
  console.log(account)
  await cont.ClaimAirdrop(account, {
    value: ethers.utils.parseEther(value),
  });
};