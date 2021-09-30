import styled from 'styled-components'

export default function Card({ text, author }) {
  return (
    <StyledArticle>
      <StyledText>{text}</StyledText>
      <StyledAuthor>{author}</StyledAuthor>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid black;
  display: block;

  @media only screen and (min-width: 880px) {
    display: inline-block;
    margin: 0 20px 20px 0;
  }
`

const StyledText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`

const StyledAuthor = styled.p`
  font-size: 1rem;
  text-align: right;
`
