import { Container } from '@mui/system'
import Home from 'pages/Home/Home'

type Props = {}
const main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '60px 0',
            }}
        >
            <Home />
        </Container>
    )
}
export default main
