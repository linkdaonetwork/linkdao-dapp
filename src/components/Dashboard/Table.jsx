import { useState, useContext } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { totalStakedFunc } from "../../contracts/pools";
import { ConnectContext } from '../../context/ConnectContext';
import "./Table.css"
import { useEffect } from 'react';

export default function BasicTable({ token, address, pool, poolABI,price }) {
  const [totalStaked, setTotalStaked] = useState(0)
  const [provider] = useContext(ConnectContext)

  const handleTotalStaked = async () => {
    let res = await totalStakedFunc(provider, pool, poolABI)
    console.log(res)
    setTotalStaked(res)
  }

  useEffect(() => {
    handleTotalStaked()
  })

  return (
    <TableRow
      key={token}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {token}
      </TableCell>
      <TableCell style={{ lineBreak: 'anywhere' }}>{address}</TableCell>
      <TableCell className='_center'>${parseFloat(price*totalStaked).toFixed(3)}</TableCell>

    </TableRow>

  );
}
