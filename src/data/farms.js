import BUSD from "../images/BUSD.svg"
import LKD from "../images/LKD.svg";
import BTC from "../images/BTC.svg";
import ETH from "../images/ETH.svg";
import BNB from "../images/BNB.svg";
import USDT from "../images/USDT.svg";
import USDC from "../images/USDC.svg";
import MATIC from "../images/MATIC.svg";
import { biswapLp,biswapFarm, } from "../address";
import { biswapLpABI, biswapFarmABI } from "../abi";
export const data = [
    {
        pair:"BTC-ETH LP",
        apy:"-",
        daily:"-",
        network:"PancakeSwap",
        img1:BTC,
        img2:ETH,
        address:biswapLp,
        abi:biswapLpABI,
        farm:biswapFarm,
        farmABI:biswapFarmABI,
        token:""
    },
    {
        pair:"USDC-BUSD LP",
        apy:"-",
        daily:"-",
        network:"PancakeSwap",
        img1:USDC,
        img2:BUSD,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:""
    },
    {
        pair:"USDC-MATIC LP",
        apy:"-",
        daily:"-",
        network:"PancakeSwap",
        img1:USDC,
        img2:MATIC,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:""
    },
    {
        pair:"ETH-MATIC LP",
        apy:"-",
        daily:"-",
        network:"PancakeSwap",
        img1:ETH,
        img2:MATIC,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:""
    },
    {
        pair:"ETH-USDC LP",
        apy:"-",
        daily:"-",
        network:"PancakeSwap",
        img1:ETH,
        img2:USDC,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:""
    },
    {
        pair:"LKD-BUSD LP",
        apy:"24.03%",
        daily:"0.059%",
        network:"PancakeSwap",
        img1:LKD,
        img2:BUSD,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:"LKD "
    },
    
    {
        pair:"LKD-BNB LP",
        apy:"-",
        daily:"-",
        network:"PancakeSwap",
        img1:LKD,
        img2:BNB,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:"LKD "
    },
    
     {
        pair:"LKD-USDT LP",
        apy:"124.91%",
        daily:"0.223%",
        network:"PancakeSwap",
        img1:LKD,
        img2:USDT,
        address:"",
        abi:"",
        farm:"",
        farmABI:"",
        token:"LKD "
    },
]