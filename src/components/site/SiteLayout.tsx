import { Outlet } from "@tanstack/react-router";

import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export function SiteLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
