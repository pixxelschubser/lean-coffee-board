import { useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import Form from './Form'
import { nanoid } from 'nanoid'

const INITIAL_DATA = [
  {
    key: '1',
    text: 'What is node.js?',
    author: 'Max Mustermann',
  },
  {
    key: '2',
    text: 'How does routing work?',
    author: 'Tina',
  },
  {
    key: '3',
    text: 'How to use mongo?',
    author: 'Ron Weasley',
  },
  {
    key: '4',
    text: 'What is a server?',
    author: 'Max Muster',
  },
]

if (localStorage.getItem('localQuestions') === null) {
  localStorage.setItem('localQuestions', JSON.stringify(INITIAL_DATA))
}

let localData = JSON.parse(localStorage.getItem('localQuestions'))

export default function Main() {
  const [data, setData] = useState(localData)

  return (
    <StyledMain>
      {data.map(question => (
        <Card
          id={question.key}
          text={question.text}
          author={question.author}
        />
      ))}
      <Form onCreateQuestion={createQuestionHandler} />
    </StyledMain>
  )

  function createQuestionHandler({ text, author }) {
    let key = nanoid()

    const newData = [
      ...data,
      {
        key: key,
        text: text,
        author: author,
      },
    ]
	setData(newData)
    localStorage.setItem('localQuestions', JSON.stringify(newData))
  }
}

const StyledMain = styled.main`
  padding: 20px;
  width: 100%;
  height: 100%;
  white-space: wrap;
`
