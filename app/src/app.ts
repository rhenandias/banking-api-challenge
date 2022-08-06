import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", routes);

app.get(["/", "/api"], async (req, res) => {
  return res.status(200).json({
    message: "Hello World!!!!",
  });
});

export default app;
