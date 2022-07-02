import { lockerABI } from "../abi";
import { locker } from "../address";
import {ethers} from 'ethers'
import modal from "../modal";

const contractLocker = async()=>{
    let provider = await modal()
    let signer = provider.getSigner()
    let contract  =new ethers.Contract(locker, lockerABI,signer)
    return contract
}

export const getUserDetails= async(account)=>{
    let cont = await contractLocker()
    return await cont.userDetailsAll(account)
}

export const claimALL = async()=>{
    let cont = await contractLocker()
    console.log('clicked')
    await cont.claimAll()
}