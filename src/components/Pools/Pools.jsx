import React from "react";
import Pool from './Pool'
import { data } from "../../data/pools";

const Pools = () => {
  return (
    <>
      {data.map(({ token, apr, tvl, img,pool,poolAbi,contract,month,limit,showAuditLog,depositOn }) => {
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
            limit={limit}
            showAuditLog={showAuditLog}
            depositOn={depositOn}
          />
        );
      })}
    </>
  );
};

export default Pools