const express = require("express")
const router = express.Router()
const Posts = require("../../models/Posts")
const Comment = require("../../models/Comment")

// Get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Posts.find()
		res.json(posts)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

// Get one post
router.get("/:id", getPost, (req, res) => {
	res.json(res.post)
})

// Create one post
router.post("/", async (req, res) => {
	const post = new Posts({
		title: req.body.title,
		headline: req.body.headline,
		date: new Date(),
		body: req.body.body,
		conclusion: req.body.conclusion,
	})

	try {
		const newPost = await post.save()
		res.status(201).json(newPost)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
})

// Update one post
router.patch("/:id", getPost, async (req, res) => {
	if (req.body.title != null) {
		res.post.title = req.body.title
	}

	if (req.body.body != null) {
		res.post.body = req.body.body
	}

	try {
		const updatedPost = await res.post.save()
		res.json(updatedPost)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
})

// Delete one post
router.delete("/:id", getPost, async (req, res) => {
	try {
		await res.post.deleteOne()
		res.json({ message: "Post deleted" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

// Middleware function to get a single post by id
async function getPost(req, res, next) {
	let post
	try {
		post = await Posts.findById(req.params.id)
		if (post == null) {
			return res.status(404).json({ message: "Cannot find post" })
		}
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}

	res.post = post
	next()
}

module.exports = router
