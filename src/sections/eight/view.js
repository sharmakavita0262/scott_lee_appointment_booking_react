import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import './eight.section.scss';
import { Link } from 'react-router-dom';

export default function EightView() {
  const [selectedTab, setSelectedTab] = useState('one');
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Verify Booking Details</Typography>
              </Box>
            </Box>

            <Box className="dashbord">
              <Box>
                <Alert severity="info" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography className="alert-text-box">
                    Double check your booking information, you can go back to edit or click the
                    Submit button to confirm your booking.
                  </Typography>
                </Alert>
              </Box>
              <Box className="summary-model">
                <Typography className="detail-heading">SUMMARY</Typography>
                <Box>
                  <Typography className="service-heading">Selected Service</Typography>
                  <Box className="select-time">
                    <Typography className="date-heading">Sep 24, 2023, 9:00am</Typography>
                    <Typography className="timezone-heading">TIME ZONE</Typography>
                  </Box>
                </Box>

                <Box className="provider-box">
                  <Box className="user-box">
                    <Box className="user-box-title">
                      <Typography>PROVIDER</Typography>
                    </Box>
                    <Box className="user-avtar-box">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                      <Typography>First Lastname</Typography>
                    </Box>
                  </Box>

                  <Typography className="detail-heading preference-title">
                    YOUR PREFERENCES
                  </Typography>
                  <Box className="preference-selection">
                    <Typography className="detail-heading">Preference Name: </Typography>
                    <Typography className="detail-heading">Selection</Typography>
                  </Box>
                  <Box className="preference-selection">
                    <Typography className="detail-heading">Preference Name: </Typography>
                    <Typography className="detail-heading">Selection</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
