import PropTypes from 'prop-types'; // @mui
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// ----------------------------------------------------------------------

export default function Loader({ sx, ...other }) {
    return (
        <Box
            sx={{
                px: 5,
                width: 1,
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx,
            }}
            {...other}
        >
            <CircularProgress color="success" />
        </Box>
    );
}

Loader.propTypes = {
    sx: PropTypes.object,
};
