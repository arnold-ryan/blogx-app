const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const { upload, imgUpload } = require("./storage/multer");
const port = process.env.PORT;

// CONNECT TO THE DATABASE
connectDB();

const app = express();

// ADD MIDDLEWARE FOR PARSING DATA
// middleware are functions that execute between the request and response cycle
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// UPLOAD FILES WITH MULTER
app.post("/api/upload", upload, imgUpload);

app.use("/api/posts", require("./routes/postsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

// ERROR HANDLER
app.use(errorHandler);

// STARTUP SERVER
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
