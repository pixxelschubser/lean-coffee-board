import { useState } from 'react'
import styled from 'styled-components'
import Card from './Card';
import Form from './Form';

const INITIAL_DATA = [
  {
	key: "1",
    text: 'What is node.js?',
    author: 'Max Mustermann',
  },
  {
	key: "2",
    text: 'How does routing work?',
    author: 'Tina',
  },
  {
	key: "3",
    text: 'How to use mongo?',
    author: 'Ron Weasley',
  },
  {
	key: "4",
    text: 'What is a server?',
    author: 'Max Muster',
  },
]

export default function Main(){
	const [data, setData] = useState(INITIAL_DATA)

	return (
	<StyledMain>
		{data.map((question) => (
			<Card key={question.key} text={question.text} author={question.author} />
		))}
		<Form onCreateQuestion={createQuestionHandler}/>
	</StyledMain>
	)

	function createQuestionHandler({text, author}) {
		let i = data.length
		i++
		const newData = [
			...data,
			{
				key: i,
				text: text,
				author: author
			}
		]
		setData(newData)
		console.log(i)
	}
}

const StyledMain = styled.main`
    padding: 20px;
	width: 100%;
	height: 100%;
	white-space: wrap;
`
