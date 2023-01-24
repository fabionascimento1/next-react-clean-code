import UserController from "@/adapter/controller/UserController";
import { authGateway } from "./gateway";
export const useController = () => {
  return {
    userController: new UserController(authGateway),
  };
};
