import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Box, Tabs, Tab, Grid, Typography, TextField, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import MenuIcon from '@mui/icons-material/Menu';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import './six.scss';
import { Link } from 'react-router-dom';
import { Form, Formik, ErrorMessage } from 'formik';
import { RegisterValidator, LoginValidator } from 'src/components/validators/validationSchema';

const SixView = forwardRef((props, ref) => {
  const { setStepFormData, handleMenuOpen, handleNext } = props;
  const formRef = useRef();

  const formRef = useRef();
  const [formKey, setFormKey] = useState(0); // Add this key state

  const initialRegValues = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    comments: '',
  };
  const initialLoginValues = {
    uesr_email: '',
    password: '',
  };
  const [selectedTab, setSelectedTab] = useState('one');
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setFormKey((prevKey) => prevKey + 1);
  };
  const submitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
      handleFormikSubmit(formRef.current.values, formRef.current.errors);
    }
  };
  const handleFormikSubmit = (values, errors) => {
    const a = Object.values(values).every((value) => value !== '');
    const b = Object.values(errors).every((value) => value === '');
    if (a && b) {
      if (selectedTab === 'one') {
        setStepFormData(values);
        handleNext();
        console.log('logic for register page');
      } else {
        setStepFormData(values);
        handleNext();
        console.log('logic for login page');
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
          <Grid item xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography className="tab-title" variant="h2">
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Customer Information
                </Typography>
              </Box>
            </Box>
            <Box className="customer-information-section">
              <Box className="dashbord">
                <Tabs className="tabs-menu" value={selectedTab} onChange={handleTabChange}>
                  <Tab value="one" label="New Client" />
                  <Tab value="two" label="Already have an account?" />
                </Tabs>
                <Formik
                  key={formKey}
                  innerRef={formRef}
                  initialValues={selectedTab === 'one' ? initialRegValues : initialLoginValues}
                  validationSchema={selectedTab === 'one' ? RegisterValidator : LoginValidator}
                >
                  {({ values, handleChange, handleBlur, errors }) => (
                    <Form>
                      {console.log('errors,values called==>', errors)}
                      {selectedTab === 'one' ? (
                        <Box>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                              <Box>
                                <Box>
                                  <TextField
                                    id="first_name"
                                    name="first_name"
                                    label="FIRST NAME"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                  />
                                  <ErrorMessage
                                    className="error-div"
                                    name="first_name"
                                    component="div"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                              <Box>
                                <Box>
                                  <TextField
                                    id="last_name"
                                    name="last_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                    label="LAST NAME"
                                    variant="outlined"
                                    fullWidth
                                  />
                                  <ErrorMessage
                                    className="error-div"
                                    name="last_name"
                                    component="div"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                              <Box>
                                <Box>
                                  <TextField
                                    id="phone"
                                    name="phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    label="PHONE NUMBER"
                                    variant="outlined"
                                    fullWidth
                                  />
                                  <ErrorMessage
                                    className="error-div"
                                    name="phone"
                                    component="div"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                              <Box>
                                <Box>
                                  <TextField
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    label="EMAIL"
                                    variant="outlined"
                                    fullWidth
                                  />
                                  <ErrorMessage
                                    className="error-div"
                                    name="email"
                                    component="div"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Box>
                                <Box>
                                  <TextField
                                    id="comments"
                                    name="comments"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comments}
                                    label="COMMENTS"
                                    variant="outlined"
                                    fullWidth
                                  />
                                  <ErrorMessage
                                    className="error-div"
                                    name="comments"
                                    component="div"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <Box className="account-box">
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12}>
                              <Box>
                                <TextField
                                  id="uesr_email"
                                  name="uesr_email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  label="EMAIL"
                                  variant="outlined"
                                  fullWidth
                                />
                                <ErrorMessage
                                  className="error-div"
                                  name="uesr_email"
                                  component="div"
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                              <Box>
                                <Box>
                                  <TextField
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    label="PASSWORD"
                                    variant="outlined"
                                    fullWidth
                                  />
                                  <ErrorMessage
                                    className="error-div"
                                    name="password"
                                    component="div"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                            <Box className="links">
                              <Box className="forget-links">
                                <Link href="#">Forget Password?</Link>
                              </Box>
                            </Box>
                          </Grid>
                        </Box>
                      )}
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});
SixView.propTypes = {
  setStepFormData: PropTypes.func,
  handleNext: PropTypes.func,
  handleMenuOpen: PropTypes.func,
  handleNext: PropTypes.func,
};
export default SixView;
