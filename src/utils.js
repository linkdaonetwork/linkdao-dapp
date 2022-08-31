import axios from "axios";
import { ethers } from "ethers";

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

export const getPrice =async()=>{ //get lkd price
  const response = await axios.get('https://liquidity-pool.herokuapp.com/api/tokenPrice')
  return response.data.data
}

export const getBusdPrice = async()=>{ //get busd price
  let res = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BUSDUSDT')
  let price = res.data['price']
  return price
}

export const getCirculatingSupply=async()=>{
  let res = await axios.get('https://liquidity-pool.herokuapp.com/api/circulatingSupply')
  res =  res.data.data
  return parseFloat(ethers.utils.formatUnits(res, 18)).toFixed(3)
}