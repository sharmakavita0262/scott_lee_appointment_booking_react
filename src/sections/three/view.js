import React, { useState } from 'react';
import { Box, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './view.section.scss';
import PropTypes from 'prop-types';

export default function ThreeView({ setStepFormData }) {
  const ServiceData = [
    { service_Category: 'Haircut' },
    { service_Category: 'Color' },
    { service_Category: 'HairSpa' },
  ];
  const [selectItem, setSelectItem] = useState([]);
  const handleSelectChange = (item, index) => {
    // setStepFormData(item)
    setSelectItem(item.target.value);
    console.log('selectmenu item', item.target.value, index, selectItem);
  };
  return (
    <div className="home">
      <Box>
        <Grid container spacing={3} className="box">
          <Grid xs={12} md={9} lg={9} className="service-card">
            <Box className="header">
              <Box className="heading">
                <Typography variant="h2">Preferences</Typography>
              </Box>
            </Box>
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
                        <MenuItem value={item.service_Category}>{item.service_Category}</MenuItem>
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
                {/* <Box className="card card-input">
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
                </Box> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
ThreeView.propTypes = {
  setStepFormData: PropTypes.func,
};
