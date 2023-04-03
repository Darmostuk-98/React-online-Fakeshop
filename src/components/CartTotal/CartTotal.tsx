import ProductsArray, { getProductsOgject, Product } from 'utils/productsArray'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }

    productOgject?: {
        [id: number]: Product
    }
}
const CartTotal = ({
    ProductsInCart,
    productOgject = getProductsOgject(ProductsArray),
}: Props) => {
    return (
        <div>
            Total :{' '}
            {Object.keys(ProductsInCart).reduce(
                (total, productId) =>
                    total +
                    productOgject[parseInt(productId)].price *
                        ProductsInCart[parseInt(productId)],
                0
            )}{' '}
            $
        </div>
    )
}
export default CartTotal
