import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicTable from '../main/Table';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MainContext } from '../context/MainProvider';
const Review = () => {
    const {userData} = useContext(MainContext)
    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}    >
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sx={{textAlign:"left"}} >
                    {Object.keys(userData).map(ele=>(
                         <Typography variant="h6" gutterBottom>
                         {ele.toUpperCase()} : {userData[ele]}
                       </Typography>
                    ))}
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                    <BasicTable />

                </Grid>
            </Grid>
            <Button variant="contained">Submit Order</Button>
        </Box>
    )
}

export default Review
