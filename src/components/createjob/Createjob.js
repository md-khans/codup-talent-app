import { useState } from "react";
import UndoIcon from "@mui/icons-material/Undo";
import {
  CssBaseline,
  Container,
  Box,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import React from "react";
import TechStack from "../TechStack";
import Experience from "../Experience";
import Employment from "../Employment";
import Location from "../Location";
import Country from "../Country";
import { Link } from "react-router-dom";

function Createjob() {
  const [formData, setFormData] = useState({
    positionTitle: "",
    techStack: "",
    experience: "",
    employment: "",
    location: "",
    country: [{}],
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.positionTitle &&
      formData.techStack &&
      formData.experience &&
      formData.employment &&
      formData.location &&
      formData.country.length > 0
    ) {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
    console.log("Form Data:", formData);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        {error && (
          <Alert severity='error' sx={{ mt: 2 }}>
            Please fill in all the fields.
          </Alert>
        )}
        {success && (
          <Alert severity='success' sx={{ mt: 2 }}>
            Job Created Successfully
          </Alert>
        )}
        <Button variant='text' component={Link} to='/myjob'>
          <UndoIcon />
          Back
        </Button>
        <h1>Create a Job</h1>
        <Box sx={{ height: "40vh" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              id='positionTitle'
              label='Position Title'
              value={formData.positionTitle}
              onChange={handleInputChange}
              fullWidth
              margin='normal'
              required
            />
            <TechStack
              onChange={(value) =>
                setFormData({ ...formData, techStack: value })
              }
            />
            <Experience
              onChange={(value) =>
                setFormData({ ...formData, experience: value })
              }
            />
            <Employment
              onChange={(value) =>
                setFormData({ ...formData, employment: value })
              }
            />
            <Location
              onChange={(value) =>
                setFormData({ ...formData, location: value })
              }
            />
            <Country
              onChange={(value) => setFormData({ ...formData, country: value })}
            />
            <Button variant='outlined' type='submit'>
              Create
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Createjob;
