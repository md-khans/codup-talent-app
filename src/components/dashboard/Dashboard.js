import React, { useState } from "react";
import "./Dashboard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Data from '../data/Data'
import TechStack from "../TechStack";
import Experience from "../Experience";


function Dashboard() {
  
  const [tech, setTech] = useState("");



  const handleChange = (event) => {
    setTech(event.target.id);
  };

  return (
    <>
      <div className='main-Container'>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <div className='heading-h1'>
            <h1>Codup Talent Pool</h1>
            <div>
              <TextField
                id='outlined-search'
                label='Search field'
                type='search'
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 320 }}>
                <TechStack/>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 320 }}>
                <InputLabel id='demo-simple-select-helper-label'>
                  Technically vetted
                </InputLabel>
                <Select
                  id='name'
                  label='Technically vetted'
                  onChange={handleChange}
                >
                  <MenuItem>All</MenuItem>
                  <MenuItem>Yes</MenuItem>
                  <MenuItem>No</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 320 }}>
              <Experience/>
              </FormControl>
            </div>
          </div>
        <div>
          <Data />
        </div>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
