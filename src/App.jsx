import NavigationMenu from "./components/NavigationMenu";
import TopMenu from "./components/TopMenu";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
        <TopMenu />
        <div className="hero">
          <NavigationMenu />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
