import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography, CardMedia } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import './four.scss';
import { Loader } from 'src/components/loading-screen';
import { useGetProviderQuery } from '../../api/services'

const FourView = forwardRef((props, ref) => {
  const { handleMenuOpen, setStepFormData, handleNext, formValue } = props;
  const {
    data: ProviderData, isLoading: ProviderDataLoading, isSuccess: ProviderDataSuccess, isError: ProviderDataError } = useGetProviderQuery(formValue.serviceCategoryId)

  const [Error, setError] = useState(false);
  const [serviceProviderId, setServiceProviderId] = useState(formValue?.serviceProviderId ?? null);
  const { service_providers
  } = ProviderDataSuccess && ProviderData

  const selectServiceProvider = (item) => {

    setStepFormData({ "serviceProvider": item.f_name + item.l_name, "serviceProviderId": item.id });
    setServiceProviderId(item.id);
    setError(false);
  };

  const submitForm = () => {
    if (service_providers?.length > 0) {
      if (serviceProviderId === null) {
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
                  {' '}
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Service Provider
                </Typography>
              </Box>
            </Box>
            <Box className="service-provied-section">
              <Box className="dashbord">

                {ProviderDataLoading && !ProviderDataSuccess && <Loader />}

                <Grid container spacing={2}>
                  {ProviderDataSuccess && service_providers &&
                    service_providers?.length > 0 &&
                    service_providers?.map((item) => (
                      <Grid item xs={12} sm={6} md={4}>

                        <Box
                          className={serviceProviderId === item.id ? "product-service-selected-card" : "product-service-card"}
                          onClick={() => {
                            selectServiceProvider(item);
                          }}
                        >
                          <CardMedia
                            className="product-card-img"
                            component="img"
                            src={process.env.REACT_APP_LOCAL_IMAGE_URL + item.photoURL}
                            alt="Sample Image"
                          />
                          <Box className="product-card-data">
                            <Typography>{item.f_name}</Typography>
                            <Typography>{item.l_name}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                </Grid>
                {ProviderDataError || service_providers?.length === 0 && < Box >
                  <Typography className="no-data" >NO DATA FOUND </Typography></Box>}
                <Box className="provider-error-message">
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select service provider'}
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
FourView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
  formValue: PropTypes.string,
};
export default FourView;
