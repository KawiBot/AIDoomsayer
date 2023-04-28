const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./db")
const Posts = require("./models/Posts")
const Comment = require("./models/Comment")
const postsRouter = require("./routes/api/posts")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json())
app.use(cors())

// Use the /api/posts endpoint
app.use("/api/posts", postsRouter)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
