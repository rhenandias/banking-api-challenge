import * as UserService from "@services/UserService";

export async function create() {
  await UserService.create();

  console.log("Olá, partindo de um Controller");
}
