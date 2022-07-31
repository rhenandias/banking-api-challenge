import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

let port = process.env.PORT;

if (port === "" || port === null) {
  port = process.env.API_LOCAL_PORT;
}

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
