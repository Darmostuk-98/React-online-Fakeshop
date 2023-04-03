import Footer from 'container/Footer/footer'
import Header from 'container/Header/header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Container } from '@mui/system'
import CartPage from 'pages/Cart/CartPage'

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
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>

            {/* <Main addProductToCart={addProductToCart} /> */}
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
