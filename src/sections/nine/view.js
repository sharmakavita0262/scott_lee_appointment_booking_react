import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Typography, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import './nine.section.scss';
import { Link } from 'react-router-dom';

export default function NineView({ handleMenuOpen, setStepFormData }) {
  const [selectedTab, setSelectedTab] = useState('one');
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleMenu = () => {
    console.log('click on hello');
    handleMenuOpen((prev) => !prev);
  };
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">
                  {' '}
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Appointment Confirmation
                </Typography>
              </Box>
            </Box>
            <Box className="dashbord">
              <Box className="conifrmation-model">
                <Box className="conifrmation-box">
                  <Typography className="Confirmation-title">Confirmation</Typography>
                  <Typography className="Confirmation-code">WN43CPV</Typography>
                  <Box className="Confirmation-btn">
                    <Button className="Calendar-btn">Add to Calendar</Button>
                    <Button className="print-btn">Print</Button>
                  </Box>
                </Box>
                <Box className="qr-model-box">
                  <Box className="qr-model-box">
                    <img
                      src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                      alt="temp"
                    />
                  </Box>
                  <Typography>Show QR code</Typography>
                </Box>
              </Box>

              <Box className="summary-model appointment-model">
                <Typography className="detail-heading">LENGTH OF APPOINTMENT</Typography>
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
NineView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
};
