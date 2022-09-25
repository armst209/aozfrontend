import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <LayoutWrapper customHeader={false}>
        <Outlet />
      </LayoutWrapper>
    </>
  );
};

export default RootLayout;
