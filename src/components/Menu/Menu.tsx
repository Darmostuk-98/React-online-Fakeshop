import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link className="nav-link " to="/">
                    Home
                </Link>{' '}
                {''}
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">
                <Link className="nav-link" to="cart">
                    Cart
                </Link>{' '}
            </Button>
        </>
    )
}
export default Menu
