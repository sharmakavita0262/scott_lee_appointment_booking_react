import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './three.scss';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const ThreeView = forwardRef((props, ref) => {
  const { setStepFormData, handleMenuOpen, handleNext, formValue } = props;
  const [Error, setError] = useState(false);
  const [preference, setPreference] = useState(formValue?.p_id ?? null);
  console.log('formValue of preference page ', formValue);
  const ServiceData = [
    { p_id: 1, preference: 'Haircut' },
    { p_id: 2, preference: 'Color' },
    { p_id: 3, preference: 'HairSpa' },
  ];
  const [selectItem, setSelectItem] = useState([]);
  const handleSelectChange = (item, index) => {
    setError(false);
    setSelectItem(item.target.value);
    setPreference(item.target.value);
    setStepFormData(item.target.value);
  };

  const submitForm = () => {
    if (preference === null) {
      setError(true);
    } else {
      setError(false);
      handleNext();
    }
  };
  useImperativeHandle(ref, () => ({
    submitForm,
  }));
  const handleMenu = () => {
    handleMenuOpen((prev) => !prev);
  };
  console.log('preference====>', preference, formValue);
  return (
    <div className="home">
      <Helmet>
        <title> Dashboard: Service</title>
      </Helmet>
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography className="tab-title" variant="h2">
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Preferences
                </Typography>
              </Box>
            </Box>
            <Box className="preferences-section">
              <Box className="dashbord">
                <Box className="service_box Preferences-card-input">
                  {ServiceData?.map((item, index) => (
                    <Box className="card card-input">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{index}</InputLabel>

                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectItem[index]}
                          label="Age"
                          onChange={(e) => {
                            handleSelectChange(e, index);
                          }}
                        >
                          <MenuItem value={item}>{item.preference}</MenuItem>
                          {/* {
                            ServiceData?.map((item1) =>
                              <MenuItem value={item1?.service_Category}>{item1?.service_Category}</MenuItem>)} */}
                        </Select>
                        <Typography
                          sx={{
                            color: '#808080',
                            fontSize: '13px',
                            paddingLeft: '10px',
                            paddingTop: '10px',
                          }}
                        >
                          Helper Text / Hint
                        </Typography>
                      </FormControl>
                    </Box>
                  ))}
                </Box>
                <Box className="error-message">
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select preference'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});
export default ThreeView;
ThreeView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
  formValue: PropTypes.string,
};
