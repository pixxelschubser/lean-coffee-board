import { useEffect, useState } from 'react'
import Main from './components/Main'

export default function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    // GET http://localhost:4000/api/cards
    fetch('/api/cards')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error))
  }, [])
  
  return ( 
    <Main cards={cards}/>
  )
}
