import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = ({
    title,
    desc,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="Iphone" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc"> {desc}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity:{capacity}</div>
                <div className="product-price">{price}$</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => onDecrement()}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrement()}
                        disabled={count >= 5}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
