import React from 'react';
import { FaMediumM , FaTelegramPlane } from 'react-icons/fa';
import { FiTwitter , FiGithub } from 'react-icons/fi';
import { SiGitbook } from "react-icons/si";
// import { SiDiscord } from 'react-icons/si';
import Coin from '../../images/coin.svg';
import github from '../../images/github.png'
import medium from '../../images/medium.png'
import twitter from '../../images/twitter.png'
import MetaMask from '../../images/MetaMask.png'
import telegram from '../../images/telegram.png'
import docs from '../../images/docs.png'
// import Pancake from '../../images/pancake.svg'
import Blocksafu from '../../images/BlockSafu.png'

import './Footer.css';

const Footer = () => {
  return (
    <div className="el-footer">
        <div className="footer">
            <div className="footer-container">
                <div className='footerDiv'>
                    {/* <p className="title1"> Help <span></span> </p> */}
                   <div className="fssf01"> 
                        <div className='fssf02'>
                            <img src={Coin} alt="" className="fssf03" />
                            <div className='fssf13'>
                                <p className="fssf04">LKD</p>
                                <p className="fssf05">$ 0.74162</p>
                            </div>
                        </div>
                        <button href="" className="fssf06 fssf07"><img src={MetaMask} alt="" className="metaimg" />Add To Metamask</button>
                        <div className="fssf09"><button href="https://pancakeswap.finance/swap?inputCurrency=0xaf027427dc6d31a3e7e162a710a5fe27e63e275f" className="fssf10">Buy LKD</button></div>                    
                    </div>
                </div>
                <div className='footerDiv fssf12'>
                    <p className="title2"> Social <span></span></p>
                    <div className="community pc-community">
                        <div className="community-line">
                            <div className="community-item">
                            <a href="https://twitter.com/LinkdaoN" className="href" target="_blank"><FiTwitter/>
                                <span> Twitter </span></a>
                            </div>
                            <div className="community-item drop_down_btn">
                            <a href="https://t.me/linkdao_network" className="href" target="_blank"><FaTelegramPlane/>
                                <span> Telegram </span></a> 
                            </div>
                            
                        </div>
                        <div className="community-line">
                            <div className="community-item">
                            <a href="https://medium.com/@linkdaonetwork" className="href" target="_blank"><FaMediumM/>
                                <span> Medium </span></a>
                            </div>
                            <div className="community-item">
                            <a href="https://linkdao-network.gitbook.io/linkdao/" className="href" target="_blank"><SiGitbook/>
                                <span> Docs </span></a>
                            </div>
                            <div className="community-item">
                            <a href="https://github.com/linkdaonetwork" className="href" target="_blank"><FiGithub/>
                                <span> Github </span></a>
                            </div>
                            
                            
                        </div>
                    </div>
                    
                    
                    <div className="community h5-community">
                        
                            <div className="community-item">
                                <a href="https://twitter.com/LinkdaoN" className="href" target="_blank"><img src={twitter} alt="" className="src" /></a>
                                
                            </div>
                            <div className="community-item">
                            <a href="https://t.me/linkdao_network" className="href" target="_blank"><img src={telegram} alt="" className="src" /></a>
                                
                            </div>
                            <div className="community-item">
                            <a href="https://medium.com/@linkdaonetwork" className="href" target="_blank"><img src={medium} alt="" className="src" /></a>
                               
                            </div>
                            <div className="community-item">
                            <a href="https://linkdao-network.gitbook.io/linkdao/" className="href" target="_blank"><img src={docs} alt="" className="src" /></a>
                                
                            </div>
                            <div className="community-item">
                            <a href="https://github.com/linkdaonetwork" className="href" target="_blank"><img src={github} alt="" className="src" /></a>
                               
                            </div>
                    </div>

                    
                       
                </div>
                <div className="footerDiv contact-us">
                            <img src="https://linkdao.network/img/LinkdaoNameLogo.svg" alt="" />
                            <div className="contact"> Contact us: <a href="mailto:contact@linkdao.network" className="href">contact@linkdao.network</a></div>
                           

                    </div>
                
                    
            </div>

            <div className='fssf11'>
            <a href="https://blocksafu.com/detailindex/31" className="href"><img src={Blocksafu} alt="" className="fssf08" /></a>
            </div>
            <div className="downDiv">
                <div>
                    <span> Copyright @ 2022 . Linkdao Network All rights reserved</span>
                </div>
                <div>
                    <span>
                        <a href="" className="link-class">Terms of Service </a>
                        <a href="" className="link-class"> Privacy Policy </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer