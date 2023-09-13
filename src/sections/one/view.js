import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import MenuIcon from '@mui/icons-material/Menu';
import './one.scss';
import PropTypes from 'prop-types';

const OneView = forwardRef((props, ref) => {
  const { setStepFormData, handleMenuOpen, formValue, handleNext } = props;
  const [Error, setError] = useState(false);
  const [service, setService] = useState(formValue?.s_id ?? null);
  const ServiceData = [
    { s_id: 1, service_Category: 'Haircut' },
    { s_id: 2, service_Category: 'Color' },
    { s_id: 3, service_Category: 'HairSpa' },
  ];
  console.log('formValue of service page ', formValue);

  const selectService = (item) => {
    setStepFormData(item);
    setService(item.id);
    setError(false);
  };
  const submitForm = () => {
    if (service === null) {
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
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Service Section
                </Typography>
              </Box>
            </Box>
            <Box className="service-section">
              <Box className="dashbord">
                <Box className="service_box">
                  {ServiceData &&
                    ServiceData.length > 0 &&
                    ServiceData.map((item, index) => (
                      <>
                        {' '}
                        <Box
                          className="card"
                          onClick={() => {
                            selectService(item);
                          }}
                        >
                          <Box className="card-userDetails">
                            <Box className="card-userImg">
                              <img
                                src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                                alt="temp"
                              />
                            </Box>
                            <Box className="card-userName">
                              <Typography variant="h4">{item.service_Category}</Typography>
                              <Typography variant="span">{item.service_Category}</Typography>
                            </Box>
                          </Box>
                          <Box className="services">
                            <Typography variant="span">{index}Services</Typography>
                          </Box>
                        </Box>
                      </>
                    ))}
                </Box>

                <Box className="error-message">
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select service'}
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
OneView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
  formValue: PropTypes.string,
};
export default OneView;
