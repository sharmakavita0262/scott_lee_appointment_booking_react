import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './one.scss';
import PropTypes from 'prop-types';
import { useGetServicesQuery } from '../../api/services'
import { Loader } from '../../components/loading-screen'

const OneView = forwardRef((props, ref) => {
  const {
    data: AllServiceData, isLoading: AllServiceDataLoading, isSuccess: AllServiceDataSuccess, isError: AllServiceDataError } = useGetServicesQuery()
  const { setStepFormData, handleMenuOpen, formValue, handleNext } = props;
  const [Error, setError] = useState(false);
  const [serviceId, setServiceId] = useState(formValue?.serviceId ?? null);
  const { services } = AllServiceDataSuccess && AllServiceData

  const selectService = (item) => {
    setStepFormData({ "serviceId": item.id });
    setServiceId(item.id);
    setError(false);
  };
  const submitForm = () => {
    if (services?.length > 0) {
      if (serviceId === null) {
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
      <Box>
        <Grid container spacing={3} className="box">
          <Grid item xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography className="tab-title" variant="h2">
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Service Section
                </Typography>
              </Box>
            </Box>
            <Box className="service-section">
              <Box className="dashbord">
                {AllServiceDataLoading && !AllServiceDataSuccess && <Loader />}
                <Box className="service_box">
                  {!AllServiceDataLoading && AllServiceDataSuccess && services &&
                    services?.length > 0 &&
                    services?.map((item, index) => (
                      <Box
                        key={index}
                        className={serviceId === item.id ? "selected-card" : "card"}
                        onClick={() => {
                          selectService(item);
                        }}
                      >
                        <Box className="card-userDetails">
                          < Box className="card-userImg" >
                            <img
                              src={process.env.REACT_APP_LOCAL_IMAGE_URL + item.image_url}
                              alt="temp"
                            />
                          </Box>
                          <Box className="card-userName">
                            <Typography variant="h4">{item.name}</Typography>
                          </Box>
                        </Box>
                        <Box className="services">
                          <Typography variant="span">{item.Available}Services</Typography>
                        </Box>
                      </Box>
                    ))}
                  {AllServiceDataError || services?.length === 0 && < Box >
                    <Typography className="no-data" >NO DATA FOUND </Typography></Box>}
                </Box>

                <Box className="error-message">
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select service'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid >
        </Grid >
      </Box >
    </div >
  );
});
OneView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
  formValue: PropTypes.object,
};
export default OneView;
