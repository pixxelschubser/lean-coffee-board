import styled from 'styled-components'
import Card from './Card';
import Form from './Form';

export default function Main({data}){
	return (
	<StyledMain>
		{data.map((question) => (
			<Card text={question.text} author={question.author} />
		))}
		<Form />
	</StyledMain>
	)
}

const StyledMain = styled.main`
    padding: 20px;
	width: 100%;
	height: 100%;
	white-space: wrap;
`
