import NavigationMenu from "./components/NavigationMenu";
import TopMenu from "./components/TopMenu";
import "./App.css";
import { Outlet } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";

export const App = () => {
  return (
    <BaseLayout header={<TopMenu />} sidebar={<NavigationMenu />}>
      <Outlet />
    </BaseLayout>
  );
};
