import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ ProductsInCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    ProductsInCart={ProductsInCart}
                    CardItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal ProductsInCart={ProductsInCart} />
        </div>
    )
}
export default CartPage
