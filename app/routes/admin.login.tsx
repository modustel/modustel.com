import { Form, useActionData, useNavigation, redirect } from "react-router";
import type { Route } from "./+types/admin.login";
import { Page } from "../components/layout/Page";
import {
  authenticateAdmin,
  createSession,
  createSessionCookie,
  getAdminFromRequest,
  checkLoginRateLimit,
} from "../services/auth.server";

export async function loader({ request }: Route.LoaderArgs) {
  const admin = await getAdminFromRequest(request);
  if (admin) {
    throw redirect("/admin");
  }
  return null;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  // Rate limit by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (!checkLoginRateLimit(ip)) {
    return { error: "Too many login attempts. Please try again later." };
  }

  const admin = await authenticateAdmin(email, password);
  if (!admin) {
    return { error: "Invalid email or password." };
  }

  const sessionId = await createSession(admin.id);
  const cookie = createSessionCookie(sessionId);

  return redirect("/admin", {
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

export function meta() {
  return [
    { title: "Admin Login — Modus Tel Labs" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function AdminLogin() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Page>
      <div className="admin-login-page">
        <div className="admin-login-container">
          <h1>Admin Login</h1>

          <Form method="post" className="admin-login-form">
            {actionData?.error && (
              <p className="error-message">{actionData.error}</p>
            )}

            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                autoFocus
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
              />
            </label>

            <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </Form>
        </div>
      </div>
    </Page>
  );
}
