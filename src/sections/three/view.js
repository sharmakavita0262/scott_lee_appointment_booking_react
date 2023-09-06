import React from 'react';
import { Box, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './view.section.scss';

export default function ThreeView() {
  return (
    <div className="home">
      <Box sx={{}}>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Preferences</Typography>
              </Box>
            </Box>
            <Box className="dashbord">
              <Box className="service_box Preferences-card-input">
                <Box className="card card-input">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
