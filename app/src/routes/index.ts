import { Router } from "express";
import fs from "fs";

const routes = Router();

fs.readdirSync(__dirname).forEach((file) => {
  if (!file.includes("index.ts")) {
    import("./" + file).then((module) => {
      module.load(routes);
    });
  }
});

export default routes;
