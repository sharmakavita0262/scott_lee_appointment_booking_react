import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import isWeekend from 'date-fns/isWeekend';

function CustomDatePicker(props) {
  const { value, onChange } = props;
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          value={value}
          shouldDisableDate={isWeekend}
          defaultValue={dayjs('2022-04-17')}
          onChange={onChange}
        />
      </LocalizationProvider>
    </div>
  );
}
CustomDatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string,
};
export default CustomDatePicker;
