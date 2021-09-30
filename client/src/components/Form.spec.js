import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Form from './Form'

describe('Form', () => {
	it('renders form elements', () => {
		const mockOnCreateQuestion = jest.fn();
		render(<Form onCreateQuestion={mockOnCreateQuestion}/>);

		const label = screen.getByText('Your Question:')
		expect(label).toBeInTheDocument();

		const input = screen.getByPlaceholderText('Type in your Question here.');
		expect(input).toBeInTheDocument();

		const button = screen.getByRole("button");
    	expect(button).toBeInTheDocument();
	})

	it('Passing input value to the onCreateQuestion function works as expected:', () => {
		const mockOnCreateQuestion = jest.fn();
		render(<Form onCreateQuestion={mockOnCreateQuestion}/>);

		const input = screen.getByPlaceholderText('Type in your Question here.');
		userEvent.type(input, "Does this test work?")
		
		const button = screen.getByRole("button");
    	userEvent.click(button);

		expect(mockOnCreateQuestion).toHaveBeenCalledWith({
			text: "Does this test work?",
			author: "anonymous"
		})
	})
})