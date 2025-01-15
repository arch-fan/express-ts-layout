import express from "express";
import { PORT } from "~/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		message: "Hello World",
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
