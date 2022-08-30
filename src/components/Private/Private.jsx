import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "../Launchpad/Launchpad.css";
import "./Private.css";
import coinLogo from "../../images/coinlogo.svg";
import { approve,checkApprove,getAccountBalance} from "../../contracts/busd";
import {getDeposit,claimInitialToken,claimToken,checkDeposit,checkBalance,checkAmount} from '../../contracts/private'
import modal from "../../modal";
import  {privateAddress} from '../../address'
import Countdown from "react-countdown";
import website from '../../images/website.png'
import twitterb from '../../images/twitterb.png'
import teleb from '../../images/teleb.png'
import mediumb from '../../images/mediumb.png'
import { getUserDetails,claimALL } from "../../contracts/privateVesting";
import { NetworkContext } from "../../context/NetworkContext";
import {ConnectContext} from '../../context/ConnectContext'
import {ethers} from 'ethers'


const Private = () => {
  const [status, setStatus] = useState(true);
  const [value,setValue]  = useState(0)
  const [deposit,setDeposit] = useState(200000)
  const [balance,setBalance] = useState(0)
  const [amount,setAmount] = useState(0)
  const [account, setAccount] = useContext(NetworkContext);
  const [provider] = useContext(ConnectContext)
  const [subAmount,setSubAmount] = useState(0)
  const [available,setAvailable] = useState(0)

//   const handleCheckApprove = async () => {
//     let provider = await modal();
//     const accounts = await provider.listAccounts();
//     if (accounts) {
//       let value = await checkApprove(accounts[0],privateAddress);
//       console.log(value.toString());
//       if (parseInt(value.toString()) > 0) setStatus(true);
//       else setStatus(false);
//       return status;
//     }
//   };

//   const handleApprove = async () => {
//     let bool = await handleCheckApprove();
//     console.log(bool);
//     if (!bool) {
//       let res = await approve(privateAddress);
//       let confirmation = res.wait();
//       if (confirmation.blockNumber) setStatus(true);
//     }
//   };
//   const handleDeposit = async () => {
//     let bool = await handleCheckApprove();
//     console.log(bool);
//     if (bool && value>=10) {
//       // if(handleCheckApprove()){
//       getDeposit(value);
//     }
//   };

//   const handleInitialClaim = async()=>{
//     let provider = await modal();
//     const accounts = await provider.listAccounts();
//    if(accounts) {
//      let result = await claimInitialToken(accounts[0])
//      console.log(result)
//   }
// }
//   const handleClaim = async()=>{
//     let provider = await modal();
//     const accounts = await provider.listAccounts();
//    if(accounts) {
//       claimToken(accounts[0])
    
//   }
//   }

//   const handlecheckDeposit = async()=>{
//     // let provider = await modal();
//     // const accounts = await provider.listAccounts();
//   //  if(accounts) {
//     let sum = await checkDeposit()
//     // setDeposit(sum)
//   //  }
//   }

//   const handleBalance = async()=>{
//     let provider = await modal();
//     const accounts = await provider.listAccounts();
//    if(accounts) {
//     let sum = await checkBalance(accounts[0])
//     setBalance(sum)
//    }
//   }

//   const handleAmount = async()=>{
//     let provider = await modal();
//     const accounts = await provider.listAccounts();
//    if(accounts) {
//     let sum = await checkAmount(accounts[0])
//     setAmount(sum)
//    }
//   }
  
//   const handleAccountBalance = async()=>{
//     let provider = await modal();
//     const accounts = await provider.listAccounts();
//    if(accounts) {
//     let sum = await getAccountBalance(accounts[0])
//     setValue(sum)
//    }
//   }

//   useEffect(() => {
//     // handleCheckApprove();
//     handlecheckDeposit()
//     handleBalance()
//     handleAmount()
//   });
  
  let innerWidth = ((deposit/200000) *100).toString()
  let date = new Date(1653919200000) // live date

  const handleAmount = async()=>{
    // console.log(account)
      let data = await getUserDetails(account,provider)
    console.log(data)
    let subamt = ethers.utils.formatEther(data[0])
    setSubAmount(parseFloat(subamt*0.5).toFixed(2))
    let availamt = subamt - ethers.utils.formatEther(data[2])
    setAvailable(parseFloat(availamt).toFixed(2))
    // console.log(data)
  }

  useEffect(()=>{
    handleAmount()
  })
  return (
    <>
      <div className="el-main">
        <div className="ido-content">
          <div className="ido-detail">
            <div className="back">
              <div className="back-container">
                <Link
                  to="/Launchpad"
                  style={{ textDecoration: "none", color: "#9999b3" }}
                >
                  <span>&#32;&#60;&#32;Back</span>
                </Link>
              </div>
            </div>
            <div className="ido-container">
              <div className="ido-container-left">
                <div className="item1">
                  <div className="item-top">
                    <div className="idologo">
                      <img src={coinLogo} alt="logo" className="ido-logo" />
                    </div>
                  </div>
                  <div className="ido-desc line4hidden">
                  linkdao.network is a DeFi's, Cross-Chain Liquidity enabler network that allows its users to earn compound interest on their crypto holdings.
Through a set of investment strategies secured and enforced by smart contracts, LinkDao network automatically maximizes the user rewards 
from various liquidity pools (LPs),‌ ‌automated market making (AMM) projects,‌ ‌and‌ ‌other yield‌ farming ‌opportunities in the DeFi ecosystem.
                  </div>
                </div>
                <div className="ido-links">
                  <div className="ido-link-item">
                  <a href="https://linkdao.network/" className="href" target="_blank"><img
                      src={website}
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://twitter.com/LinkdaoN" className="href" target="_blank"><img
                      src={twitterb}
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://t.me/linkdao_network" className="href" target="_blank"><img
                      src={teleb}
                      alt=""
                    /></a>
                  </div>
                  <div className="ido-link-item">
                  <a href="https://medium.com/@linkdaonetwork" className="href" target="_blank"><img
                      src={mediumb}
                      alt=""
                    /></a>
                  </div>
                </div>
                <div className="cap">
                  <div className="soft-cap item-column">
                    <div className="cap-title column-title"> Soft Cap</div>
                    <div className="cap-value column-value"> 0 LKD </div>
                  </div>
                  <div className="hart-cap item-column">
                    <div className="cap-title column-title"> Hard Cap</div>
                    <div className="cap-value column-value"> 400,000 LKD </div>
                  </div>
                </div>
                <div className="supported-coin item-column">
                  <div className="coin-title column-title">
                    {" "}
                    Supported Coin{" "}
                  </div>
                  <div className="theme_color column-value"> BUSD </div>
                  <div className="exchange-rate column-value">
                    <span> 1 LKD = 0.50 BUSD / 1 BUSD = 2.00 LKD</span>
                  </div>
                </div>

                <div className="supported-coin item-column">
                  <div className="coin-title column-title"> Token Address </div>
                  {/* <div className="unit"> BUSD </div> */}
                  <div className="exchange-rate column-value">
                    <span className="theme_color">
                      {" "}
                      <a href="https://bscscan.com/address/0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F" style={{ textDecoration: "none", color: "#00E3C9" , lineBreak: 'anywhere'}} target="_blank">0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F</a>
                    </span>
                  </div>
                </div>
                <div className="item-column">
                  <div className="column-title" style={{marginBottom: '15px'}}> Allocation: <span className="amount_color">10-25,000 BUSD</span><br/> </div>
                  <div className="column-title"> Lock-up rules </div>
                  <div className="column-value">
                    <span style={{ lineHeight: "1.5px" }}>
                      
                      {/*Vesting time and rules:*/}
                      
                      Private Round - 10% unlocked at TGE. The rest 90% will be unlocked monthly in the next 6 months.
                    </span>
                  </div>
                </div>

                <div className="item-column">
                  <div className="column-title"> Project Introduction </div>
                  <div className="column-value">
                  LinkDao is a Decentralized Finance (DeFi) Yield Optimizer project, that allows its users to make more crypto with crypto. 
                  DeFi applications are unique in the sense that they are permission less and trustless, meaning that anyone with a supported wallet can interact 
                  with them without the need for a trusted middlemen. LinkDao caters its users by making it easy to get a yield on their crypto capital in a safe and 
                  decentralized manner. Through a set of smart contracts and several investment strategies, LinkDao automatically maximizes the user rewards from various 
                  liquidity pools (LPs), automated market making (AMM) projects, and other yield farming opportunities in the DeFi ecosystem. This provides a huge advantage 
                  over attempting to do this manually yourself. LinkDao up those yields!
                    <br />
                    <br />
                    Token information
                    <br />
                    Type: BEP20
                    <br />
                    Ticker: LKD
                    <br />
                    Total supply: 10,000,000 (fixed)
                    <br />
                    Initial circulating supply: 550,000 LKD
                    <br />
                    Initial Circulating market cap: $412,500
                    <br />
                    Fully diluted market cap: $7,500,000
                    <br />
                    <br />
                    <span className="text_white">TOKENOMICS</span><br />
                    Seed Round: $0.25 - 10% unlocked at TGE. The rest 90% will be unlocked monthly in the next 9 months.
                    <br />
                    Private Round: $0.50 - 10% unlocked at TGE. The rest 90% will be unlocked monthly in the next 6 months. 
                    <br />
                    Public Round: $0.75 - 20% unlocked at TGE. The rest 80% will be unlocked monthly in the next 4 months.
                    <br />
                    <br />
                    <span className="text_white">DEX Listing:</span> Pancakeswap
                    <br />
                    <span className="text_white">CEX Listing:</span> BitMart, LBANK
                    <br />
                    <br />
                  </div>
                </div>
                <div className="harvestDesc"></div>
              </div>
              <div className="ido-container-right">
                <div className="left">
                  <img src={coinLogo} alt="" className="logo" />
                  <div>
                    <div className="ido-tags">
                      <div className="status" style={{backgroundColor:"rgb(177, 33, 33)"}}><div className="perch_detail moving_image">
                            <div className="perch_center_detail"></div>
                          </div>
                        <span>Ended</span>
                      </div>
                      <div className="chain-info">
                        <img src="" alt="" />
                        <div className="chain-name"> BSC </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="top-div">
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Time</div>
                        <div className="amount-value">
                          <div className="start-time time">
                          <div className="perch"><div className="perch-center"></div></div>
                            2022.05.30 02:00 PM UTC
                          </div>
                          <div className="end-time time">
                            2022.04.12 09:00 AM UTC
                          </div>
                        </div>
                        
                        <div className="amount-title" style={{marginTop: '25px'}}>Progress</div>
                      <div className="amount-value">
                        <div className="progress-desc">
                          <span> {deposit} BUSD</span>
                          <span> 200,000 BUSD</span>
                        </div>
                        <div className="progress-plan progress-status2">
                          <div
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            className="el-progress el-progress--line is-success el-progress--without-text"
                          >
                            <div className="el-progress-bar">
                              <div
                                className="el-progress-bar__outer"
                                // style="height: 12px;"
                              >
                                <div
                                  className="el-progress-bar__inner" style= {{width:innerWidth+'%'}}
                                  // style="width: 100%; background-color: rgb(51,51,75);"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <p className="ido-time" style={{display: 'none'}}>
                            <span> 00 Days 20:34:25</span>
                          </p>
                        </div>
                      </div>
                      {/* <div className="amount-title" style={{marginTop:'25px'}}>Time to Live</div>
                        <div className="amount-value">
                          <div className="start-time time ttl">
                          <Countdown date={Date.parse(date)} />
                          </div>
                        </div> */}
                      </div>
                      <div className="amount-title"  style={{marginTop: '25px'}}>My subscription amount
                        <div className="amount-value">{subAmount}</div>
                      </div>
                      <div className="amount-title"  style={{marginTop: '25px'}}>Available LKD
                        <div className="amount-value">{available}</div>
                      </div>
                      {status ? (
                        <>
                        <div className="amount-title"  style={{marginTop: '25px'}}>BUSD</div>
                        <div className="ct1-input">
                          <input type="text" placeholder="Enter deposit amount" value={value} onChange={e=>setValue(e.target.value)} />
                          {/* <span onClick={handleAccountBalance} className="ct1-max"> */}
                          <span className="ct1-max">
                             MAX</span>
                        </div>
                        {/* <div className="approve" onClick={handleDeposit} > */}
                        <div className="approve" style={{background:"rgb(122, 119, 110)"}}>
                          Deposit
                        </div>
                        {/* <div className="claim_box"/> */}
                          {/* <div className="claim" onClick={handleInitialClaim}> */}
                          {/* <div className="claim" style={{background:"rgb(122, 119, 110)"}}>
                            TGE Claim
                          </div> */}
                        {/* <div className="approve" onClick={()=>claimALL(provider)}> */}

                        {/* <div className="claim" onClick={handleClaim} style={{background:"rgb(122, 119, 110)"}}> */}
                        <div className="approve" style={{background:"rgb(122, 119, 110)"}}>
                            Claim
                          </div>
                          {/* </div> */}
                          
                          
                          
                          </>
                      ) : (
                        // <div className="approve" onClick={handleApprove}>
                        <div className="approve disabled" >
                          Approve
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Private;
