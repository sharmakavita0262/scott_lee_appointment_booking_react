import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './view.section.scss';
import PropTypes from 'prop-types';

export default function TowView({ setStepFormData, formValue }) {
  const ServiceData = [
    { service_name: 'Haircut', sub: 'sub- abc' },
    { service_name: 'Color', sub: 'sub- abc' },
    { service_name: 'HairSpa', sub: 'sub- abc' },
  ];
  const selectServiceCategory = (item) => {
    setStepFormData(item);
    console.log('selected service item', item);
  };

  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading Service-section">
                <Typography variant="h2">Service Section</Typography>
                <Typography variant="p">CATEGORY</Typography>
              </Box>
            </Box>
            <Box className="dashbord">
              <Box className="service_box">
                {ServiceData &&
                  ServiceData.length > 0 &&
                  ServiceData.map((item, index) => (
                    <Box
                      className="card"
                      onClick={() => {
                        selectServiceCategory(item);
                      }}
                    >
                      <Box className="card-userDetails">
                        <Box className="card-userName">
                          <Typography variant="h4">{item.service_name}</Typography>
                          <Typography variant="span">{item.sub}</Typography>
                        </Box>
                      </Box>
                      <Box className="services service-figure">
                        <Typography variant="span">$0,000.00{index}</Typography>
                        <Typography className="start-text" variant="span">
                          STARTS FROM
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
TowView.propTypes = {
  setStepFormData: PropTypes.func,
  formValue: PropTypes.string,
};
