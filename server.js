const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json());

// app.get("/", (req, res) => res.send("API running"));

//Define Routes
app.use("/api/users", require("./routes/apis/users"));
app.use("/api/auth", require("./routes/apis/auth"));
app.use("/api/profile", require("./routes/apis/profile"));
app.use("/api/posts", require("./routes/apis/posts"));

//Serve static assests in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
