import { Box, Button, Container, Grid, Typography, MobileStepper } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Page from './one';
import Page2 from './two';
import Page3 from './three';

function Dashboard() {
  const [activeStep, setActiveStep] = React.useState(1);
  const setStepData = (value) => {
    // setFormValue(value);
    setActiveStep(activeStep + 1);
    const { programTitle } = value;
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function renderStepContent(step) {
    switch (step) {
      case 1:
        return <Page setStepData={setStepData} />;
      case 2:
        return (
          <Page2
            setStepData={setStepData}
            // formValue={formValue}
            // setFormValue={setFormValue}
            // _handleBack={_handleBack}
          />
        );
      case 3:
        return (
          <Page3
          //  formValue={formValue} _handleBack={_handleBack}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <div>
      <Helmet>
        <title> Dashboard: Service</title>
      </Helmet>
      {/* <div> */}
      <Box className="progressBar">
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
        />
      </Box>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={3} lg={3}>
            <Box className="sidebar">
              <Box className="service_heading">
                <Box className="userImg">
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
          </Grid> */}
      </Grid>

      <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
        {/* {theme.direction === 'rtl' ? <ArrowRightAltIcon /> : <ArrowLeftAltIcon />} */}
        Back
      </Button>
      <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
        Next
        {/* {theme.direction === 'rtl' ? <ArrowLeftAltIcon /> : <ArrowRightAltIcon />} */}
      </Button>
      {/* </div> */}
      {renderStepContent(activeStep)}
    </div>
  );
}

export default Dashboard;
