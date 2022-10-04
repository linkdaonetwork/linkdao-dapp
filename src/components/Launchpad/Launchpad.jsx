import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coin from "../../images/LKD.svg";
import noItem from "../../images/no_item.png";
import "./Launchpad.css";
import { privateABI, seedABI, publicABI } from "../../abi";
import { ethers } from 'ethers'
import { address, privateAddress, publicAddress } from '../../address'
// import Countdown from "react-countdown";
import BSC from '../../images/BSC.png'
import { useContext } from "react";
import { ConnectContext } from "../../context/ConnectContext";



const Launchpad = () => {
  // let address = "0x1868819e052D2daA9a9e770AdB9e175188343971"
  const [toggleState, setToggleState] = useState(1);
  // const [contract,setContract] = useState()
  const [deposit, setDeposit] = useState(100000)
  const [privateDeposit, setPrivateDeposit] = useState(200000)
  const [publicDeposit, setPublicDeposit] = useState(0)
  const [provider] = useContext(ConnectContext)

  const toggleTab = (index) => {
    setToggleState(index);
  }

  useEffect(() => {
    async function handleContract() {
      // let provider = await modal()
      let contract = new ethers.Contract(address, seedABI, provider)
      let contract2 = new ethers.Contract(privateAddress, privateABI, provider)
      let contract3 = new ethers.Contract(publicAddress, publicABI, provider)
      // console.log(contract)
      // setContract(contract)
      let deposit = await contract.totalDeposit()
      let deposit2 = await contract2.totalDeposit()
      let deposit3 = await contract3.totalDeposit()
      deposit = deposit.toString()
      deposit2 = deposit2.toString()
      deposit3 = deposit3.toString()
      // console.log(ethers.utils.formatUnits(deposit,18))
      setDeposit(parseInt(ethers.utils.formatUnits(deposit, 18)))
      // setPrivateDeposit(parseInt(ethers.utils.formatUnits(deposit2, 18)))
      setPublicDeposit(parseInt(ethers.utils.formatUnits(deposit3, 18)))
    }
    handleContract()
  }, [provider])

  // console.log(deposit)

  // let contract = new ethers.contract(address,seedABI,provider)
  let innerWidth = (100).toString()
  let innerWidth2 = ((privateDeposit / 100000) * 100).toString()
  let innerWidth3 = ((500000/ 500000) * 100).toString()
  let date = new Date(1653919200000) // live date
  return (
    <>
      <div className="el-main">
        <div className="ido">
          <div className="tabs-container">
            <div className="tabs">
              <div className={toggleState === 1 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(1)}>Live [0]</div>
              <div className="line-perch"></div>
              <div className={toggleState === 2 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(2)}>Upcoming [0]</div>
              <div className="line-perch"></div>
              <div className={toggleState === 3 ? "tab-pan is-active" : "tab-pan"} onClick={() => toggleTab(3)}>Ended [3]</div>
            </div>
          </div>
          <div className="list">
            {/* Item 1 */}
            <div className={toggleState === 3 ? "item" : "no-item"}>
              <div className="item-container">
                <div className="left" style={{ flexDirection: 'row' }}>
                  <img
                    src={Coin}
                    alt="logo"
                    className="logo"
                  />
                  <div className="chain-info">
                    <img
                      src={BSC}
                      alt=""
                      className="chain-logo"
                    />
                    <div className="chain-name">BSC</div>
                  </div>
                </div>
                <div className="right">
                  <div className="top-div">
                    <p className="ido-name">Linkdao Seed Round</p>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Price</div>
                        <div className="amount-value">
                          {" "}
                          1 LKD = 0.25 BUSD / 1 BUSD = 4.00 LKD
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title"> Soft/Hard Cap</div>
                        <div className="amount-value">
                          <span>0 LKD - </span>
                          <span>400,000 LKD</span>
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title"> Time </div>
                        <div className="amount-value">
                          <div className="start-time time">
                            <div className="perch">
                              <div className="perch-center"></div>
                            </div>
                            2022.04.12 09.00 AM UTC
                          </div>
                          <div className="end-time time">
                            {/* <div className="perch">
                            <div className="perch-line"></div>
                            <div className="perch-center"></div>
                          </div> */}
                            04.01 09.00 2022 UTC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Progress</div>
                        <div className="amount-value">
                          <div className="progress-desc">
                            <span> {deposit} BUSD</span>
                            <span> 100,000 BUSD</span>
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
                                    className="el-progress-bar__inner" style={{ width: innerWidth + '%' }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <p className="ido-time" style={{ display: 'none' }}>
                              <span> 00 Days 20:34:25</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button-div">
                      <div className="ido-with-whitelist">
                        <div className="ido-btn-detail linear-btn">
                          <Link to="/details" style={{ textDecoration: 'none' }}>
                            <div className="ido-btn-white-list"> Details </div>
                          </Link>

                        </div>
                        {/* <div className="ido-btn-detail shake-shake linear-btn">
                        Details
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            {/* <div className={toggleState === 1 ? "item" : "no-item"}>
            
          
         
          </div> */}
            {/* Item 2 End */}
            <div className={toggleState === 3 ? "item" : "no-item"}>

              <div className="item-container">
                <div className="left" style={{ flexDirection: 'row' }}>
                  <img
                    src={Coin}
                    alt="logo"
                    className="logo"
                  />
                  <div className="chain-info">
                    <img
                      src={BSC}
                      alt=""
                      className="chain-logo"
                    />
                    <div className="chain-name">BSC</div>
                  </div>
                </div>
                <div className="right">
                  <div className="top-div">
                    <p className="ido-name">Linkdao Private Round</p>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Price</div>
                        <div className="amount-value">
                          {" "}
                          1 LKD = 0.50 BUSD / 1 BUSD = 2.00 LKD
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title"> Soft/Hard Cap</div>
                        <div className="amount-value">
                          <span>0 LKD - </span>
                          <span>400,000 LKD</span>
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title"> Time </div>
                        <div className="amount-value">
                          <div className="start-time time">
                            <div className="perch">
                              <div className="perch-center"></div>
                            </div>
                            2022.05.30 02.00 PM UTC
                          </div>
                          <div className="end-time time">
                            {/* <div className="perch">
                            <div className="perch-line"></div>
                            <div className="perch-center"></div>
                          </div> */}
                            04.01 09.00 2022 UTC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Progress</div>
                        <div className="amount-value">
                          <div className="progress-desc">
                            <span> {privateDeposit} BUSD</span>
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
                                    className="el-progress-bar__inner" style={{ width: innerWidth2+'%' }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <p className="ido-time" style={{ display: 'none' }}>
                              <span> 00 Days 20:34:25</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="amount-title">Time to Live</div>
                    <div className="amount-value">
                      <div className="start-time time ttl">
                        <Countdown date={Date.parse(date)} />
                      </div>
                    </div> */}
                    <div className="button-div">
                      <div className="ido-with-whitelist">
                        <div className="ido-btn-detail linear-btn">
                          <Link to="/Private" style={{ textDecoration: 'none' }}>
                            <div className="ido-btn-white-list"> Details </div>
                          </Link>

                        </div>
                        {/* <div className="ido-btn-detail shake-shake linear-btn">
                        Details
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className={toggleState === 3 ? "item" : "no-item"}>

              <div className="item-container">
                <div className="left" style={{ flexDirection: 'row' }}>
                  <img
                    src={Coin}
                    alt="logo"
                    className="logo"
                  />
                  <div className="chain-info">
                    <img
                      src={BSC}
                      alt=""
                      className="chain-logo"
                    />
                    <div className="chain-name">BSC</div>
                  </div>
                </div>
                <div className="right">
                  <div className="top-div">
                    <p className="ido-name">Linkdao Public Round</p>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Price</div>
                        <div className="amount-value">
                          {" "}
                          1 LKD = 0.75 BUSD / 1 BUSD = 1.33 LKD
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title"> Soft/Hard Cap</div>
                        <div className="amount-value">
                          <span>0 LKD - </span>
                          <span>666,667 LKD</span>
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title"> Time </div>
                        <div className="amount-value">
                          <div className="start-time time">
                            <div className="perch">
                              <div className="perch-center"></div>
                            </div>
                            2022.07.14 06.00 AM UTC
                          </div>
                          <div className="end-time time">
                            {/* <div className="perch">
                            <div className="perch-line"></div>
                            <div className="perch-center"></div>
                          </div> */}
                            04.01 09.00 2022 UTC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="amount-container">
                      <div className="amount color3">
                        <div className="amount-title">Progress</div>
                        <div className="amount-value">
                          <div className="progress-desc">
                            <span> 500000 BUSD</span>
                            <span> 500,000 BUSD</span>
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
                                    className="el-progress-bar__inner" style={{ width: innerWidth3+'%' }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <p className="ido-time" style={{ display: 'none' }}>
                              <span> 00 Days 20:34:25</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="amount-title">Time to Live</div>
                    <div className="amount-value">
                      <div className="start-time time ttl">
                        <Countdown date={Date.parse(date)} />
                      </div>
                    </div> */}
                    <div className="button-div">
                      <div className="ido-with-whitelist">
                        <div className="ido-btn-detail linear-btn">
                          <Link to="/Public" style={{ textDecoration: 'none' }}>
                            <div className="ido-btn-white-list"> Details </div>
                          </Link>

                        </div>
                        {/* <div className="ido-btn-detail shake-shake linear-btn">
                        Details
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className={toggleState === 2 ? "empty-item" : "no-item"}>

              <img src={noItem} style={{ width: '85%' }} />
              <p>No data yet </p>

            </div>
            <div className={toggleState === 1 ? "empty-item" : "no-item"}>

              <img src={noItem} style={{ width: '85%' }} />
              <p>No data yet </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Launchpad;
