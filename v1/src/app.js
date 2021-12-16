
const express = require("express");
const STATUS=require("http-status")
const helmet = require("helmet")
const config = require("./config")
config()
const PORT = process.env.APP_PORT || 3000;

const app = express();
app.use(express.json())
app.use(helmet());

app.get("/", (req, res) => {
  res.status(STATUS.OK).send({message: ""});
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
