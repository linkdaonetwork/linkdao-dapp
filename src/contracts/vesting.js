import { lockerABI } from "../abi";
import { vesting } from "../address";
import {ethers} from 'ethers'
// import modal from "../modal";

const contractLocker = async(provider)=>{
    // let provider = await modal()
    let signer = provider.getSigner()
    let contract  =new ethers.Contract(vesting, lockerABI,signer)
    return contract
}

export const getUserDetails= async(account,provider)=>{
    let cont = await contractLocker(provider)
    return await cont.userDetailsAll(account)
}

export const claimALL = async(provider)=>{
    let cont = await contractLocker(provider)
    console.log('clicked')
    await cont.claimAll()
}