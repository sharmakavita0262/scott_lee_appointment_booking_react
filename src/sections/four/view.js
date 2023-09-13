import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography, CardMedia } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import MenuIcon from '@mui/icons-material/Menu';

import './four.scss';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const FourView = forwardRef((props, ref) => {
  const { handleMenuOpen, setStepFormData, handleNext, formValue } = props;
  const [Error, setError] = useState(false);
  const [provider, setProvider] = useState(formValue?.provider_Id ?? null);
  const ServiceData = [
    { provider_Id: 1, service_name: 'Provider 1', sub: 'sub- abc' },
    { provider_Id: 2, service_name: 'Provider 2', sub: 'sub- abc' },
    { provider_Id: 3, service_name: 'Provider 3', sub: 'sub- abc' },
    { provider_Id: 4, service_name: 'Provider 4', sub: 'sub- abc' },
    { provider_Id: 5, service_name: 'Provider 5', sub: 'sub- abc' },
    { provider_Id: 6, service_name: 'Provider 6', sub: 'sub- abc' },
  ];
  console.log('formValue of provider page', formValue);
  const selectServiceProvider = (item) => {
    setStepFormData(item);
    setProvider(item);
    setError(false);
  };

  const submitForm = () => {
    if (provider === null) {
      setError(true);
    } else {
      setError(false);
      handleNext();
    }
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
                <Box className="error-message">
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select provider'}
                  </Typography>
                </Box>
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
  formValue: PropTypes.string,
};
export default FourView;
