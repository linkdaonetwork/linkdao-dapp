import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

function createData(name, address, tvl) {
  return { name, address, tvl};
}

const rows = [
  createData('Recurring Pool A','0x68B7Ee70Ab8c692605F0f2345008398c0Ec1A20B','-'),
  createData('Recurring Pool B','0xd4769eB0cca4d29af46361052b55767e016Df956','-'),
  createData('Recurring Pool S24','0xed9a44c2a15Cda8f71AaBef6d11D10F377cB7200','-'),
  
];

export default function BasicTable() {
  return (
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{lineBreak:'anywhere'}}>{row.address}</TableCell>
              <TableCell className='_center'>{row.tvl}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
