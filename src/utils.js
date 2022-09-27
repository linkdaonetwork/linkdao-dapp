import axios from "axios";
import { ethers } from "ethers";
import { LkdToken } from "./address";
import LKD from './images/Linkdao Logo.png'

const tokenAddress = LkdToken;
const tokenSymbol = 'LKD';
const tokenDecimals = 18;
const tokenImage = LKD;

const url  = "https://api.linkdao.network"

export const addTokenFunction = async () => {
  try {
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });

    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('LKD Coin has not been added');
    }
  } catch (error) {
    console.log(error);
  }
}

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const getPrice = async () => { //get lkd price
  const response = await axios.get(url+'/api/tokenPrice')
  return response.data.data
}

export const getBusdPrice = async () => { //get busd price
  let res = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BUSDUSDT')
  let price = res.data['price']
  return price
}

export const getCirculatingSupply = async () => {
  let res = await axios.get(url+'/api/circulatingSupply')
  res = res.data.data
  return parseFloat(ethers.utils.formatUnits(res, 18)).toFixed(3)
}

export const getHoldings = async () => {
  let res = await axios.get(url+'/api/holdersList')
  res = res.data.data
  return res
}