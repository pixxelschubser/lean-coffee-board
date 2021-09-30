import styled from "styled-components";

export default function Form(){
	
	
	return (
		<StyledForm>
			<StyledLabel for="question__input">
				Your Question:
			</StyledLabel>
			<StyledInput id="question__input"placeholder="Type in your Question here.">
				</StyledInput>
			<StyledButton>
				Save
			</StyledButton>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	position: fixed;
	bottom: 20px;
	left: 20px;
	width: calc(100% - 40px);
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