import React, { useState } from "react";
import "./Pool.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import ReactSlider from '../Slider'

const Pool = ({ token, apy, daily, tvl, network, img }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {/* {data.map(({ token, apy, daily, tvl, network, img }) => {
        return (
          // Write html below */}
          <div>
            <div className="pool-main">
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
                            <div className="jssp189">
                              <div className="jssp310 jssp190">
                                <img
                                  src={img}
                                  alt=""
                                  role="presentation"
                                  className="jcssp311"
                                  width="100"
                                  height="100"
                                />
                              </div>
                              <div className="jssp202">
                                <div style={{ paddingTop: "15px" }}>
                                  {token}
                                </div>
                                <div
                                  style={{ fontSize: "10px", color: "grey" }}
                                >
                                  Uses: {network}
                                </div>
                                <div>Buy token</div>
                              </div>
                            </div>
                          </div>
                          <div className="wallet_info jssp213">
                            <div className="jssp214">
                               <div className="jssp204">
                                 <div>0</div>
                                 <div>Wallet</div>
                               </div>
                                <div className="jssp204">
                                 <div>0</div>
                                 <div>Deposited</div>
                               </div>
                            </div>
                            <div className="jssp214">
                               <div className="jssp204">
                                 <div>{apy}</div>
                                 <div>APY</div>
                               </div>
                             <div className="jssp204">
                                 <div>{daily}</div>
                                 <div>Daily</div>
                               </div>
                             <div className="jssp204">
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
                            <div className="jssp205">
                              <div className="ct1-input">
                                <input type="text" placeholder="0.0" value="" />
                                {/* <span className="ct1-max"> MAX</span> */}
                              </div>
                              <ReactSlider/>
                              <div className="claim_box">
                              <div className="approve fmsize">Approve</div>
                              </div>
                            </div>

                            <div className="jssp205 margin25">
                              <div className="ct1-input">
                                <input type="text" placeholder="0.0" value="" />
                                {/* <span className="ct1-max"> MAX</span> */}
                              </div>
                              <ReactSlider/>
                              <div className="claim_box">
                                <div className="pool_claim" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Withdraw</div>
                                <div className="pool_claim">Withdraw All</div>
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
          </div>
        {/* );
      })} */}
    </div>
  );
};

export default Pool
