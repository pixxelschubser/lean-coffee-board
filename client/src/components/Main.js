import styled from 'styled-components'
import Card from './Card';

export default function Main({data}){
	return (
	<StyledMain>
		{data.map((question) => (
			<Card text={question.text} author={question.author} />
		))}
	</StyledMain>
	)
}

const StyledMain = styled.main`
  main {
    padding: 20px; 
	white-space: wrap;
  }
`
