import React from 'react'
import ReactDOM from 'react-dom/client'

// JSX Упрощенный вариант записи новых элементов в React

const h1 = React.createElement('h1', { id: 'title' }, 'Hello React')

let a = 10
let b = 'Hello World'

const list1 = (
    <ul>
        <li>list item 1 {a + a}</li>
        <li>list item 2 {b}</li>
        <li>list item 3</li>
    </ul>
)

//-------------------------------

const list = React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'list Item 1'),
    React.createElement('li', null, 'list Item 2'),
    React.createElement('li', null, 'list Item 3')
)
const content = (
    <div>
        {h1}
        {list}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{list1}</React.StrictMode>)
