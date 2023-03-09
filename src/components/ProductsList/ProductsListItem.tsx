import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { log } from 'console'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
        }
        this.onIncrementClick = this.onIncrementClick.bind(this)
    }
    onIncrementClick() {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        const { title, desc, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="Iphone" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-desc"> {this.props.desc}</div>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity}
                    </div>
                    <div className="product-price">{this.props.price}$</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
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
}

export default ProductsListItem
