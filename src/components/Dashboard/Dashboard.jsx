import React, { useState, useCallback, useEffect, useContext } from "react";
import "./Dashboard.css";
import { getCirculatingSupply, getHoldings, getPrice } from "../../utils";
import { ConnectContext } from "../../context/ConnectContext";
import { data } from "../../data/pools";
import { totalStakedFunc } from "../../contracts/pools";
import BasicTable from "./Table";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

const Dashboard = () => {
  const [price, setPrice] = useState(0);
  const [supply, setSupply] = useState(0);
  const [staked, setStaked] = useState(0);
  const [provider] = useContext(ConnectContext);
  const [holders, setHolders] = useState(0);

  const handlePrice = useCallback(async () => {
    let pr = await getPrice();
    setPrice(pr);
  }, []);

  const handleSupply = useCallback(async () => {
    let pr = await getCirculatingSupply();
    setSupply(pr);
  }, []);

  const handleTotalStaked = useCallback(async () => {
    let stk = data.map(async ({ pool, poolAbi }) => {
      let res = await totalStakedFunc(provider, pool, poolAbi);
      return res;
    });
    let v1 = stk.reduce(async (v1, v2) => {
      let a = await v1;
      let b = await v2;
      return parseFloat(a) + parseFloat(b);
    }, 0);
    v1.then((res) => {
      setStaked(res);
    });
  }, [provider]);

  const handleHolders = useCallback(async () => {
    let pr = await getHoldings();
    setHolders(pr);
  }, []);

  useEffect(() => {
    handlePrice();
    handleTotalStaked();
    handleSupply();
    handleHolders();
  }, [handlePrice, handleSupply, handleTotalStaked, handleHolders]);

  return (
    <>
      <div className="fssd01">
        <div className="fssd02">
          <div className="fssd03">10,000,000.00</div>
          <div className="fssd04">LKD Total Supply</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">{supply}</div>
          <div className="fssd04">LKD Circulating Supply</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">$ {parseFloat(price).toFixed(5)}</div>
          <div className="fssd04">LKD Price</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">$ {(10000000 * price).toFixed(3)}</div>
          <div className="fssd04">Fully Diluted Market Cap</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">{holders}</div>
          <div className="fssd04">LKD Holders</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">{staked}</div>
          <div className="fssd04">LKD Staked</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">$ {(price * staked).toFixed(3)}</div>
          <div className="fssd04">Total Value Locked</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">0</div>
          <div className="fssd04">Active Farms</div>
        </div>

        <div className="fssd02">
          <div className="fssd03">{data.length}</div>
          <div className="fssd04">Active Pool</div>
        </div>
      </div>
      <div className="fssd05">
        <TableContainer component={Paper}>
          <Table sx={{ Width: '95%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Farms/Pools</TableCell>
                <TableCell className='width640'>Address</TableCell>
                <TableCell>TVL</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(({ token, address, pool, poolAbi}) => {
                return <BasicTable token={token} address={address} pool={pool} poolABI={poolAbi} price={price} />
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Dashboard;
