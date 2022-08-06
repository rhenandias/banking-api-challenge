import { createUserService } from "@services/UserService";

export async function createUser() {
  await createUserService();

  console.log("Olá, partindo de um Controller");
}
