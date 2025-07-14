const express = require("express");
const cors = require("cors");
const routes = require("./routes/authroutes");

const app = express();
app.use(express.json());

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: ["http://localhost:3000", "https://taskify-task-manager.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Only if you're using cookies or auth headers
  })
);

app.use("/", routes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
