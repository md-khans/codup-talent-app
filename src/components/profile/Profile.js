import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';

const profiles = [
  {
    name: 'Muhammad Khan',
    jobRole: 'Intern Software Engineer',
    experience: '2 months',
  },
  {
    name: 'Sara Ahmed',
    jobRole: 'UI/UX Designer',
    experience: '2 years',
  },
  {
    name: 'Zain Malik',
    jobRole: 'Project Manager',
    experience: '5 years',
  },
  {
    name: 'Jabbar',
    jobRole: 'Software Engineer',
    experience: '7 years',
  },
  {
    name: 'Saqib Khan',
    jobRole: 'UI/UX Designer',
    experience: '4 years',
  },
  {
    name: 'Basit Malik',
    jobRole: 'Project Manager',
    experience: '9 years',
  },
];

const Profile = () => {
  return (
    <Grid container spacing={1} margin={4}>
      {profiles.map((profile, index) => (
        <Grid item xs={12} sm={6} md={4} padding={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                {profile.name[0]}
              </Avatar>
              <Typography variant="h6" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.jobRole}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience: {profile.experience}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Profile;
