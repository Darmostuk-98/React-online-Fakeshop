import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    ProductCount: number
}
const CartProductListItem = ({ product, ProductCount }: Props) => {
    return (
        <div>
            {product.title} :{ProductCount}
        </div>
    )
}
export default CartProductListItem
