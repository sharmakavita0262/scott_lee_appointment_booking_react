import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './two.scss';
import PropTypes from 'prop-types';
import { Loader } from 'src/components/loading-screen';
import { useGetServiceDetailsQuery } from '../../api/services'

const TowView = forwardRef((props, ref) => {
  const { setStepFormData, formValue, handleMenuOpen, handleNext } = props;
  const {
    data: ServiceCategory, isLoading: ServiceCategoryLoading, isSuccess: ServiceCategorySuccess, isError: ServiceCategoryError } = useGetServiceDetailsQuery(formValue.serviceId)
  const [Error, setError] = useState(false);
  const [serviceCategoryId, setServiceCategoryId] = useState(formValue?.serviceCategoryId ?? null);
  const { subcategories
  } = ServiceCategorySuccess && ServiceCategory

  console.log('formValue page 2', formValue, subcategories, ServiceCategory);


  const selectServiceCategory = (item) => {
    setServiceCategoryId(item.id);
    setStepFormData({ "serviceCategoryId": item.id });
    setError(false);
  };
  const submitForm = () => {
    if (subcategories?.length > 0) {
      if (serviceCategoryId === null) {
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
              <Box className="heading Service-section">
                <Typography className="tab-title" variant="h2">
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Service Section
                </Typography>
                <Typography variant="p">CATEGORY</Typography>
              </Box>
            </Box>
            <Box className="category-section">
              <Box className="dashbord">
                {ServiceCategoryLoading && !ServiceCategorySuccess && <Loader />}

                <Box className="service_box">
                  {!ServiceCategoryLoading && subcategories && ServiceCategorySuccess &&
                    subcategories?.length > 0 &&
                    subcategories?.map((item, index) => (
                      <Box
                        key={index}
                        className="card"
                        sx={{
                          background: serviceCategoryId === item.id ? "linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2))rgb(255, 255, 255)" : ""
                        }}
                        onClick={() => {
                          selectServiceCategory(item);
                        }}
                      >
                        <Box className="card-userDetails">
                          <Box className="card-userName">
                            <Typography variant="h4">{item.service_name}</Typography>
                            <Typography variant="span">{item.service_dec}</Typography>
                          </Box>
                        </Box>
                        <Box className="services service-figure">
                          <Typography variant="span">${parseFloat(item.service_price).toFixed(2)}</Typography>
                          <Typography className="start-text" variant="span">
                            STARTS FROM
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  {ServiceCategoryError || subcategories?.length === 0 && < Box >
                    <Typography className="no-data" >NO DATA FOUND </Typography></Box>}
                </Box>
                <Box className="error-message">
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select service category'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
});
export default TowView;
TowView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
  formValue: PropTypes.object,
};
