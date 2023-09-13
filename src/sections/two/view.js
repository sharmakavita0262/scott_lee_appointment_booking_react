import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './two.scss';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const TowView = forwardRef((props, ref) => {
  const { setStepFormData, formValue, handleMenuOpen, handleNext } = props;
<<<<<<< HEAD
  const [Error, setError] = useState(false);
  const [serviceCategory, setServiceCategory] = useState(formValue?.sc_id ?? null);
  console.log('formValue page 2', formValue);

  const ServiceData = [
    { sc_id: 1, service_name: 'Haircut', description: 'sub- abc', price: 1000 },
    { sc_id: 2, service_name: 'Color', description: 'sub- abc', price: 5000 },
    { sc_id: 3, service_name: 'HairSpa', description: 'sub- abc', price: 8000 },
  ];

  const selectServiceCategory = (item) => {
    setServiceCategory(item.id);
    setStepFormData(item);
    setError(false);
  };
  const submitForm = () => {
    if (serviceCategory === null) {
      setError(true);
    } else {
      setError(false);
      handleNext();
=======
  const [Error, setError] = useState(false)
  const [serviceCategory, setServiceCategory] = useState(formValue.service_name ?? null)
  console.log('formValue page 2', formValue);

  const ServiceData = [
    { service_name: 'Haircut', description: 'sub- abc', price: 1000 },
    { service_name: 'Color', description: 'sub- abc', price: 5000 },
    { service_name: 'HairSpa', description: 'sub- abc', price: 8000 },
  ];

  const selectServiceCategory = (item) => {
    setServiceCategory(item)
    setStepFormData(item)
    setError(false)
  };
  const submitForm = () => {
    if (serviceCategory === null) {
      setError(true)
    } else {
      setError(false)
      handleNext()
>>>>>>> 98d6d9665a483d37a1438b4b6d4b65af0ee90fdb
    }
  };
  useImperativeHandle(ref, () => ({
    submitForm,
  }));
  const handleMenu = () => {
    handleMenuOpen((prev) => !prev);
  };
<<<<<<< HEAD
  console.log('serviceCategory===>', serviceCategory);
=======
  console.log('serviceCategory===>', serviceCategory)
>>>>>>> 98d6d9665a483d37a1438b4b6d4b65af0ee90fdb
  return (
    <div className="home">
      <Helmet>
        <title> Dashboard: Service</title>
      </Helmet>
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
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
                <Box className="service_box">
                  {ServiceData &&
                    ServiceData.length > 0 &&
                    ServiceData.map((item, index) => (
                      <Box
                        className="card"
                        onClick={() => {
                          selectServiceCategory(item);
                        }}
                      >
                        <Box className="card-userDetails">
                          <Box className="card-userName">
                            <Typography variant="h4">{item.service_name}</Typography>
                            <Typography variant="span">{item.description}</Typography>
                          </Box>
                        </Box>
                        <Box className="services service-figure">
                          <Typography variant="span">${item.price.toFixed(2)}</Typography>
                          <Typography className="start-text" variant="span">
                            STARTS FROM
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                </Box>
                <Box className="error-message">
<<<<<<< HEAD
                  <Typography sx={{ fontSize: '18px' }}>
                    {Error && 'Please select service category'}
                  </Typography>
=======
                  <Typography sx={{ fontSize: "18px" }}>{Error && "Please select service category"}</Typography>
>>>>>>> 98d6d9665a483d37a1438b4b6d4b65af0ee90fdb
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});
export default TowView;
TowView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
  formValue: PropTypes.string,
};
