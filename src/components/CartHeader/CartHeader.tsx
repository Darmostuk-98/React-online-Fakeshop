import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ ProductsInCart }: Props) => {
    return (
        <div>
            <CartProductList ProductsInCart={ProductsInCart} />
            <CartTotal ProductsInCart={ProductsInCart} />
        </div>
    )
}
export default CartHeader
