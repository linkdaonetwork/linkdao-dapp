import React, { useState, useEffect, useContext, useRef } from "react";
// import Logo from "../../images/logo.svg";
// import MobileLogo from "../../images/logo-icon.png";
import Dots from "../../images/dots.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import modal, { web3Modal } from "../../modal";
import { NetworkContext } from "../../context/NetworkContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [instance, setInstance] = useState();
  const [provider, setProvider] = useState();
  const [error, setError] = useState();
  const [account, setAccount] = useContext(NetworkContext);
  const [modalMobile, showModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  let breakpoint = 1000;

  const ref = useRef();
  useOnClickOutside(ref, () => showModal(false));

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const connectWallet = async () => {
    try {
      console.log("Wallet connect called");
      const instance = await web3Modal().connect();
      setInstance(instance);
      let provider = await modal();
      setProvider(provider);
      const accounts = await provider.listAccounts();
      if (accounts) {
        setAccount(accounts[0]);
        // window.location.reload();
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  const refreshState = () => {
    setAccount();
  };

  const disconnectWallet = async () => {
    try {
      console.log("Wallet disconnect called");
      await web3Modal().clearCachedProvider();
      refreshState();
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (web3Modal().cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (instance?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnectWallet();
      };

      instance.on("accountsChanged", handleAccountsChanged);
      instance.on("disconnect", handleDisconnect);

      return () => {
        if (instance.removeListener) {
          instance.removeListener("accountsChanged", handleAccountsChanged);
          instance.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [instance]);

  useEffect(()=>{
    const handleLogo = ()=> setWidth(window.innerWidth)
    window.addEventListener('resize',handleLogo)
    return ()=>window.removeEventListener('resize',handleLogo)
  },[])

  const flipNav = () => {
    showModal(!modalMobile);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="nav-logo">
            {width < breakpoint ? (
              <img
                src="https://linkdao.network/img/LinkdaoLogo.svg"
                alt="Logo"
                className="header-left-logo"
              />
            ) : (
              <img
                src="https://linkdao.network/img/LinkdaoNameLogo.svg"
                alt="Logo"
                className="header-left-logo"
              />
            )}
          </Link>
          <div className="nav">
            <div className="n-item n-margin">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Launchpad
              </Link>
            </div>
            <div className="n-item n-margin">
              <Link to="/Farms" className="nav-link" onClick={closeMenu}>
                Farms
              </Link>
            </div>
            <div className="n-item n-margin">
              <Link to="/Pools" className="nav-link" onClick={closeMenu}>
                Pool
              </Link>
            </div>
            <div className="n-item n-margin">
              <Link to="/Airdrop" className="nav-link">
                Airdrop
              </Link>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="connect_button">
            {account ? (
              <button href="" className="connect" onClick={disconnectWallet}>
                Disconnect
              </button>
            ) : (
              <button href="" className="disconnect" onClick={connectWallet}>
                Connect
              </button>
            )}
          </div>
          <div className="more-nav" ref={ref}>
            <button style={{ backgroundColor: "transparent", border: "none" }}>
              <img src={Dots} alt="Nav" onClick={flipNav} />
            </button>
            {modalMobile?<ul id="nav-list" className="nav-list">
              <Link to="/" className="nav-link" onClick={flipNav}>
              <li className="n-item select-tab" >
                Launchpad
              <i className="iconfont icon-icons-launchpad"></i>
              </li>
              </Link>
                <Link to="/Farms" className="nav-link" onClick={flipNav}>
              <li className="n-item" >
                Farms
              </li>
                </Link>
              
               <Link to="/Pools" className="nav-link" onClick={flipNav}>
              <li className="n-item" >
                Pool
              </li>
               </Link>
              
               <Link to="/Airdrop" className="nav-link" onClick={flipNav}>
              <li className="n-item" >
                Airdrop
              </li>
              </Link>
            </ul>:null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
