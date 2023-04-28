const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
	author: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Posts",
	},
})

module.exports = mongoose.model("Comment", commentSchema)
