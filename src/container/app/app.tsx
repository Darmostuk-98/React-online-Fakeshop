import Main from 'Container/Main/main'
import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            ws
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
