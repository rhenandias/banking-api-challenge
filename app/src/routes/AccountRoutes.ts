import { createUser } from "@controllers/UserController";
import { Router } from "express";

export function load(routes: Router) {
  routes.get("/account", createUser);
}
