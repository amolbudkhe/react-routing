import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootRoute() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootRoute;
