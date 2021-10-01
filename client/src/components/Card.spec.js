import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  const text = 'This is a test text'
  const author = 'Ben'

  it('it has two paragraph tags', () => {
    render(<Card text={text} author={author} />)

    const paragraphText = screen.getByText('This is a test text')
    const paragraphAuthor = screen.getByText('Ben')

    expect(paragraphText).toBeInTheDocument()
    expect(paragraphAuthor).toBeInTheDocument()
  })
})
