import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'

type Props = {
    product: Product
    ProductCount: number
}

const CartProductListItemExtended = ({ product, ProductCount }: Props) => {
    return (
        <>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <div className="product-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div>{product.title}</div>
                        <p>Price for one item {product.price}</p>
                        <p>Count:{ProductCount} </p>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined">
                            <DeleteIcon />
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}
export default CartProductListItemExtended
