import {ethers} from 'ethers'

const contract = async(provider,address,abi)=>{
    let signer = provider.getSigner();
    return new ethers.Contract(address, abi, signer)
}

export const approve = async(provider,lpAddress,lpAbi,spenderAddress)=>{
    let cont = await contract(provider,lpAddress,lpAbi)
    let value = 50000
    return await cont.approve(spenderAddress,ethers.utils.parseEther(value.toString()))
}

export const checkApprove = async (provider,lpAddress,lpAbi,userAddress,spenderAddress) => {
    let cont = await contract(provider,lpAddress,lpAbi);
    let result = await cont.allowance(userAddress,spenderAddress);
    return result;
  };

export const balance = async(provider,lpAddress,lpAbi,userAddress) =>{
    let cont = await contract(provider,lpAddress,lpAbi);
    let result = await cont.balanceOf(userAddress)
    return  parseFloat(ethers.utils.formatUnits(result, 18)).toFixed(3)
}

export const getTvl = async(provider,lpAddress,lpAbi)=>{
    let cont = await contract(provider,lpAddress,lpAbi);
    let result = await cont.getReserves()
    return parseFloat(ethers.utils.formatUnits(result[0], 18)).toFixed(3)
}