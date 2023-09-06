import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './summaryCard.component.scss';

function SummaryCard(props) {
  const { heading } = props;
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
          </Box>
        </Box>
      </Box>
    </div>
  );
}
SummaryCard.propTypes = {
  heading: PropTypes.number.isRequired,
};
export default SummaryCard;
