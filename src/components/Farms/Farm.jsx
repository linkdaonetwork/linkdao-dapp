import React, { useState, useContext ,useEffect} from "react";
import "./Farms.css";
import "./../Private/Private.css";
import "./../Details/Details.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import ReactSlider from '../Slider'
import { NetworkContext } from "../../context/NetworkContext";
import { ConnectContext } from "../../context/ConnectContext";
import { approve,balance,checkApprove, getTvl } from "../../contracts/lps";
import { depositAmount, depositedAmt, harvest, harvestAmt, withdraw } from "../../contracts/farms";
import axios from 'axios'
// import { data } from "../../data/farms";

const Farm = ({ pair, apy, daily, network, img1, img2, address, abi,farm,farmABI }) => {
  const [isActive, setIsActive] = useState(false);
  const [account] = useContext(NetworkContext)
  const [provider] = useContext(ConnectContext)
  const [status,setStatus] = useState(false)
  const [deposit,setDeposit] = useState(0)
  const [withdrawAmt, setWithdrawAmt] = useState(0)
  const [deposited,setDeposited] = useState(0)
  const [wallet,setWallet] = useState(0)
  const [tvl,setTvl] = useState(0)
  const [price,setPrice] = useState(0)
  const [harvested,setHarvested] = useState(0)

  const handleApprove = async (address, abi) => {
    let res = await approve(provider, address, abi, farm)
    console.log(res)
  }

  const handleCheckApprove = async (address,abi) => {
    const accounts = await provider.listAccounts(); 
    if (accounts) {
      let value = await checkApprove(provider,address,abi,accounts[0],farm);
      if (parseInt(value.toString()) > 0) setStatus(true);
      else setStatus(false);
      return status;
    }
  };

  const handleDeposit = async(deposit)=>{
    await depositAmount(provider,farm,farmABI,deposit,account)
  }

  const handleHarvest = async()=>{
    await harvest(provider,farm,farmABI,account)
  }

  const handleWithdraw=async()=>{
    await withdraw(provider,farm,farmABI,withdrawAmt,account)
  }
  
  const handleDeposited=async(farm,farmABI)=>{
    let res = await depositedAmt(provider,farm,farmABI,account)
    setDeposited(res)
  }

  const handleWalletAmt = async(address,abi)=>{
    let res = await balance(provider,address,abi,account)
    setWallet(res)
  }

  const handleTvl = async(address,abi)=>{
    let res= await getTvl(provider,address,abi)
    setTvl(res)
  }

  const getBusdPrice = async()=>{
    let res = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BUSDUSDT')
    let price = res.data['price']
    setPrice(price)
  }

  const handleHarvested = async(farm,farmABI)=>{
    let res = await harvestAmt(provider,farm,farmABI,account)
    setHarvested(res)
  }
  
  useEffect(()=>{
    handleCheckApprove(address,abi)
    handleWalletAmt(address,abi)
    handleDeposited(farm,farmABI)
    handleTvl(address,abi)
    handleHarvested(farm,farmABI)
  })
  
  useEffect(()=>{
    getBusdPrice()
  },[price])

  return (
    <>
      <div className="Farm-main margin25" style={{ minHeight: '0px' }}>
        <div className="aido">
          <div style={{ marginBottom: "20px" }}>
            <div className="accordion">
              <div className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className="main">
                    <div className="token_info">
                      <div className="jss189">
                        <div className="jss310 jss190">
                          <img
                            src={img1}
                            alt=""
                            role="presentation"
                            className="jcss311"
                            width="100"
                            height="100"
                          />
                          <img
                            src={img2}
                            alt=""
                            role="presentation"
                            className="jcss311"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div className="jss202">
                          <div style={{ paddingTop: "15px" }}>{pair}</div>
                          <div style={{ fontSize: "10px", color: "grey" }}>
                            Uses: {network}
                          </div>
                          <div>Buy token Add Liquidity</div>
                        </div>
                      </div>
                    </div>
                    <div className="wallet_info jss213">
                      <div className="jss214">
                        <div className="jss204">
                          <div>{wallet}</div>
                          <div>Wallet</div>
                        </div>

                        <div className="jss204">
                          <div>{deposited}</div>
                          <div>Deposited</div>
                        </div>
                      </div>
                      <div className="jss214">
                      <div className="jss204">
                          <div>{harvested}</div>
                          <div>LKD Reward</div>
                        </div>
                        <div className="jss204">
                          <div>{apy}</div>
                          <div>APY</div>
                        </div>

                        
                      </div>
                      <div className="jss214">
                      <div className="jss204">
                          <div>{daily}</div>
                          <div>Daily</div>
                        </div>
                        <div className="jss204">
                          <div>${tvl*price}</div>
                          <div>TVL</div>
                        </div>
                        </div>


                    </div>
                  </div>
                  <div className="ml">
                    {isActive ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </div>
                </div>
                {isActive && (
                  <div className="accordion-content">
                    <div className="main001">
                      <div className="jss205">
                        <div className="ct1-input">
                          <input type="text" placeholder="0.0" value={deposit} onChange={(e)=>setDeposit(e.target.value)} />
                          {/* <span className="ct1-max"> MAX</span> */}
                        </div>
                        {/* <ReactSlider /> */}
                        <div className="claim_box">
                          {status 
                          ? <><div className="farm-claim"  onClick={()=>handleDeposit(deposit)}>Deposit</div> <div className="farm-claim" style={{background:"rgb(122, 119, 110)"}}>Approve</div></>
                          : <><div className="farm-claim" style={{background:"rgb(122, 119, 110)"}}>Deposit</div> <div className="farm-claim" onClick={() => handleApprove(address, abi)}>Approve</div></>
                          }
                        </div>
                      </div>

                      <div className="jss205 margin25">
                        <div className="ct1-input">
                          <input type="text" placeholder="0.0" value={withdrawAmt} onChange={e=>setWithdrawAmt(e.target.value)} />
                          {/* <span className="ct1-max"> MAX</span> */}
                        </div>
                        {/* <ReactSlider /> */}
                        <div className="claim_box">
                          <div className="farm-claim" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={()=>handleHarvest()}>Harvest</div>
                          <div className="farm-claim" onClick={()=>handleWithdraw()}>Withdraw</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farm;
