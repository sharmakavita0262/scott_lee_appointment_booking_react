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
          />
        </Box>
        {renderStepContent(activeStep)}
        <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
          {/* {theme.direction === 'rtl' ? <ArrowRightAltIcon /> : <ArrowLeftAltIcon />} */}
          Back
        </Button>
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {/* {theme.direction === 'rtl' ? <ArrowLeftAltIcon /> : <ArrowRightAltIcon />} */}
        </Button>
      </Box>
    </div>
  );
}

export default Dashboard;
