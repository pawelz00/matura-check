import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "@/components/navbar.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
  loader: () => import("./index.tsx"),
});
