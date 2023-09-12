import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './summaryCard.component.scss';

function SummaryCard(props) {
  const { activeStep } = props;
  return (
    <div>
      <Box className="summery-header">
        <Box className="">
          <Typography className="summery-heading" variant="h2">
            Summary
          </Typography>
        </Box>
        <Box className="summery-card">
          <Typography className="summery-card-title">Selected Service</Typography>
          {activeStep === 3 && (
            <Box className="summery-time">
              <Typography className="summery-time-date">Sep 24,2023</Typography>
              <Typography className="summery-time-text">TIME ZONE</Typography>
            </Box>
          )}
          <Typography className="summery-sub-title">YOUR PREFERENCES</Typography>

          <Box className="summery-selection-box">
            <Box className="summery-selection">
              <Typography className="summery-selection-title">Preferences Name:</Typography>
              <Typography className="summery-selection-text">Selection</Typography>
            </Box>
            <Box className="summery-selection">
              <Typography className="summery-selection-title">Preferences Name:</Typography>
              <Typography className="summery-selection-text">Selection</Typography>
            </Box>
            <Box className="bottom-user">
              <Box className="provider-text">
                <Typography className="summary-label">PROVIDER</Typography>
                <Typography className="">First Lastname</Typography>
              </Box>
            </Box>
            <Box className="your-details">
              <Typography className="summary-label">YOUR DETAILS</Typography>
              <Typography>support@emailaddress.com</Typography>
            </Box>
            <Box className="booking-summery">
              <Typography className="summary-label">YOUR DETAILS</Typography>
              <Box className="user-box">
                <Box className="user-box-title">
                  <Typography>CUSTOMER</Typography>
                </Box>
                <Box className="user-avtar-box">
                  <img
                    src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                    alt="temp"
                  />
                  <Typography>First Lastname</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="author-contact">
              <Typography className="summary-label">CONTACT INFO</Typography>
              <Typography>support@emailaddress.com</Typography>
              <Box className="author-contact-img">
                <Typography>234-555-1212</Typography>
                <Typography>
                  <img
                    src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                    alt="temp"
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
SummaryCard.propTypes = {
  activeStep: PropTypes.number.isRequired,
};
export default SummaryCard;
