import { useEffect, useState } from 'react'
import Main from './components/Main'
import getCards from './services/getCards'

export default function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    // GET http://localhost:4000/api/cards
    getCards()
      .then(data => setCards(data))
      .catch(error => console.log(error))
  }, [])

  return ( 
    <Main cards={cards}/>
  )
}
