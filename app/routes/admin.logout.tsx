import { redirect } from "react-router";
import type { Route } from "./+types/admin.logout";
import {
  getSessionIdFromRequest,
  deleteSession,
  createLogoutCookie,
} from "../services/auth.server";

export async function action({ request }: Route.ActionArgs) {
  const sessionId = getSessionIdFromRequest(request);

  if (sessionId) {
    await deleteSession(sessionId);
  }

  return redirect("/admin/login", {
    headers: {
      "Set-Cookie": createLogoutCookie(),
    },
  });
}

export async function loader() {
  return redirect("/admin/login");
}
