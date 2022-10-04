import React from "react";
import Farm from "./Farm";
import { data } from "../../data/farms";

const Farms = () => {
  return (
    <>
      {data.map(({ pair, apy, daily, network, img1, img2,address,abi,farm,farmABI,token },index) => {
        return (
        //  <div style={{paddingBottom:'25px'}}> 
          <Farm
            key={index}
            pair={pair}
            apy={apy}
            daily={daily}
            network={network}
            img1={img1}
            img2={img2}
            address={address}
            abi={abi}
            farm={farm}
            farmABI={farmABI}
            token={token}
          />
          // </div>
        );
      })}
    </>
  );
};

export default Farms;
