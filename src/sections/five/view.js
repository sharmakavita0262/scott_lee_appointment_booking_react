import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './view.section.scss';
import dayjs from 'dayjs';
import CustomDatePicker from 'src/components/CustomDatePicker';

export default function FiveView() {
  const [newDate, setNewDate] = useState('');
  const handleDateChange = (e) => {
    console.log('data===>', e);
    setNewDate(e);
  };
  console.log('newDate', typeof newDate, newDate, !newDate);
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Date & Time Selection</Typography>
              </Box>
            </Box>
            <Box className={!newDate ? 'main-one' : 'select-date'}>
              <CustomDatePicker
                className="main"
                value={newDate}
                onChange={(newValue) => handleDateChange(newValue)}
              />
              {!!newDate && (
                <>
                  <Box className="slot-check" sx={{ marginBottom: '20px' }}>
                    <Box className="slot-check-line">
                      <Typography>p</Typography>
                    </Box>
                    <Box className="slot-check-content">
                      <Box className="slot-select">
                        <Typography className="slot-pick">Pick a slot for</Typography>
                        <Typography className="slot-date">September 24</Typography>
                      </Box>
                      <Box className="slot-time">
                        <Typography className="slot-time-text">TIMEZONE:</Typography>
                        <Typography className="slot-easter">U.S.EASTER</Typography>
                      </Box>
                    </Box>
                    <Box className="slot-check-line">
                      <Typography>p</Typography>
                    </Box>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <Typography className="slot-chip">00:00 am - 00:00 pm</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <Typography className="slot-chip">00:00 am - 00:00 pm</Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <Typography className="slot-chip-active">00:00 am - 00:00 pm</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
