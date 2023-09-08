import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './view.section.scss';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export default function OneView({ setStepFormData, formValue }) {
  const ServiceData = [
    { service_Category: 'Haircut' },
    { service_Category: 'Color' },
    { service_Category: 'HairSpa' },
  ];
  console.log('setStepFormData', setStepFormData, formValue);
  const selectService = (item) => {
    setStepFormData(item);
    console.log('selected service item', item);
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
                <Typography variant="h2">Service Section</Typography>
              </Box>
            </Box>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
OneView.propTypes = {
  setStepFormData: PropTypes.func,
  formValue: PropTypes.string,
};
