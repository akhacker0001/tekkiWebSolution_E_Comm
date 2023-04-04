import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MainContext } from '../context/MainProvider';

export default function ProductCard(props) {
    let { id, image, description, price, category } = props.product;
    const {  handleSetCartItems, itemKeys } = React.useContext(MainContext)
    return (
        <Card sx={{ maxWidth: 345, margin: "10px" }} id={id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained" disabled={itemKeys[id]}  onClick={()=>handleSetCartItems(props.product)} >
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}