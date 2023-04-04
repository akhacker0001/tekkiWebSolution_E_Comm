import React from 'react'
import data from "../data/data.json"
import Container from '@mui/material/Container';
import ProductCard from './ProductCard';


const Dashboard = () => {

    return (
        <Container maxWidth="lg" sx={{display:"flex",flexWrap:"wrap"}} >
            {
                data.map((ele) => {
                    return <ProductCard product={ele} />
                })
            }

        </Container>
    )
}

export default Dashboard
