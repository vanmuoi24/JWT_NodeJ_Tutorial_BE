import express from "express";
import { configViewEngine } from "./config/vieengine";
const bodyParser = require("body-parser");
import initWebroutes from "./routes/web";
import connection from "./config/connectDB";
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// config view engine
connection();
configViewEngine(app);
initWebroutes(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(">>>" + PORT);
});
