import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/sidebar';
import Page from './one';
import Page2 from './two';
import Page3 from './three';
import Page4 from './four';
import Page5 from './five';
import SummaryCard from '../../components/summaryCard';
import Page6 from './six';
import Page7 from './seven';
import Page9 from './nine';
import Page8 from './eight';
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
  console.log('formValue setStepFormData=======>', activeStep);

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

  const callChildFunction = () => {
    console.log('called next click', childRef);
    if (childRef.current) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      childRef.current.submitForm();
    }
  };

  function renderStepContent(step) {
    switch (step) {
      case 1:
        return (
          <OneView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 2:
        return (
          <TowView
            ref={childRef}
            handleMenuOpen={handleMenuOpen}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 3:
        return (
          <ThreeView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 4:
        return (
          <FourView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 5:
        return (
          <FiveView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 6:
        return (
          <SixView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 7:
        return (
          <SevenView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 8:
        return (
          <EightView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
          />
        );
      case 9:
        return (
          <NineView
            handleMenuOpen={handleMenuOpen}
            ref={childRef}
            setStepFormData={setStepFormData}
            formValue={formValue}
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
                    <ChevronLeftIcon />
                    Back
                  </Button>

                  <Button
                    size="small step-back-nxt"
                    type="submit"
                    onClick={callChildFunction}
                    disabled={activeStep === 9}
                  >
                    Next
                    <ChevronRightIcon />
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
                        <ChevronLeftIcon /> Back
                      </Button>
                    )}
                    {activeStep < 9 && (
                      <Button
                        type="submit"
                        size="small step-back-nxt"
                        onClick={callChildFunction}
                        disabled={activeStep === 9}
                      >
                        Next
                        <ChevronRightIcon />
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
