import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"
import methodoverride from "method-override";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs"
import routes from "./routes/index.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodoverride());
app.use(cors());
app.use(morgan("dev"));
app.use(routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

// finally, let's start our server...
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  export default server;