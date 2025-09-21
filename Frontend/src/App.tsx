import ViteDefault from "./pages/ViteDefault";
import PostRequest from "./pages/PostRequest";
import ComponentVSFunction from "./pages/ComponentVSFunction";
import Wip from "./pages/wip";
import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";

type NavigationItemProps = {
  to: string;
  children: React.ReactNode;
};

const NavigationItem = ({ to, children }: NavigationItemProps) => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  return (
    <li>
      <NavLink to={to} className={navLinkClassName}>
        {children}
      </NavLink>
    </li>
  );
};

function App() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <NavigationItem to="/">WIP</NavigationItem>
          <NavigationItem to="/post-request">PostRequest</NavigationItem>
          <NavigationItem to="/component-vs-function">
            ComponentVSFunction
          </NavigationItem>
          <NavigationItem to="/vite-default">ViteDefault</NavigationItem>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Wip />} />
          <Route path="/wip" element={<Wip />} />
          <Route path="/post-request" element={<PostRequest />} />
          <Route
            path="/component-vs-function"
            element={<ComponentVSFunction />}
          />
          <Route path="/vite-default" element={<ViteDefault />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
