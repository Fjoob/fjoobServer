const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const PORT = process.env.APP_PORT || 3000;
const { projectRoutes } = require("./api-routes");

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
  app.use("/projects", projectRoutes);
});
