import React from "react";
import Farm from "./Farm";
import { data } from "../../data/farms";

const Farms = () => {
  return (
    <>
      {data.map(({ pair, apy, daily, tvl, network, img1, img2 }) => {
        return (
          <Farm
            pair={pair}
            apy={apy}
            daily={daily}
            tvl={tvl}
            network={network}
            img1={img1}
            img2={img2}
          />
        );
      })}
    </>
  );
};

export default Farms;
