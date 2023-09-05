import { Box, Button, Container, Grid, Typography, MobileStepper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import OneView from 'src/sections/one/view';

// ----------------------------------------------------------------------

export default function Page() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title> Dashboard: Service</title>
      </Helmet>
      <OneView />
    </>
  );
}
