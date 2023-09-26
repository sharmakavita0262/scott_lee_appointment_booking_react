import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './summaryCard.component.scss';

function SummaryCard(props) {
  const { activeStep, formValue } = props;
  return (
    <div>
      <Box className="summery-header">
        <Box className="">
          <Typography className="summery-heading" variant="h2">
            Summary
          </Typography>
        </Box>
        <Box className="summery-card">
          {activeStep < 8 && (
            <>
              <Typography className="summery-card-title">{formValue.service_name}</Typography>
              {activeStep >= 5 && activeStep <= 7 && (
                <>
                  <Box className="summery-time">
                    <Typography className="summery-time-date">Sep 24,2023</Typography>
                    <Typography className="summery-time-text">TIME ZONE</Typography>
                  </Box>
                  <Box>
                    <Typography className="summery-time-text">9:00 AM</Typography>
                  </Box>
                </>
              )}
              <Typography className="summery-sub-title">YOUR PREFERENCES</Typography>
            </>
          )}

          <Box className="summery-selection-box">
            {activeStep < 8 && (
              formValue.preferences && formValue.preferences.length > 0 && formValue.preferences.map((item, index) =>
                < Box key={index} className="summery-selection">
                  <Typography className="summery-selection-title">Preferences Name:</Typography>
                  <Typography className="summery-selection-text">
                    {item.toUpperCase()}
                  </Typography>
                </Box>
              )
            )}
            {activeStep >= 5 && activeStep <= 7 && (
              <Box className="bottom-user">
                <Box className="provider-text">
                  <Typography className="summary-label">PROVIDER</Typography>
                  <Typography className=""> {formValue?.serviceProvider}</Typography>
                </Box>
              </Box>
            )}
            {activeStep === 7 && (
              <Box className="your-details">
                <Typography className="summary-label">YOUR DETAILS</Typography>
                <Typography>{formValue?.email}</Typography>
              </Box>
            )}
            {activeStep === 8 && (
              <>
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
                      <Typography>
                        {formValue?.first_name} {formValue?.last_name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="author-contact">
                  <Typography className="summary-label">CONTACT INFO</Typography>
                  <Typography>{formValue?.email}</Typography>
                  <Box className="author-contact-img">
                    <Typography>{formValue?.phone}</Typography>
                    <Typography>
                      <img
                        src="https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg"
                        alt="temp"
                      />
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </div >
  );
}
SummaryCard.propTypes = {
  activeStep: PropTypes.number.isRequired,
  formValue: PropTypes.string,
};
export default SummaryCard;
