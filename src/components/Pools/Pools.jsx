import React from "react";
import Pool from './Pool'
import { data } from "../../data/pools";

const Pools = () => {
  return (
    <>
      {data.map(({ token, apr, tvl, img,pool,poolAbi,contract,month }) => {
        return (
          <Pool
            token={token}
            apr={apr}
            tvl={tvl}
            img={img}
            pool={pool}
            poolABI={poolAbi}
            contract={contract}
            month={month}
          />
        );
      })}
    </>
  );
};

export default Pools