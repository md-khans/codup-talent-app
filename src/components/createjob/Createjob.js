import { CssBaseline, Container, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import TechStack from "../TechStack";
import Experience from "../Experience";
import Employment from "../Employment";
import Location from "../Location";
import Country from "../Country";
import Button from "@mui/material/Button";

function Createjob() {
  const [positiontitle, setPositionTitle] = useState("");
  const [techstack, setTechStack] = useState([]);
  const [experience, setExperience] = useState("");
  const [employment, setEmployment] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState([]);

  const handleSubmit = (event) => {
    // event.Prevent.Default();
    console.log({
      positiontitle,
      techstack,
      experience,
      employment,
      location,
      country,
    });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <h3>Create a Job</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              id='name'
              label='Position Title'
              value={positiontitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
            <TechStack value={techstack} onChange={setTechStack} />
            <Experience value={experience} onChange={setExperience} />
            <Employment value={employment} onChange={setEmployment} />
            <Location value={location} onChange={setLocation} />
            <Country value={country} onChange={setCountry} />
          </form>
          <Button type="submit" variant='contained' >Create</Button>
        </Box>
      </Container>
    </>
  );
}

export default Createjob;
