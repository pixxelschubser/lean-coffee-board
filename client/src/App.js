import { useState } from 'react'
import Main from './components/Main'

const INITIAL_DATA = [
  {
    text: 'What is node.js?',
    author: 'Max Mustermann',
  },
  {
    text: 'How does routing work?',
    author: 'Tina',
  },
  {
    text: 'How to use mongo?',
    author: 'Ron Weasley',
  },
  {
    text: 'What is a server?',
    author: 'Max Muster',
  },
]

export default function App() {
  const [data, setData] = useState(INITIAL_DATA)

  return (
    <>
      <Main data={data} />
    </>
  )
}
