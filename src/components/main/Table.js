import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import { MainContext } from '../context/MainProvider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const { cartItems } = React.useContext(MainContext)
  const [totalPrice,setTotalPrice] = React.useState(0)
  React.useEffect(()=>{
    let total = 0
     cartItems.forEach((ele)=>{
      total += Number(ele.price)
    })
    setTotalPrice(total)

  },[cartItems])
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avtar</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar  variant="square" src={row.image}  >
                  
                </Avatar>
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell >{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{padding:"10px",textAlign:"right"}} >Total  {totalPrice}</Box>
    </>
  );
}