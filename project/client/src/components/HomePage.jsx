import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Navbar from "./Navbar"
import "../App.css"
import { Link } from "react-router-dom"
import formatDate from "../utils/dateFormatter"

const api = process.env.REACT_APP_API_URL

const HomeHeader = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;
`

const HomeDescription = styled.p`
	font-size: 18px;
`

const PostsContainer = styled.div`
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

const PostBox = styled.div`
	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const PostHeadline = styled.h1`
	font-size: 24px;
	margin-bottom: 10px;
	color: #333;
`

const PostDate = styled.p`
	font-size: 18px;
	color: #666;
`
const HomePageContent = styled.div`
	position: relative;
	z-index: 1;
`

function HomePage() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios
			.get(`${api}/api/posts`)
			.then((response) => {
				setPosts(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [`${api}/api/posts`])

	return (
		<div>
			<Navbar></Navbar>
			<HomePageContent>
				<HomeHeader>Welcome to My Blog</HomeHeader>
				<HomeDescription>
					This is the home page of my blog. Check out some of my latest posts
					below!
				</HomeDescription>
				<PostsContainer>
					{posts.map((post) => (
						<PostBox>
							<Link to={`/posts/${post._id}`} key={post._id}>
								<PostHeadline>{post.headline}</PostHeadline>
							</Link>
							<PostDate>{formatDate(post.date)}</PostDate>
						</PostBox>
					))}
				</PostsContainer>
			</HomePageContent>
		</div>
	)
}

export default HomePage
