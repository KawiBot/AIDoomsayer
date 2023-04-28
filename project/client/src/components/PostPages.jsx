import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import formatDate from "../utils/dateFormatter"

const api = process.env.REACT_APP_API_URL

const PostWrapper = styled.div`
	max-width: 1000px;
	margin-bottom: 40px;
	padding: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	background-color: #fff;

	&:hover {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
	}
`

const PostTitle = styled.h1`
	font-size: 32px;
	margin-bottom: 10px;
	color: #222;
`

const PostDate = styled.small`
	font-size: 16px;
	color: #999;
	display: block;
	margin-top: 5px;
`

const PostList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`

function PostPages() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios.get(`${api}/api/posts`).then((response) => {
			setPosts(response.data)
		})
	}, [])

	return (
		<>
			<Navbar />
			<PostList>
				{posts.map((post) => (
					<PostWrapper key={post._id}>
						<Link to={`/posts/${post._id}`}>
							<PostTitle>{post.headline}</PostTitle>
							<PostDate>{formatDate(post.date)}</PostDate>
						</Link>
					</PostWrapper>
				))}
			</PostList>
		</>
	)
}

export default PostPages
