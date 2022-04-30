import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('OLD ASS VEHICLE', 'Toyota', 'Camry', '212451aasd213', '$20,000'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const vehicles =[{value: 'Cars', label: 'Cars'},{value: 'Motorcycles', label: 'Motorcycles'},{value: 'Boats', label: 'Boats'},{value: 'Industrial', label: 'Industrial'}]

export default function BuyPage() {
    const [vehicle, setCurrency] = React.useState('Vehicle Type');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };

      const handleClick=(e)=>{
          e.preventDefault()
        await fetch("localhost:8080/vehicles",{
            method:"DELETE"
          }).then(()=>{
              console.log("Vehicle Deleted")
          })
        return await Response.json();
      }

  return (
      <p>
        <div>&nbsp;</div>
        <div>&nbsp;</div>

      <><div>
          <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={vehicle}
              onChange={handleChange}
              helperText="Please select type of vehicle"
          >
              {vehicles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                      {option.label}
                  </MenuItem>
              ))}
          </TextField>
          
      </div><Container>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell>Car Description</TableCell>
                              <TableCell align="right">Make</TableCell>
                              <TableCell align="right">Model&nbsp;</TableCell>
                              <TableCell align="right">VIN&nbsp;</TableCell>
                              <TableCell align="right">Price&nbsp;</TableCell>
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
                                  <TableCell align="right">{row.calories}</TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">{row.carbs}</TableCell>
                                  <TableCell align="right">{row.protein}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Container></></p>
  );
}



