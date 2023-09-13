import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/sidebar';
import SummaryCard from '../../components/summaryCard';
import OneView from '../../sections/one/view';
import TowView from '../../sections/two/view';
import ThreeView from '../../sections/three/view';
import FourView from '../../sections/four/view';
import FiveView from '../../sections/five/view';
import SevenView from '../../sections/seven/view';
import SixView from '../../sections/six/view';
import NineView from '../../sections/nine/view';
import EightView from '../../sections/eight/view';

function Dashboard() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [formValue, setFormValue] = React.useState();
  const childRef = React.useRef(null);

  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleMenuOpen = (value) => {
    setMenuOpen(value);
  };
  const setStepFormData = (value) => {
    setFormValue((prev) => ({ ...prev, ...value }));
  };
  console.log('formValue of index page=======>', formValue);

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
      heading: 'Date & Time',
    },
    {
      heading: 'Your Information',
    },
    {
      heading: 'Your Information',
    },
    {
      heading: 'Review & Verify',
    },
    {
      heading: 'Confirmation',
    },
  ];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const callChildFunction = () => {
    console.log('called next click', childRef);
    if (childRef.current) {
      childRef.current.submitForm();
    }
  };

  function renderStepContent(step) {
    switch (step) {
      case 1:
        return (
          <OneView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <TowView
            handleNext={handleNext}
            ref={childRef}
            handleMenuOpen={handleMenuOpen}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <ThreeView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 4:
        return (
          <FourView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 5:
        return (
          <FiveView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 6:
        return (
          <SixView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 7:
        return (
          <SevenView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 8:
        return (
          <EightView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
          />
        );
      case 9:
        return (
          <NineView
            handleNext={handleNext}
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
            handleNext={handleNext}
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
          <Grid item xs={12} md={3}>
            <Sidebar
              handleMenuOpen={handleMenuOpen}
              menuOpen={menuOpen}
              step={activeStep}
              content={headerData[activeStep - 1]}
            />
          </Grid>
          {activeStep <= 2 || activeStep === 9 ? (
            <Grid item xs={12} md={12} lg={9} className="grid-top">
              <Box sx={{ position: 'relative', height: '100vh' }}>
                {renderStepContent(activeStep)}
                <Box className="navigation-btn">
                  <Button
                    className={activeStep === 1 && 'step-back-btn-inactive'}
                    size="small step-back-btn"
                    onClick={handleBack}
                    disabled={activeStep === 1}
                  >
                    Back
                  </Button>

                  <Button
                    size="small step-back-nxt"
                    onClick={callChildFunction}
                    disabled={activeStep === 9}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Grid>
          ) : (
            <>
              <Grid item xs={12} md={12} lg={6} className="grid-top">
                <Box sx={{ position: 'relative', height: '100vh' }}>
                  {renderStepContent(activeStep)}
                  <Box className="navigation-btn">
                    {activeStep > 1 && (
                      <Button
                        className={activeStep === 1 && 'step-back-btn-inactive'}
                        size="small step-back-btn"
                        onClick={handleBack}
                        disabled={activeStep === 1}
                      >
                        Back
                      </Button>
                    )}
                    {activeStep < 9 && (
                      <Button
                        size="small step-back-nxt"
                        onClick={callChildFunction}
                        disabled={activeStep === 9}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={3} className="summery-steps">
                <SummaryCard activeStep={activeStep} />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
