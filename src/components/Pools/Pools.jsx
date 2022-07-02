import React from "react";
import Pool from './Pool'
import { data } from "../../data/pools";

const Pools = () => {
  return (
    <>
      {data.map(({ token, apy, daily, tvl, network, img }) => {
        return (
          <Pool
            token={token}
            apy={apy}
            daily={daily}
            tvl={tvl}
            network={network}
            img={img}
          />
        );
      })}
    </>
  );
};

export default Pools