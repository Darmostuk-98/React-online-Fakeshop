import Main from 'Container/Main/Main'
import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default App
