import React, { useState, useEffect } from "react"
import axios from "axios"

function EditPostForm(props) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	useEffect(() => {
		axios
			.get(`/api/posts/${props.postId}`)
			.then((response) => {
				setTitle(response.data.title)
				setContent(response.data.content)
			})
			.catch((error) => {
				// Handle error
			})
	}, [props.postId])

	const handleSubmit = (event) => {
		event.preventDefault()

		const data = {
			title: title,
			content: content,
		}

		axios
			.put(`/api/posts/${props.postId}`, data)
			.then((response) => {
				// Handle successful form submission
			})
			.catch((error) => {
				// Handle form submission error
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="content">Content:</label>
				<textarea
					id="content"
					value={content}
					onChange={(event) => setContent(event.target.value)}
				/>
			</div>
			<button type="submit">Update Post</button>
		</form>
	)
}

export default EditPostForm
