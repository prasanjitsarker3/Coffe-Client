import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";
import { AuthKey } from "../Lib/Authkey";

export const logoutUser = (router: AppRouterInstance) => {
  deleteCookies([AuthKey], "/");
  router.refresh();
};
