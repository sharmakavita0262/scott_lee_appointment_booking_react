import React, { forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './four.scss';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const FourView = forwardRef((props, ref) => {
  const { handleMenuOpen, setStepFormData, handleNext } = props;

  const ServiceData = [
    { service_name: 'Provider 1', sub: 'sub- abc' },
    { service_name: 'Provider 2', sub: 'sub- abc' },
    { service_name: 'Provider 3', sub: 'sub- abc' },
    { service_name: 'Provider 4', sub: 'sub- abc' },
    { service_name: 'Provider 5', sub: 'sub- abc' },
    { service_name: 'Provider 6', sub: 'sub- abc' },
  ];
  console.log('setStepFormData', setStepFormData);
  const selectServiceProvider = (item) => {
    setStepFormData(item);
    console.log('selected service item', item);
  };
  const submitForm = () => {
    handleNext()
    console.log('called next click submit four page');
  };
  useImperativeHandle(ref, () => ({
    submitForm,
  }));
  const handleMenu = () => {
    console.log('click on hello');
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
                  Service Provider
                </Typography>
              </Box>
            </Box>
            <Box className="service-provied-section">
              <Box className="dashbord">
                <Grid container spacing={2}>
                  {ServiceData &&
                    ServiceData.length > 0 &&
                    ServiceData.map((item) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <Box
                          className="product-service-card"
                          onClick={() => {
                            selectServiceProvider(item);
                          }}
                        >
                          <CardMedia
                            className="product-card-img"
                            component="img"
                            src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                            alt="Sample Image"
                          />
                          <Box className="product-card-data">
                            <Typography>{item.service_name}</Typography>
                            <Typography>{item.sub}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});
FourView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,

};
export default FourView;
