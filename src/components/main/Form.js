import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { formMapping } from '../utils/formConstant';
import { MainContext } from '../context/MainProvider';

export default function AddressForm() {
    const { formError, handleSubmitData, handleSetUserData, userData } = React.useContext(MainContext)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                {
                    formMapping.map((ele) => {
                        let { name, label, key, inputType, size } = ele;
                        return <>

                            <Grid item xs={12} sm={size}>
                                <TextField
                                    onChange={handleSetUserData}
                                    error={formError[name].length}
                                    required
                                    type={inputType}
                                    id="firstName"
                                    name={name}
                                    value={userData[name]}
                                    label={formError[name] || label}
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                        </>
                    })
                }
                <Button variant="contained" sx={{ marginTop: "20px" }}  onClick={handleSubmitData} >Submit</Button>
            </Grid>
        </React.Fragment>
    );
}