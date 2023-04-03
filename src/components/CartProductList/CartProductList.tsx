import ProductsArray, { getProductsOgject, Product } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }

    productOgject?: {
        [id: number]: Product
    }
    CardItem?: any
}

const CartProductList = ({
    ProductsInCart,
    productOgject = getProductsOgject(ProductsArray),
    CardItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(ProductsInCart).map((productId) => (
                <CardItem
                    key={productId}
                    product={productOgject[parseInt(productId)]}
                    ProductCount={ProductsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default CartProductList
