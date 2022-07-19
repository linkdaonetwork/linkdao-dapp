import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Private from "./components/Private/Private";
import Footer from "./components/Footer/Footer";
import Launchpad from "./components/Launchpad/Launchpad";
import Navbar from "./components/Navbar/Navbar";
import Airdrop from "./components/Airdrop/Airdrop";
import Farms from "./components/Farms/Farms";
import Pools from "./components/Pools/Pools";
import { NetworkProvider } from "./context/NetworkContext";
import { ConnectProvider } from "./context/ConnectContext";
import Public from "./components/Public/Public";

const App = () => {
  return (
    <BrowserRouter>
      <NetworkProvider>
        <ConnectProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Launchpad />} />
            <Route path="/details" element={<Details />} />
            <Route path="/Private" element={<Private />} />
            <Route path="/Public" element={<Public />} />
            <Route path="/Airdrop" element={<Airdrop />} />
            <Route path="/Farms" element={<Farms />} />
            <Route path="/Pools" element={<Pools />} />
          </Routes>
          <Footer />
        </ConnectProvider>
      </NetworkProvider>
    </BrowserRouter>
  );
};

export default App;
