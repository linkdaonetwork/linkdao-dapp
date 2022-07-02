import {seedABI } from "../abi";
import {ethers} from 'ethers'
import modal from '../modal'
import {address} from '../address'

const contractSeed = async()=>{
    let provider = await modal()
    let signer = provider.getSigner()
    let contract  =new ethers.Contract(address, seedABI,signer)
    return contract
}

export const getDeposit = async(amount)=>{
    let cont = await contractSeed()
    console.log(cont)
    await cont.deposit(ethers.utils.parseEther(amount.toString()))
}

export const claimInitialToken = async(owner)=>{
    let cont = await contractSeed()
    let details = await cont.claimDetails(owner)
    // console.log(details[0].toString().split(','))
    let arr = details[0].toString().split(',')
    if(arr[0]==="0"){
        return 'disabled'
    }
    else {
        await cont.claimTokens(0)
        return 'enabled'
    }
}

export const claimToken = async(owner)=>{
    let cont = await contractSeed()
    //read clam details
    let details = await cont.claimDetails(owner)
    // console.log(details[0].toString().split(','))
    let arr = details[0].toString().split(',')
    let value =1
    console.log(arr)
    for(let i=1;i<arr.length;i++){
        if(arr[i]==="0"){
            value++
        }else break;
    }
    console.log(value)
    await cont.claimTokens(value) //value between 1 to 15
}

export const checkDeposit = async(owner)=>{
    let cont = await contractSeed()
    let deposits = await cont.totalDeposit()
    // let sum = deposits[0].toString().split(',').map(ele=>ethers.utils.formatUnits(ele.toString(),18)).reduce((a,b)=>parseInt(a.toString())+parseInt(b.toString()))
    let sum = deposits.toString()
    // console.log(ethers.utils.formatUnits(sum.toString(),18))
    console.log(sum)
    return parseInt(ethers.utils.formatUnits(sum,18))
}

export const checkBalance = async(owner)=>{
    let cont = await contractSeed()
    let balance = await cont.claimDetails(owner)
    const amount = balance[0].toString().split(',').map(ele=>parseFloat(ethers.utils.formatUnits(ele.toString(),18)))
    return (amount.reduce((a,b)=>a+b))
    // return ethers.utils.formatUnits(balance.toString(),18)
}

export const checkAmount = async(owner)=>{
    let cont = await contractSeed()
    let balance = await cont.viewDeposits(owner)
    const amount = balance[0].toString().split(',').map(ele=>parseInt(ethers.utils.formatUnits(ele.toString(),18)))
    return (amount.reduce((a,b)=>a+b))
    // return ethers.utils.formatUnits(amount.toString(),18)
    
}

