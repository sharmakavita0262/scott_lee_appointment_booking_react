import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Typography, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';

import './seven.section.scss';
import { Link } from 'react-router-dom';

export default function SevenView({ handleMenuOpen, setStepFormData }) {
  const [selectedTab, setSelectedTab] = useState('one');
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleMenu = () => {
    console.log('click on hello');
    handleMenuOpen((prev) => !prev);
  };

  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">
                  <MenuIcon
                    className="hamburger-icon"
                    onClick={handleMenu}
                    sx={{ cursor: 'pointer' }}
                  />
                  Customer Information
                </Typography>
              </Box>
            </Box>

            <Box className="dashbord">
              <Tabs className="tabs-menu" value={selectedTab} onChange={handleTabChange}>
                <Tab value="one" label="Contact Information" />
                <Typography className="logout-link">
                  Not You ? <Link to="#">Logout</Link>
                </Typography>
                {/* <Tab value="two" className="tab-link" label="Not You ? Logout" /> */}
              </Tabs>

              {selectedTab === 'one' ? (
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box>
                        <Box>
                          <TextField
                            id="outlined-basic"
                            label="FIRST NAME"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box>
                        <Box>
                          <TextField
                            id="outlined-basic"
                            label="LAST NAME"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box>
                        <Box>
                          <TextField
                            id="outlined-basic"
                            label="PHONE NUMBER"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Box>
                        <Box>
                          <TextField
                            id="outlined-basic"
                            label="EMAIL"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Box>
                        <Box>
                          <TextField
                            id="outlined-basic"
                            label="COMMENTS"
                            variant="outlined"
                            fullWidth
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
                        <TextField id="outlined-basic" label="EMAIL" variant="outlined" fullWidth />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Box>
                        <Box>
                          <TextField
                            id="outlined-basic"
                            label="PASSWORD"
                            variant="outlined"
                            type="password"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Box className="links">
                      <Box className="forget-links">
                        <Link href="#">Forget Password?</Link>
                      </Box>
                      <Box className="login-button">
                        <Button variant="contained">Login</Button>
                      </Box>
                    </Box>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
SevenView.propTypes = {
  setStepFormData: PropTypes.func,
  handleMenuOpen: PropTypes.func,
};
