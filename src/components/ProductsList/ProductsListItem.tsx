import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">{props.title}</div>
                <div className="product-desc"> {props.desc}</div>
                <div className="product-features">Type: {props.type}</div>
                <div className="product-features">
                    Capacity: {props.capacity}
                </div>
                <div className="product-price">{props.price}$</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
