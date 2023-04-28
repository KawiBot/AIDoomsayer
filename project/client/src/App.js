import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import NewPostForm from "./components/NewPostForm"
import PostPages from "./components/PostPages"
import SinglePostPage from "./components/SinglePostPage"
import "./App.css"
import About from "./components/About"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage posts={[]} />} />
				<Route path="/newpost" element={<NewPostForm />} />
				<Route path="/posts" element={<PostPages />} />
				<Route path="/posts/:postId" element={<SinglePostPage />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	)
}

export default App
