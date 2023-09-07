import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Button,
} from '@mui/material';
import './seven.section.scss';
import { Link } from 'react-router-dom';

export default function SevenView() {
  const [selectedTab, setSelectedTab] = useState('one');
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Customer Information</Typography>
              </Box>
            </Box>

            <Box className="dashbord">
              <Tabs
                className="tabs-menu"
                value={selectedTab}
                onChange={handleTabChange}
                // textColor="success"
                // indicatorColor="success"
                // aria-label="secondary tabs example"
              >
                <Tab value="one" label="New Client" />
                <Tab value="two" label="Already have an account?" />
              </Tabs>
              {selectedTab === 'one' ? (
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} className="">
                      <Box className="">
                        <Box className="">
                          <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className="">
                      <Box className="">
                        <Box className="">
                          <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className="">
                      <Box className="">
                        <Box className="">
                          <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className="">
                      <Box className="">
                        <Box className="">
                          <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className="">
                      <Box className="">
                        <Box className="">
                          <TextField
                            id="outlined-basic"
                            label="Outlined"
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
                    <Grid item xs={12} md={12} lg={12} className="">
                      <Box className="">
                        <TextField
                          id="outlined-basic"
                          label="Outlined"
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className="">
                      <Box className="">
                        <Box className="">
                          <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
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
