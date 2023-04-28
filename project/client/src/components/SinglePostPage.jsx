import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"

const api = process.env.REACT_APP_API_URL

const PostWrapper = styled.div`
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 40px;
	padding: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
`

function SinglePostPage() {
	const { postId } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		axios.get(`${api}/api/posts/${postId}`).then((response) => {
			setPost(response.data)
		})
	}, [postId])

	if (!post) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<Navbar />
			<PostWrapper>
				<head>
					<title>{post.title}</title>
				</head>
				<header>
					<h1>{post.headline}</h1>
				</header>
				<main>
					<p>{post.body}</p>
				</main>
				<footer>
					<p>{post.conclusion}</p>
				</footer>
			</PostWrapper>
		</div>
	)
}

export default SinglePostPage
