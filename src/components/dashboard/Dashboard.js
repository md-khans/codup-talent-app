import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Experience from "../Experience";
import Data from "../data/Data";


const skillsOptions = [
  "PHP",
  "Key Account Manager",
  "MERN",
  "Next.js",
  "Javascript",
  "Node.js",
  "React.js",
  "Project Manager",
  "React Native",
  "Python",
  "WordPress",
];

function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [dropdownOne, setDropdownOne] = useState("");
  const [experience, setExperience] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSkillsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSkills(typeof value === "string" ? value.split(",") : value);
  };

  const handleDropdownOneChange = (event) => {
    setDropdownOne(event.target.value);
  };

  const handleExperienceChange = (newExperience) => {
    setExperience(newExperience);
  };

  return (
    <>
      <div className='main-Container'>
        <Box sx={{ height: "100vh" }}>
          <h1>Dashboard</h1>
          <FormControl sx={{ m: 1, width: 300 }}>
            <TextField
              id='outlined-search'
              label='Search field'
              type='search'
              value={searchText}
              onChange={handleSearchChange}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='skills-checkbox-label'>Skills</InputLabel>
            <Select
              labelId='skills-checkbox-label'
              id='skills-checkbox'
              multiple
              value={selectedSkills}
              onChange={handleSkillsChange}
              input={<OutlinedInput label='Skills' />}
              renderValue={(selected) => selected.join(", ")}
            >
              {skillsOptions.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  <Checkbox checked={selectedSkills.indexOf(skill) > -1} />
                  <ListItemText primary={skill} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='dropdown-one-label'>Technical Vetted</InputLabel>
            <Select
              labelId='dropdown-one-label'
              id='dropdown-one'
              value={dropdownOne}
              onChange={handleDropdownOneChange}
            >
              <MenuItem value={10}>ALL</MenuItem>
              <MenuItem value={20}>YES</MenuItem>
              <MenuItem value={30}>NO</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, width: 300 }}>
            <Experience value={experience} onChange={handleExperienceChange} />
          </FormControl>
          <Data />
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
