import Navigation from "../components/common/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import GlobalLayout from "../components/common/GlobalLayout";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <GlobalLayout customHeader={false}>
        <Outlet />
      </GlobalLayout>
    </>
  );
};

export default RootLayout;
