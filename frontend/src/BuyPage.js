import React, { useState, useEffect } from "react";
import Axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BuyPage() {
    const[vehicles,setVehicles]=useState([])
    const [vehicleVIN, setVIN] = React.useState("");

  const fetchVehicles = async () => {
    const { data } = await Axios.get(
      "https://agile-taiga-94360.herokuapp.com/getAllVehicles"
    );
    const vehicles = data;
    setVehicles(vehicles);
    console.log(vehicles);
  };

  const handleClick=(e)=>{
    e.preventDefault()  
    deleteVehicle(vehicleVIN)
}
async function deleteVehicle(id) {
    const response = await fetch(`https://agile-taiga-94360.herokuapp.com/deleteVehicle/${id}`, {
      mode:'cors',
      method: "DELETE"
    });
    window.location.reload(false);
    return response.json();
  }


  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div>
      {vehicles.map((vehicle) => (
        <p key={vehicle.vehicleVIN}>
            Vin ={vehicle.vehicleVIN} {vehicle.price} {vehicle.make} {vehicle.model} {vehicle.color} {vehicle.vehicleType} {vehicle.towCapacity} {vehicle.motorcycleType} {vehicle.waterCapacity}</p>
      ))}
      <TextField id="outlined-basic" label="Input VIN Number" variant="outlined" fullWidth value={vehicleVIN}
        onChange={(e)=>setVIN(e.target.value)}
        />
        &nbsp;
      <Button variant="outline-primary" onClick={handleClick}>BUY THE VEHICLE</Button>{' '}
    </div>
  );
}

