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
        1: 5,
        2: 5,
    })

    const addProductToCart = (count: number, price: number) => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header ProductsInCart={ProductsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
