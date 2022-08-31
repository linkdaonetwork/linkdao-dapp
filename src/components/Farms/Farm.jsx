import React, { useState, useContext ,useEffect,useCallback} from "react";
import "./Farms.css";
import "./../Private/Private.css";
import "./../Details/Details.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
/* import ReactSlider from '../Slider' */
import { NetworkContext } from "../../context/NetworkContext";
import { ConnectContext } from "../../context/ConnectContext";
import { approve,balance,checkApprove, getTvl } from "../../contracts/lps";
import { depositAmount, depositedAmt, harvest, harvestAmt, withdraw } from "../../contracts/farms";
import { getBusdPrice } from "../../utils";

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
  const [profit,setProfit] = useState(0)

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

  const handleBusdPrice = useCallback(async()=>{
    let price = await getBusdPrice()
    setPrice(price)
  },[])

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
    handleBusdPrice()
  },[handleBusdPrice])

  return (
    <>
      <div className="Farm-main margin25" style={{ minHeight: '0px' }}>
        <div className="aido">
          <div>
            <div className="accordion">
              <div className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className="main mainmb">
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
                          <div style={{fontSize:"smaller", color:"grey", paddingTop:"0.7rem"}}>
                            Uses: {network}
                          </div>
                          {/* <div><a href="#">Buy token</a> <a href="#">Add Liquidity</a></div> */}
                        </div>
                      </div>
                    </div>



                    <div className="blockfarm content_1000">
                      <div className="subblockfarm">
                        <div className="divfarm">
                          <div>{wallet} LP</div>
                          <div className="text_grey">Wallet</div>
                        </div>

                        <div className="divfarm">
                          <div>{deposited} LP</div>
                          <div className="text_grey">Deposited</div>
                        </div>
                      </div>
                      <div className="borderfarm marginh"></div>
                      <div className="subblockfarm">
                        <div className="divfarm">
                          <div>{harvested} LKD</div>
                          <div className="text_grey">LKD Reward</div>
                        </div>
                        <div className="divfarm">
                          {/* <div>{apy}</div> */}
                          <div>-</div>
                          <div className="text_grey">APY</div>
                        </div>
                      </div>
                      <div className="borderfarm marginh"></div>
                      <div className="subblockfarm">
                     
                        <div className="divfarm">
                          <div>${(tvl*price).toFixed(4)}</div>
                          <div className="text_grey">TVL</div>
                        </div>
                      </div>
                    </div>

                    <div className="wallet_info jss213 content_1001">
                      <div className="jss214">
                        <div className="jss204">
                          <div>{wallet} LP</div>
                          <div className="text_grey">Wallet</div>
                        </div>

                        <div className="jss204">
                          <div>{deposited} LP</div>
                          <div className="text_grey">Deposited</div>
                        </div>
                      </div>
                      <div className="jss214">
                        <div className="jss204">
                          <div>{harvested} LKD</div>
                          <div className="text_grey">LKD Reward</div>
                        </div>
                        <div className="jss204">
                          {/* <div>{apy}</div> */}
                          <div>-</div>
                          <div className="text_grey">APY</div>
                        </div>
                      </div>
                      <div className="jss214">
                      
                        <div className="jss204">
                          <div>${(tvl*price).toFixed(3)}</div>
                          <div className="text_grey">TVL</div>
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
                    <div className="borderfarm"></div>
                    <div className="main001">
                      <div className="jss205">
                        <div className="ct1-inputfarm">
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
                        <p className="text_grey fsmall margin25 text_center">Approve one time to enable deposit button.</p>
                        <p className="text_grey fsmall text_center">Deposit fee 0%</p>
                      </div>

                      <div className="jss205 margintop25 flex16">
                        <div className="ct1-inputfarm">
                        <p>LKD Earned</p>
                            <p style={{fontSize:'1.9rem'}}>{profit}</p>
                            <p style={{marginTop:"5px",fontSize:"smaller", color:"#9a9ab4"}}>${parseFloat(price*profit).toFixed(3)}</p>
                          {/* <span className="ct1-max"> MAX</span> */}
                        </div>
                        {/* <ReactSlider /> */}
                        
                        <div className="farm-claim width100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={()=>handleHarvest()}>Harvest</div>
                        <p className="text_grey fsmall margin25 text_center">Withdraw LKD reward</p>
                        <p className="text_grey fsmall text_center">Harvest fee 0%</p>
                        </div>
                        
                        
                        <div className="jss205 margintop25 flex16">
                        <div className="ct1-inputfarm">
                          <input type="text" placeholder="0.0" value={withdrawAmt} onChange={e=>setWithdrawAmt(e.target.value)} />
                          {/* <span className="ct1-max"> MAX</span> */}
                        </div>
                        {/* <ReactSlider /> */}
                        <div className="farm-claim width100" onClick={()=>handleWithdraw()}>Withdraw</div>
                         
                        <p className="text_grey fsmall margin25 text_center">Withdraw LP tokens +  Pending LKD reward</p>
                        
                        <p className="text_grey fsmall text_center">Withdraw fee 0%</p>
                        </div>




                      
                      <div className="jss2052 margintop25">
                      <div className="ct1-input">
                          <p className="text_grey fs1vw">Buy token <FiExternalLink style={{color:"#00e2c8"}} className="v_align1"/></p>
                          <p className="text_grey fs1vw">Get {pair} <FiExternalLink style={{color:"#00e2c8"}} className="v_align1"/></p>
                          <p className="text_grey fs1vw">View Contract <FiExternalLink style={{color:"#00e2c8"}} className="v_align1"/></p>
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
