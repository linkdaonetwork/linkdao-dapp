import React, { useState } from "react";
import "./Farms.css";
import "./../Private/Private.css";
import "./../Details/Details.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import ReactSlider from '../Slider'
// import { data } from "../../data/farms";

const Farm = ({ pair, apy, daily, tvl, network, img1, img2 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* {data.map(({ pair, apy, daily, tvl, network, img1, img2 }) => {
        return ( */}
          <div className="Farm-main margin25" style={{minHeight:'0px'}}>
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
                              <div>0</div>
                              <div>Wallet</div>
                            </div>
        
                            <div className="jss204">
                              <div>0</div>
                              <div>Deposited</div>
                            </div>
                          </div>
                          <div className="jss214">
                            <div className="jss204">
                              <div>{apy}</div>
                              <div>APY</div>
                            </div>
        
                            <div className="jss204">
                              <div>{daily}</div>
                              <div>Daily</div>
                            </div>
                            <div className="jss204">
                              <div>{tvl}</div>
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
                              <input type="text" placeholder="0.0" value="" />
                              {/* <span className="ct1-max"> MAX</span> */}
                            </div>
                              <ReactSlider/>
                              <div className="claim_box">
                              <div className="approve fmsize">Approve</div>
                              </div>
                          </div>

                          <div className="jss205 margin25">
                            <div className="ct1-input">
                              <input type="text" placeholder="0.0" value="" />
                              {/* <span className="ct1-max"> MAX</span> */}
                            </div>
                              <ReactSlider/>
                            <div className="claim_box">
                              <div className="farm-claim" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Withdraw</div>
                              <div className="farm-claim">Withdraw All</div>
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
        {/* );
      })} */}
    </>
  );
};

export default Farm;
