import Footer from 'container/Footer/footer'
import Header from 'container/Header/header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import Main from 'container/Main/main'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [ProductsInCart, setPoductsInCart] = useState<ProductsInCart>({
        1: 1,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        setPoductsInCart((prevSate) => ({
            ...prevSate,
            [id]: (prevSate[id] || 0) + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header ProductsInCart={ProductsInCart} />
            <button onClick={() => addProductToCart(2, 1)}>
                Add to cart(2 product id, count1)
            </button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
