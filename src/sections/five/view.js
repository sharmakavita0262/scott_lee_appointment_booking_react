import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './view.section.scss';
import dayjs from 'dayjs';
import CustomDatePicker from 'src/components/CustomDatePicker';

export default function FiveView() {
  const [newDate, setNewDate] = useState(dayjs(new Date()));
  const handleDateChange = (e) => {
    console.log('data===>', e);
    setNewDate(e);
  };
  return (
    <div className="home">
      <Box sx={{}}>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Date & Time Selection</Typography>
              </Box>
            </Box>
            <Box className="main-one">
              <CustomDatePicker
                className="main"
                value={newDate}
                onChange={(newValue) => handleDateChange(newValue)}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
