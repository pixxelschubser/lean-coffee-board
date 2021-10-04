import styled from 'styled-components/macro'
import Card from './Card'
import Form from './Form'
import { nanoid } from 'nanoid'

export default function Main({cards}) {return (
    <StyledMain>
      {cards.map(question => (
        <Card
          key={question._id}
          text={question.text}
          author={question.author}
        />
      ))}
      <Form onCreateQuestion={createQuestionHandler} />
    </StyledMain>
  )

  function createQuestionHandler({ text, author }) {
    let key = nanoid()

  //   const newData = [
  //     ...data,
  //     {
  //       key: key,
  //       text: text,
  //       author: author,
  //     },
  //   ]
	// setData(newData)
  //   localStorage.setItem('localQuestions', JSON.stringify(newData))
  }
}

const StyledMain = styled.main`
  padding: 20px;
  width: 100%;
  height: 100%;
  white-space: wrap;
`
