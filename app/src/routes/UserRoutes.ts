import * as UserController from "@controllers/UserController";
import { Router } from "express";

export function load(routes: Router) {
  routes.get("/user", UserController.create);
}
