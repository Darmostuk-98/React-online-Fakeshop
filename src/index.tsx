import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'

interface ItitleProps {
    text: string
}

const Title = (props: ItitleProps) => {
    console.log(props)

    return <h1>Hello {props.text}</h1>
}
type ContentProps = {
    text1: string
}
function App() {
    return (
        <>
            <Title text="Hello" />
            <Title text="Goodbye" />
            <Content
                text1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aspernatur.
"
                text2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aspernatur.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aspernatur.
                "
                year={2023}
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
