import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import './sidebar.component.scss';

import { Box, Typography, MobileStepper } from '@mui/material';

function Sidebar(props) {
  const { step, content, menuOpen, handleMenuOpen } = props;

  console.log('open', step, menuOpen);

  return (
    <div>
      <Box className={menuOpen ? 'sidebar sidebar-active' : 'sidebar'}>
        <Box className="progressBar">
          <MobileStepper
            className="progressBar-line"
            variant="progress"
            steps={10}
            position="static"
            activeStep={step}
            sx={{ maxWidth: 400, flexGrow: 1 }}
          />
        </Box>
        <Box className="service_heading">
          <Box className="userImg">
            <img
              src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
              alt="temp"
            />
          </Box>
          <Box className="user_details">
            <Typography variant="h4" className="user_heading">
              {content?.heading}
            </Typography>
            <Typography variant="span" className="userHeading_details">
              Please select a service for which you want to schedule an appointment
            </Typography>
          </Box>
        </Box>
        <Box className="questions">
          <Typography variant="h4" className="user_heading">
            Questions?
          </Typography>
          <Typography variant="span" className="userHeading_details">
            Call (111) 123-4567 for help
          </Typography>
        </Box>
        <Box className="Close-icon">
          <CloseIcon
            onClick={() => {
              handleMenuOpen(!menuOpen);
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
Sidebar.propTypes = {
  step: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
  menuOpen: PropTypes.bool,
  handleMenuOpen: PropTypes.func,
};

export default Sidebar;
