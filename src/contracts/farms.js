import {ethers} from 'ethers'

const contractFarms = async (provider,farm, farmABI) => {
    let signer = provider.getSigner();
    let contract = new ethers.Contract(farm, farmABI, signer);
    return contract;
  };

export const depositAmount = async(provider,farm, farmABI,amount,toAddress) =>{
    let cont = await contractFarms(provider,farm,farmABI)
    await cont.depositAll(ethers.utils.parseEther(amount.toString()),toAddress.toString())
}

export const harvest = async(provider,farm, farmABI,toAddress)=>{
    let cont = await contractFarms(provider,farm,farmABI)
    await cont.harvest(toAddress.toString())
}

export const withdraw = async(provider,farm, farmABI,amount,toAddress)=>{
    let cont = await contractFarms(provider,farm,farmABI)
    await cont.withdrawAll(ethers.utils.parseEther(amount.toString()),toAddress.toString())
}

export const depositedAmt = async(provider,farm, farmABI,userAddress)=>{
    let cont = await contractFarms(provider,farm,farmABI)
    let res = await cont.userInfo(userAddress)
    return parseFloat(ethers.utils.formatUnits(res[0], 18)).toFixed(3)
}

export const harvestAmt = async(provider,farm, farmABI,userAddress)=>{
    let cont = await contractFarms(provider,farm,farmABI)
    let res = await cont.pendingReward(userAddress)
    return parseFloat(ethers.utils.formatUnits(res, 18)).toFixed(3)

}