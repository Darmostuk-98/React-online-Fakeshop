import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import './ProductsListItem.scss'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center">
                Products List
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone 12 pro max"
                        desc="12 pro max Silver"
                        type="Phone"
                        capacity="512 gb"
                        price={1100}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone 13 pro max"
                        desc="13 pro max Gold"
                        type="Phone"
                        capacity="256 gb"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="Iphone 14 pro max"
                        desc="14 pro max Black"
                        type="Phone"
                        capacity="1000 gb"
                        price={1450}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
