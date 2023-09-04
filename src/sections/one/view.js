// components
// import { useSettingsContext } from '../../components/settings/context/settings-context';
import React from 'react';
import { Box, Button, Container, Grid, Typography, MobileStepper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import './view.section.scss';
// ----------------------------------------------------------------------

export default function OneView() {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="home">
      <Box
        sx={{
          height: '100vh',
          mt: 3,
        }}
      >
        <Box className="progressBar">
          <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                Next
                {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
                Back
              </Button>
            }
          />
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <Box className="sidebar">
              <Box className="service_heading">
                <Box className="userImg">
                  {/* <img src={TImage} alt="temp" /> */}
                  <img
                    src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                    alt="temp"
                  />
                </Box>
                <Box className="user_details">
                  <Typography variant="h4" className="user_heading">
                    Service Selection
                  </Typography>
                  <Typography variant="span" className="userHeading_details">
                    Please select a service for which you want to schedule an appointment
                  </Typography>
                </Box>
                <Box className="questions">
                  <Typography variant="h4" className="user_heading">
                    Questions?
                  </Typography>
                  <Typography variant="span" className="userHeading_details">
                    Call (111) 123-4567 for help
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={9} lg={9}>
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Service Section</Typography>
              </Box>
            </Box>
            <Box className="dashbord">
              <Box className="service_box">
                <Box className="card">
                  <Box className="card-userDetails">
                    <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box>
                    <Box className="card-userName">
                      <Typography variant="h4">Service Category</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services">
                    <Typography variant="span">00Service</Typography>
                  </Box>
                </Box>
                <Box className="card">
                  <Box className="card-userDetails">
                    <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box>
                    <Box className="card-userName">
                      <Typography variant="h4">Service Category</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services">
                    <Typography variant="span">00Service</Typography>
                  </Box>
                </Box>
                <Box className="card">
                  <Box className="card-userDetails">
                    <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box>
                    <Box className="card-userName">
                      <Typography variant="h4">Service Category</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services">
                    <Typography variant="span">00Service</Typography>
                  </Box>
                </Box>
                <Box className="card">
                  <Box className="card-userDetails">
                    <Box className="card-userImg">
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Box>
                    <Box className="card-userName">
                      <Typography variant="h4">Service Category</Typography>
                      <Typography variant="span">sub Category</Typography>
                    </Box>
                  </Box>
                  <Box className="services">
                    <Typography variant="span">00Service</Typography>
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
