import LKD from '../images/LKD.svg'
import {LkdPool24,LkdPool18,LkdPoolS24} from "../address"
import {LkdPool24ABI,LkdPool18ABI,LkdPoolS24ABI} from "../abi"
export const data = [
    {
        token:"Recurring Pool A",
        apr:"36.00%",
        tvl:"-",
        img:LKD,
        pool:LkdPool24,
        poolAbi:LkdPool24ABI,
        contract:"https://bscscan.com/address/0x68b7ee70ab8c692605f0f2345008398c0ec1a20b#code",
        month:"24",
        limit:"100000",
        showAuditLog:true,
        depositOn:true
    },
    {
        token:"Recurring Pool B",
        apr:"24.00%",
        tvl:"-",
        img:LKD,
        pool:LkdPool18,
        poolAbi:LkdPool18ABI,
        contract:"https://bscscan.com/address/0xd4769eb0cca4d29af46361052b55767e016df956#code",
        month:"18",
        limit:"100000",
        showAuditLog:true,
        depositOn:true
    },
    {
        token:"Recurring Pool S24",
        apr:"30.00%",
        tvl:"-",
        img:LKD,
        pool:LkdPoolS24,
        poolAbi:LkdPoolS24ABI,
        contract:"https://bscscan.com/address/0xed9a44c2a15cda8f71aabef6d11d10f377cb7200#code",
        month:"24",
        limit:"350000",
        showAuditLog:false,
        depositOn:false
    }
]