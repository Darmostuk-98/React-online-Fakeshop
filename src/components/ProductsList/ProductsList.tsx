import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import ProductsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography variant="h3" align="center">
                Products List
            </Typography>

            <Grid container spacing={4}>
                {ProductsArray.map(
                    ({ id, title, desc, type, capacity, price, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            {''}
                            <ProductsListItem
                                id={id}
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
