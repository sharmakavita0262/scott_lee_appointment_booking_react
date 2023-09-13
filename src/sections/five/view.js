import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import './five.scss';
import CustomDatePicker from 'src/components/CustomDatePicker';

const FiveView = forwardRef((props, ref) => {
  const { handleMenuOpen, setStepFormData, handleNext } = props;
  const [FormData, setFormData] = useState({
    selectedDate: '',
    slot: '',
  });
  const options = { month: 'long', day: 'numeric' };
  const TimeSlots = ['10:00 am - 11:00 am', '11:00 am - 12:00 pm', '12:00 pm - 01:00 pm'];
  const handleDateChange = (e) => {
    setFormData({ ...FormData, selectedDate: e });
  };
  const selectedSlot = (item) => {
    setFormData({ ...FormData, slot: item });
  };
  console.log('newDate', FormData);
  const submitForm = () => {
    handleNext();
  };
  useImperativeHandle(ref, () => ({
    submitForm,
  }));
  const handleMenu = () => {
    handleMenuOpen((prev) => !prev);
  };
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
                  Date & Time Selection
                </Typography>
              </Box>
            </Box>
            <Box className={!FormData.selectedDate ? 'main-one' : 'select-date'}>
              <CustomDatePicker
                className="main"
                value={FormData.selectedDate}
                onChange={(newValue) => handleDateChange(newValue)}
              />
              {!!FormData.selectedDate && (
                <>
                  <Box className="slot-check" sx={{ marginBottom: '20px' }}>
                    <Box className="slot-check-line" />

                    <Box className="slot-check-content">
                      <Box className="slot-select">
                        <Typography className="slot-pick">Pick a slot for</Typography>
                        <Typography className="slot-date">
                          {new Date(FormData.selectedDate).toLocaleDateString('en', options)}
                        </Typography>
                      </Box>
                      <Box className="slot-time">
                        <Typography className="slot-time-text">TIMEZONE:</Typography>
                        <Typography className="slot-easter">U.S.EASTER</Typography>
                      </Box>
                    </Box>
                    <Box className="slot-check-line" />
                  </Box>
                  <Grid container spacing={2} className="slot-check-grid">
                    {TimeSlots &&
                      TimeSlots.map((item) => (
                        <Grid item xs={12} sm={6} md={4}>
                          <Box
                            className="time-slots"
                            onClick={() => {
                              selectedSlot(item);
                            }}
                          >
                            <Typography
                              className={item === FormData.slot ? 'slot-chip-active' : 'slot-chip'}
                            >
                              {item}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});
FiveView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
};
export default FiveView;
