import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { formMapping } from '../utils/formConstant';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                {
                    formMapping.map((ele) => {
                        let {name,label,key,inputType,size}  = ele;
                        return <>

                            <Grid item xs={12} sm={size}>
                                <TextField
                                    required
                                    type={inputType}
                                    id="firstName"
                                    name={name}
                                    label={label}
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                        </>
                    })
                }

            </Grid>
        </React.Fragment>
    );
}