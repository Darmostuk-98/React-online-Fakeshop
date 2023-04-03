export type Product = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsArray: Product[] = [
    {
        id: 1,
        title: 'Iphone 12 pro max',
        desc: ' This is Iphone 12 pro max Gold ',
        type: 'Phone',
        capacity: '128 gb',
        price: 750,
        image: './images/iphone_black.jpeg',
    },
    {
        id: 2,
        title: 'Iphone 13 pro max',
        desc: ' This is Iphone 13 pro max Pink ',
        type: 'Phone',
        capacity: '512 gb',
        price: 1600,
        image: './images/iphone_black.jpeg',
    },
    {
        id: 3,
        title: 'Iphone 14 pro max',
        desc: ' This is Iphone 14 pro max Black ',
        type: 'Phone',
        capacity: '512 gb',
        price: 1500,
        image: './images/iphone_black.jpeg',
    },
    {
        id: 4,
        title: 'Iphone 8',
        desc: ' This is Iphone 8 ',
        type: 'Phone',
        capacity: '256 gb',
        price: 400,
        image: './images/iphone_black.jpeg',
    },
    {
        id: 5,
        title: 'Iphone X pro max',
        desc: ' This is Iphone X pro max Gold ',
        type: 'Phone',
        capacity: '256 gb',
        price: 700,
        image: './images/iphone_black.jpeg',
    },
    {
        id: 6,
        title: 'Iphone 11 pro max',
        desc: ' This is Iphone 11 pro max Silver ',
        type: 'Phone',
        capacity: '64 gb',
        price: 500,
        image: './images/iphone_black.jpeg',
    },
]

export const getProductsOgject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default ProductsArray
