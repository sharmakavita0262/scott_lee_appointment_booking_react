import React, {  forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography, Alert } from '@mui/material';
import './eight.scss';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { Helmet } from 'react-helmet-async';

const EightView = forwardRef((props, ref) => {
  const { setStepFormData, handleMenuOpen } = props;
  const handleMenu = () => {
    console.log('click on hello');
    handleMenuOpen((prev) => !prev);
  };
  const submitForm = () => {
    console.log('called next click submit eight page');
  };
  useImperativeHandle(ref, () => ({
    submitForm,
  }));
  return (
    <div className="home">
       <Helmet>
        <title> Dashboard: Service</title>
      </Helmet>
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography className="tab-title" variant="h2">
                  {' '}
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Verify Booking Details
                </Typography>
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
});
EightView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
};
export default EightView;
