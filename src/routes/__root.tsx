import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "@/components/navbar.tsx";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  loader: () => import("./index.tsx"),
});
