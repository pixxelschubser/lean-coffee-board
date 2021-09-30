import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  const text = 'This is a test text'
  const author = 'This is a test author'

  it('renders a question', () => {
    render(<Card text={text} author={author} />)
  })

  it('it has two paragraph tags', () => {
    render(<Card text={text} author={author} />)

    const paragraph1 = screen.getByText('This is a test text')
    const paragraph2 = screen.getByText('This is a test author')

    expect(paragraph1).toBeInTheDocument()
    expect(paragraph2).toBeInTheDocument()
  })
})
