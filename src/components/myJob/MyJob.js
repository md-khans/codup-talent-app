import React from "react";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

function MyJob() {
  return (
    <>
      <div>
        <h1>This is My Job Page</h1>
        <Stack direction="row" >
          <Button variant='contained' LinkComponent={Link} to='/Createjob'>
            Create Job
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default MyJob;
