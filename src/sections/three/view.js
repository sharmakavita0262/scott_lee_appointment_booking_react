import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Loader } from 'src/components/loading-screen';
import { useGetPreferenceQuery } from '../../api/services'
import './three.scss';

const ThreeView = forwardRef((props, ref) => {
  const { setStepFormData, handleMenuOpen, handleNext, formValue } = props;
  const {
    data: PreferenceData, isLoading: PreferenceDataLoading, isSuccess: PreferenceDataSuccess, isError: PreferenceDataError } = useGetPreferenceQuery(formValue.serviceCategoryId)
  const [Error, setError] = useState(false);
  const [preferenceId, setPreferenceId] = useState(formValue?.preferenceId ?? []);
  const [preferences, setPreferences] = useState(formValue?.preferences ?? []);
  const { preference
  } = PreferenceDataSuccess && PreferenceData

  const handleSelectChange = (event) => {
    setError(false);
    setPreferenceId([event.target.value]);
    // // if (!preferenceId.includes(item.target.value)) {
    // //   setPreferenceId((prev) => [...prev, item.target.value]);
    // // }
    const preferenceArr = preference.length > 0 &&
      preference
        .filter((item) => item.id === event.target.value)
        .map((item) => item.name);

    setPreferences([...preferences, ...preferenceArr])
    setStepFormData({ "preferenceId": [event.target.value], "preferences": preferenceArr });
  };

  const submitForm = () => {
    if (preference?.length > 0) {
      if (preferenceId?.length === 0) {
        setError(true);
      } else {
        setError(false);
        handleNext();
      }
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm,
  }));
  const handleMenu = () => {
    handleMenuOpen((prev) => !prev);
  };
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
                {PreferenceDataLoading && !PreferenceDataSuccess && <Loader />}
                <Box className="service_box Preferences-card-input">
                  <Box className="card card-input">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">First Menu</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="First Menu"
                        onChange={(e) => {
                          handleSelectChange(e);
                        }}
                        value={preferenceId}
                      >
                        <MenuItem disabled>Select Preference</MenuItem>
                        {!PreferenceDataLoading && preference && PreferenceDataSuccess &&
                          preference?.length > 0 &&
                          preference?.map((item, index) => (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ))}
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
                  {/* <Box className="card card-input">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Second Menu</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="First Menu"
                        onChange={(e) => {
                          handleSelectChange(e);
                        }}
                      >
                        <MenuItem disabled>Select Preference</MenuItem>
                        {!PreferenceDataLoading && preference && PreferenceDataSuccess &&
                          preference.length > 0 &&
                          preference.map((item, index) => (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ))}
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
                  <Box className="card card-input">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Third Menu</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="First Menu"
                        onChange={(e) => {
                          handleSelectChange(e);
                        }}
                      >
                        <MenuItem disabled>Select Preference</MenuItem>
                        {!PreferenceDataLoading && preference && PreferenceDataSuccess &&
                          preference.length > 0 &&
                          preference.map((item, index) => (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                          ))}
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
                  </Box> */}

                  {PreferenceDataError || preference?.length === 0 && < Box >
                    <Typography className="no-data" >NO DATA FOUND </Typography></Box>}
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
