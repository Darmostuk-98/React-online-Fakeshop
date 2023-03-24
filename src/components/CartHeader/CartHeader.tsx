import ProductsArray, { getProductsOgject, Product } from 'utils/productsArray'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }

    productOgject?: {
        [id: number]: Product
    }
}
const CartHeader = ({
    ProductsInCart,
    productOgject = getProductsOgject(ProductsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(ProductsInCart).map((productId) => (
                <div key={productId}>
                    {productOgject[parseInt(productId)].title}
                    {ProductsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
