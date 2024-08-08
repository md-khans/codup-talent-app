import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./MyJob.css";
import { Divider } from "@mui/material";

function MyJob() {
  return (
    <>
      <Box component='section' className='myjob-container'>
        <div className='create-job-button'>
          <Button variant='contained' component={Link} to='/Createjob'>
            Create Job
          </Button>
        </div>
        <div>
          <h1>No jobs available</h1>
        </div>
      </Box>
    </>
  );
}

export default MyJob;

{
  /* <div style={{ height: 400, width: "100%" }}>

</div> */
}
