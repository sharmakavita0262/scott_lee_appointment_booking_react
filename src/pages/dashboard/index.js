import { Box, Button, Container, Grid, Typography, MobileStepper } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/sidebar';
import Page from './one';
import Page2 from './two';
import Page3 from './three';
import Page4 from './four';
import Page5 from './five';

function Dashboard() {
  const [activeStep, setActiveStep] = React.useState(1);
  const setStepData = (value) => {
    // setFormValue(value);
    setActiveStep(activeStep + 1);
    const { programTitle } = value;
  };

  const headerData = [
    {
      heading: 'Service Selection',
    },
    {
      heading: 'Service Selection Category',
    },
    {
      heading: 'Personal Preferences',
    },
    {
      heading: 'Service Provider',
    },
    {
      heading: 'Service Selection Category',
    },
  ];

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
      case 4:
        return (
          <Page4
          //  formValue={formValue} _handleBack={_handleBack}
          />
        );
      case 5:
        return (
          <Page5
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
          padding: '0px',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Sidebar step={activeStep} content={headerData[activeStep - 1]} />
          </Grid>
          <Grid item xs={12} md={6} lg={9}>
            {renderStepContent(activeStep)}
            <Box className="navigation-btn">
              {activeStep > 1 && (
                <Button size="small step-back-btn" onClick={handleBack} disabled={activeStep === 1}>
                  {/* {theme.direction === 'rtl' ? <ArrowRightAltIcon /> : <ArrowLeftAltIcon />} */}
                  Back
                </Button>
              )}
              <Button size="small step-back-nxt" onClick={handleNext} disabled={activeStep === 5}>
                Next
                {/* {theme.direction === 'rtl' ? <ArrowLeftAltIcon /> : <ArrowRightAltIcon />} */}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
