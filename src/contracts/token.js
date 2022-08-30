import {ethers} from 'ethers'

const contract = async (provider,tokenAddress, tokenABI) => {
    let signer = provider.getSigner();
    let contract = new ethers.Contract(tokenAddress, tokenABI, signer);
    return contract;
  };

  export const approve = async(provider,tokenAddress,tokenAbi,spenderAddress)=>{
    let cont = await contract(provider,tokenAddress,tokenAbi)
    let value = 50000
    return await cont.approve(spenderAddress,ethers.utils.parseEther(value.toString()))
}

export const checkApprove = async (provider,tokenAddress,tokenAbi,userAddress,spenderAddress) => {
    let cont = await contract(provider,tokenAddress,tokenAbi);
    let result = await cont.allowance(userAddress,spenderAddress);
    return result;
  };

  export const balance = async(provider,tokenAddress,tokenAbi,userAddress) =>{
    let cont = await contract(provider,tokenAddress,tokenAbi);
    let result = await cont.balanceOf(userAddress)
    return  parseFloat(ethers.utils.formatUnits(result, 18)).toFixed(3)
}