const mongoose = require("mongoose")

// Replace 'your-database-uri' with the URI for your MongoDB database
mongoose
	.connect(
		"mongodb+srv://kawibot1337:PP0io1IXOGCM2eSA@aidoomsayer.xyv225o.mongodb.net/test",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch((error) => {
		console.error(error)
	})
