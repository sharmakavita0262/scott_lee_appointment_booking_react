// @mui
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Box, Typography, Grid, Container, Card, CardContent } from '@mui/material';
import './six.section.scss';
import CustomDatePicker from '../../components/CustomDatePicker';

// ----------------------------------------------------------------------

export default function SixView() {
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
            <Box className="dashbord">
              <Box className="select-date">
                <CustomDatePicker
                  className="main"
                  value={newDate}
                  onChange={(newValue) => handleDateChange(newValue)}
                />
              </Box>
              <Box className="slot-check" sx={{ marginBottom: '20px' }}>
                <Box className="slot-check-line">
                  <Typography>p</Typography>
                </Box>
                <Box className="slot-check-content">
                  <Box className="slot-select">
                    <Typography sx={{ color: '#000', fontSize: '15px' }}>
                      Pick a slot for
                    </Typography>
                    <Typography sx={{ color: '#0078ce', fontSize: '17px', fontWeight: 500 }}>
                      September 24
                    </Typography>
                  </Box>
                  <Box className="slot-select">
                    <Typography sx={{ color: '#646464', fontWeight: 600, fontSize: '14px' }}>
                      TIMEZONE:
                    </Typography>
                    <Typography sx={{ color: '#646464', fontWeight: 600, fontSize: '14px' }}>
                      U.S.EASTER
                    </Typography>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
