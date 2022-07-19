import Web3Modal from "web3modal";
import providerOptions from "./providerOptions";

const web3Modal = () =>
  new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
    // theme: "dark",
  });

// let modal = async () => {
//   const instance = await web3Modal().connect();
//   const provider = new ethers.providers.Web3Provider(instance);
  
//   return provider;
// };

// export default modal;
export default web3Modal
