import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Container, Paper, Button, Select, MenuItem, CardHeader } from '@mui/material';

export default function InputAdornments() {
  const vType = ["Car", "Truck", "MotorCycle", "RV"];
  const [value, setValue] = React.useState("");
  const [VIN, setVIN] = React.useState("");
  const [color, setColor] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [body, setBody] = React.useState("");
  const [vehicleType, setVehicleType] = React.useState("");
  const [towCapacity, setTowCapacity] = React.useState("");
  const [motorcycleType, setMotorcycleType] = React.useState(null);
  const [waterCapacity, setWaterCapacity] = React.useState("");
  const handleChange = e => setValue(e.target.value)

  const handleClick=(e)=>{
    e.preventDefault()
    const vehicle={VIN, price, make, model, body, color, vehicleType, towCapacity, motorcycleType, waterCapacity}
    console.log(vehicle)
    fetch("https://agile-taiga-94360.herokuapp.com/vehicle",{
       mode:'cors',
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({
        "price": price,
        "make": make,
        "model": model,
        "body": body,
        "color": color,
        "vehicleType": vehicleType,
        "towCapacity": towCapacity,
        "motorcycleType": motorcycleType,
        "waterCapacity": waterCapacity,
        "vehicleVIN": VIN,
       })
   })
  .then(()=>{
    console.log("Vehicle is now up for Sale!!!");
    setVIN("");
    setColor("");
    setPrice("");
    setMake("");
    setModel("");
    setBody("");
    setVehicleType("");
    setTowCapacity("");
    setMotorcycleType(null);
    setWaterCapacity("");
  })
}


return (
  <p>
      <p>
  <Container>
   <h3>SELL YOUR VEHICLE</h3>
   <Paper> 
<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
  <div>
    <TextField id="outlined-basic" label="Vehicle Identification Number" variant="outlined" fullWidth 
    value={VIN}
    onChange={(e)=>setVIN(e.target.value)}
    helperText="Ex. 3GNFK16318G269795"
    />
    &nbsp;
    <TextField id="outlined-basic" label="Price" variant="outlined" fullWidth 
    value={price}
    onChange={(e)=>setPrice(e.target.value)}
    helperText="Ex. Max 50000"
    />
    &nbsp;
    <TextField id="outlined-basic" label="Make " variant="outlined" fullWidth
    value={make}
    onChange={(e)=>setMake(e.target.value)}
    helperText="Ex. Toyota"
    />
    &nbsp;
    <TextField id="outlined-basic" label="Model " variant="outlined" fullWidth
    value={model}
    onChange={(e)=>setModel(e.target.value)}
    helperText="Ex. Supra"
    />
    &nbsp;
    <TextField id="outlined-basic" label="Body " variant="outlined" fullWidth
    value={body}
    onChange={(e)=>setBody(e.target.value)}
    helperText="Ex. Coupe"
    />
    &nbsp;
    <TextField id="outlined-basic" label="Color " variant="outlined" fullWidth
    value={color}
    onChange={(e)=>setColor(e.target.value)}
    helperText="Ex. White"
    />
    &nbsp;
    <FormControl fullWidth >
    <InputLabel id="demo-simple-select-autowidth-label">Vehicle Type</InputLabel>
    <Select value ={vehicleType} onChange={e=>setVehicleType(e.target.value)}>
      <MenuItem value="" >
        <em>None</em>
      </MenuItem>
      <MenuItem value={'Car'}>Car</MenuItem>
      <MenuItem value={'Truck'}>Truck</MenuItem>
      <MenuItem value={'MotorCycle'}>MotorCycle</MenuItem>
      <MenuItem value={'RV'}>RV</MenuItem>
    </Select>
  </FormControl>
  &nbsp;
  &nbsp;
    {/* <select value ={vehicleType} onChange={e=>setVehicleType(e.target.value)}>
      <option>Car</option>
      <option>Truck</option>
      <option>Motorcycle</option>
      <option>RV</option>
    </select>
    &nbsp; */}
  {vehicleType === vType[1] && <TextField id="outlined-basic" label="Tow Capacity" variant="outlined" fullWidth value={towCapacity} onChange={(e)=>setTowCapacity(e.target.value)}/> }
  {vehicleType === vType[2] && <TextField id="outlined-basic" label="Motorcylce Type" variant="outlined" fullWidth value={motorcycleType} onChange={(e)=>setMotorcycleType(e.target.value)}/> && <FormControl fullWidth >
    <InputLabel id="demo-simple-select-autowidth-label">Motorcycle Type</InputLabel>
    <Select value ={motorcycleType} onChange={e=>setMotorcycleType(e.target.value)}>
      <MenuItem value="" >
        <em>None</em>
      </MenuItem>
      <MenuItem value={'Sports_Bike'}>Sports Bike</MenuItem>
      <MenuItem value={'Cruiser'}>Cruiser</MenuItem>
      <MenuItem value={'Off_Road'}>Off Road</MenuItem>
      <MenuItem value={'Touring'}>Touring</MenuItem>
    </Select>
  </FormControl> }
  {vehicleType === vType[3] && <TextField id="outlined-basic" label="Water Capacity" variant="outlined" fullWidth value={waterCapacity} onChange={(e)=>setWaterCapacity(e.target.value)}/> }
    {
      //<TextField id="outlined-basic" label="Tow Capacity " variant="outlined" fullWidth
      // value={towCapacity}
       //onChange={(e)=>setAddress(e.target.value)}
       ///>
    }
    {/* <TextField id="outlined-basic" label="Tow Capacity " variant="outlined" fullWidth
   // value={towCapacity}
    //onChange={(e)=>setAddress(e.target.value)}
    />
    &nbsp;
    <TextField id="outlined-basic" label="Motorcylce Type " variant="outlined" fullWidth
   // value={motorCycleType}
   // onChange={(e)=>setAddress(e.target.value)}
    />
    &nbsp;
    <TextField id="outlined-basic" label="Water Capacity " variant="outlined" fullWidth
   // value={waterCapacity}
    //onChange={(e)=>setAddress(e.target.value)}
    /> */}
    &nbsp;
    &nbsp;
    <div>
    <Button variant="contained" color="secondary" onClick={handleClick}> Submit </Button>
    &nbsp;
    &nbsp;
    </div>
  </div>
</Box>
</Paper>
</Container>
</p>
</p>
);
}
