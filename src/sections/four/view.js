import React from 'react';
import {
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CardMedia,
} from '@mui/material';
import './view.section.scss';

export default function FourView() {
  return (
    <div className="home">
      <Box sx={{}}>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Service Provider</Typography>
              </Box>
            </Box>
            <Box className="dashbord">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="product-service-card">
                    <CardMedia
                      className="product-card-img"
                      component="img"
                      src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                      alt="Sample Image"
                    />
                    <Box className="product-card-data">
                      <Typography>First Name</Typography>
                      <Typography>Last Name</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="product-service-card">
                    <CardMedia
                      component="img"
                      className="product-card-img"
                      src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                      alt="Sample Image"
                    />
                    <Box className="product-card-data">
                      <Typography>First Name</Typography>
                      <Typography>Last Name</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="product-service-card">
                    <CardMedia
                      component="img"
                      className="product-card-img"
                      src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                      alt="Sample Image"
                    />
                    <Box className="product-card-data">
                      <Typography>First Name</Typography>
                      <Typography>Last Name</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="product-service-card">
                    <CardMedia
                      component="img"
                      className="product-card-img"
                      src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                      alt="Sample Image"
                    />
                    <Box className="product-card-data">
                      <Typography>First Name</Typography>
                      <Typography>Last Name</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="product-service-card">
                    <CardMedia
                      component="img"
                      className="product-card-img"
                      src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                      alt="Sample Image"
                    />
                    <Box className="product-card-data">
                      <Typography>First Name</Typography>
                      <Typography>Last Name</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
