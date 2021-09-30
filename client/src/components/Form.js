import styled from "styled-components";

export default function Form({onCreateQuestion}){
	
	return (
		<StyledForm onSubmit={(event) => handleSubmit(event)}>
			<StyledLabel htmlFor="question__input">
				Your Question:
			</StyledLabel>
			<StyledInput 
				type="text"
				name="question__input"
				placeholder="Type in your Question here." 
				required
          		autoComplete="Off">
				</StyledInput>
			<StyledButton>
				Save
			</StyledButton>
		</StyledForm>
	)

	function handleSubmit(eventInside) {
		eventInside.preventDefault();
		const form = eventInside.target;
		const textInput = form.elements.question__input;

		onCreateQuestion({
			text: textInput.value,
			author: "anonymous"
		})

		form.reset();
	}

}

const StyledForm = styled.form`
	background-color: white;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 20px;
	border-top: 0.5px solid black;
`

const StyledLabel = styled.label`
	height: 0;
	width: 0;
	visibility: hidden;
	white-space: no-wrap;
	word-wrap: no-wrap;
	display: block;
`

const StyledInput = styled.input`
	padding: 10px 20px;
	font-size: 1rem;
	margin-right: 20px;
	width: calc(100% - 120px);
	display: inline-block;
	border-radius: 20px;
	border: none;
	background-color: rgba(0,0,0,0.2);
`

const StyledButton = styled.button`
	padding: 10px 20px;
	width: 100px;
	font-size: 1rem;
	display: inline-block;
	border-radius: 20px;
	border: none;
	background-color: rgba(60,180,0,0.3);
	cursor: pointer;
`