import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <Outlet />
    </div>
  );
}
