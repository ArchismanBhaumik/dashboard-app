import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18',
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50',
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2559.36',
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3680.50',
  },
  {
    name: 'Marco Shoes',
    price: '$79.49',
    quantity: 64,
    amount: '$1965.81',
  },
  // ... other rows
];

export default function ProductTable() {
  return (
    <TableContainer component={Paper} >
        <h5 className='header-table'>Top Selling Products</h5>
      <Table aria-label="simple table table-bg-color">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}