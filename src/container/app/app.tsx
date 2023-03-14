import Main from 'container/Main/main'
import Footer from 'container/Footer/footer'
import Header from 'container/Header/header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartdata] = useState<CartDataProps>({
        totalCount: 10,
        totalPrice: 100,
    })
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
