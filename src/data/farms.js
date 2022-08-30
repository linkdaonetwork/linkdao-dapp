import BUSD from "../images/BUSD.svg"
import LKD from "../images/LKD.svg";
import BNB from "../images/BNB.svg";
import USDT from "../images/USDT.svg";
import { bakerLp, bakerFarm } from "../address";
import { bakerLpABI, bakerFarmABI } from "../abi";
export const data = [
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
        farmABI:""
    },
     {
        pair:"LKD-USDT LP",
        apy:"124.91%",
        daily:"0.223%",
        network:"PancakeSwap",
        img1:LKD,
        img2:USDT,
        address:bakerLp,
        abi:bakerLpABI,
        farm:bakerFarm,
        farmABI:bakerFarmABI
    },
]