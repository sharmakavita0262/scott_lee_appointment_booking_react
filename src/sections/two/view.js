import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './view.section.scss';

export default function TowView() {
  return (
    <div className="home">
      <Box sx={{}}>
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
                <Box className="card">
                  <Box className="card-userDetails">
                    {/* <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box> */}
                    <Box className="card-userName">
                      <Typography variant="h4">Service Category</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services service-figure">
                    <Typography variant="span">$0,000.00</Typography>
                    <Typography className="start-text" variant="span">
                      STARTS FROM
                    </Typography>
                  </Box>
                </Box>
                <Box className="card">
                  <Box className="card-userDetails">
                    {/* <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box> */}
                    <Box className="card-userName">
                      <Typography variant="h4">Service Name</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services service-figure">
                    <Typography variant="span">$0,000.00</Typography>
                    <Typography className="start-text" variant="span">
                      STARTS FROM
                    </Typography>
                  </Box>
                </Box>
                <Box className="card">
                  <Box className="card-userDetails">
                    {/* <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box> */}
                    <Box className="card-userName">
                      <Typography variant="h4">Service Name</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services service-figure">
                    <Typography variant="span">$0,000.00</Typography>
                    <Typography className="start-text" variant="span">
                      STARTS FROM
                    </Typography>
                  </Box>
                </Box>
                <Box className="card">
                  <Box className="card-userDetails">
                    {/* <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box> */}
                    <Box className="card-userName">
                      <Typography variant="h4">Service Name</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services service-figure">
                    <Typography variant="span">$0,000.00</Typography>
                    <Typography className="start-text" variant="span">
                      STARTS FROM
                    </Typography>
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
