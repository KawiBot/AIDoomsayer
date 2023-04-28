import React, { useState } from "react"
import axios from "axios"
import Navbar from "./Navbar"
import styled from "styled-components"

const api = `${process.env.REACT_APP_API_URL}`

const FormWrapper = styled.div`
	max-width: 600px;
	margin: 0 auto;
`

const FormLabel = styled.label`
	font-size: 18px;
	margin-bottom: 5px;
`

const FormInput = styled.input`
	font-size: 16px;
	padding: 10px;
	border-radius: 5px;
	border: none;
	width: 100%;
	margin-bottom: 20px;

	&:focus {
		outline: none;
	}
`

const FormTextarea = styled.textarea`
	font-size: 16px;
	padding: 10px;
	border-radius: 5px;
	border: none;
	width: 100%;
	height: 200px;
	margin-bottom: 20px;

	&:focus {
		outline: none;
	}
`

const FormButton = styled.button`
	font-size: 16px;
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: #008000;
	color: #fff;
	cursor: pointer;

	&:hover {
		background-color: #005f00;
	}
`

function NewPostForm() {
	const [title, setTitle] = useState("")
	const [headline, setHeadline] = useState("")
	const [body, setBody] = useState("")
	const [conclusion, setConclusion] = useState("")

	const handleSubmit = async (event) => {
		event.preventDefault()

		const data = {
			title,
			body,
			headline,
			conclusion,
		}

		try {
			const response = await axios.post(`${api}/api/posts`, data)

			console.log(response.data)
			setTitle("")
			setHeadline("")
			setBody("")
			setConclusion("")
			alert("Post created successfully!")
		} catch (error) {
			console.log(error.response.data)
			alert("An error occurred while creating the post.")
		}
	}

	return (
		<div>
			<Navbar></Navbar>
			<FormWrapper>
				<form onSubmit={handleSubmit}>
					<div>
						<FormLabel htmlFor="title">Title:</FormLabel>
						<FormInput
							type="text"
							id="title"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
					</div>
					<div>
						<FormLabel htmlFor="headline">Headline:</FormLabel>
						<FormTextarea
							id="headline"
							value={headline}
							onChange={(event) => setHeadline(event.target.value)}
						/>
					</div>
					<div>
						<FormLabel htmlFor="body">Body:</FormLabel>
						<FormTextarea
							id="body"
							value={body}
							onChange={(event) => setBody(event.target.value)}
						/>
					</div>
					<div>
						<FormLabel htmlFor="conclusion">Conclusion:</FormLabel>
						<FormTextarea
							id="conclusion"
							value={conclusion}
							onChange={(event) => setConclusion(event.target.value)}
						/>
					</div>
					<FormButton type="submit">Create Post</FormButton>
				</form>
			</FormWrapper>
		</div>
	)
}

export default NewPostForm
	