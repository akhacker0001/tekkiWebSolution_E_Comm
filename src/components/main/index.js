import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddressForm from './Form';
import BasicTable from './Table';

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding:'20px' }}    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <AddressForm />
        </Grid>
        <Grid item xs={12} lg={6}>
          <BasicTable />
        </Grid>
      </Grid>
    </Box>
  );
}