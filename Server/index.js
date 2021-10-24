require("express-async-errors");
const express = require("express");
const app = express();
const connectDb = require("./db/connect");
require("dotenv").config();
const not_found = require("./middleware/not-found");
const error_handler = require("./middleware/error-handler");
const port = process.env.PORT || 5000;

const cors = require("cors");

const loginRouter = require("./routes/login");
const registrationRouter = require("./routes/registration");
const quizRouter = require("./routes/quiz");
const milestonesRouter = require("./routes/milestones");

const { checkUser } = require("./controllers/home");
const auth = require("./middleware/auth");

// Middleware
app.use(express.json());
app.use(cors());

// get all routes ->routes Middleware
app.use("/api/v1/login", loginRouter);

app.use("/api/v1/registration", registrationRouter);

app.use("/api/v1/milestones", milestonesRouter);

app.use("/api/v1/quiz", quizRouter);

app.get("/api/v1", auth, checkUser);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../healify/build"));
}
// error paths
app.use(not_found);
app.use(error_handler);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
