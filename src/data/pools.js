import LKD from '../images/LKD.svg'
import {LkdPool24,LkdPool18,LkdPoolS24,LkdPoolP24,LkdPoolA124,LkdPoolA224} from "../address"
import {LkdPool24ABI,LkdPool18ABI,LkdPoolS24ABI,LkdPoolP24ABI,LkdPoolA124ABI, LkdPoolA224ABI} from "../abi"

export const data = [
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
        depositOn:true,
        address:"0xd4769eb0cca4d29af46361052b55767e016df956"
    },
    {
        token:"Recurring Pool A1",
        apr:"36.00%",
        tvl:"-",
        img:LKD,
        pool:LkdPoolA124,
        poolAbi:LkdPoolA124ABI,
        contract:"https://bscscan.com/address/0x13A3ae11a23161c66eD859386D4207EF7310FE6b#code",
        month:"24",
        limit:"100000",
        showAuditLog:true,
        depositOn:true,
        address:"0x13A3ae11a23161c66eD859386D4207EF7310FE6b"
    },
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
        depositOn:true,
        address:"0x68B7Ee70Ab8c692605F0f2345008398c0Ec1A20B"
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
        depositOn:false,
        address:"0xed9a44c2a15cda8f71aabef6d11d10f377cb7200"
    },
    {
        token:"Recurring Pool P24",
        apr:"36.00%",
        tvl:"-",
        img:LKD,
        pool:LkdPoolP24,
        poolAbi:LkdPoolP24ABI,
        contract:"https://bscscan.com/address/0x076243cca7648d3c93c72ee0caa1a373f478c85b#code",
        month:"24",
        limit:"300000",
        showAuditLog:false,
        depositOn:false,
        address:"0x076243CcA7648d3c93c72EE0caA1A373f478c85B"
    },
    {
        token:"Recurring Pool A2",
        apr:"36.00%",
        tvl:"-",
        img:LKD,
        pool:LkdPoolA224,
        poolAbi:LkdPoolA224ABI,
        contract:"https://bscscan.com/address/0x8182e0502e8a6f2d778ed4b65340434fc421925a#code",
        month:"24",
        limit:"100000",
        showAuditLog:true,
        depositOn:true,
        address:"0x8182E0502e8A6f2d778Ed4B65340434Fc421925a"
    },
]