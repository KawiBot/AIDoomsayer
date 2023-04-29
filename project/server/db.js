const mongoose = require("mongoose")
const mongoKey = process.env.MONGO_KEY
// Replace 'your-database-uri' with the URI for your MongoDB database
mongoose
	.connect(`${mongoKey}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch((error) => {
		console.error(error)
	})
