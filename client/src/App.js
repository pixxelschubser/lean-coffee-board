import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Card from './components/Card'
import Form from './components/Form'

import getCards from './services/getCards'
import postCard from './services/createCard'

export default function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    // GET http://localhost:4000/api/cards
    getCards()
      .then(data => setCards(data))
      .catch(error => console.log(error))
  }, [])

  function createCard(card){
    postCard(card)
    .then(response => response.json())
    .then(data => setCards([...cards, data]))
    .catch(error => console.error(error))
  }

  return ( 
      <StyledMain>
        {cards.map(question => (
        <Card
          key={question._id}
          text={question.text}
          author={question.author}
        />
      ))}
      <Form onCreateQuestion={createCard}/>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding: 20px;
  width: 100%;
  height: 100%;
  white-space: wrap;
`
