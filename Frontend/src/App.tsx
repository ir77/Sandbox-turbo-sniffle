import ViteDefault from "./pages/ViteDefault";
import PostRequest from "./pages/PostRequest";
import ComponentVSFunction from "./pages/ComponentVSFunction";
import ComplexPostRequest from "./pages/ComplexPostRequest";
import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";

type NavigationItemProps = {
  to: string;
  children: React.ReactNode;
};

const NavigationItem = ({ to, children }: NavigationItemProps) => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    [
      "hover:opacity-100 hover:underline focus-visible:underline",
      isActive ? "font-bold opacity-100" : "font-normal opacity-80",
    ].join(" ");

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
  <nav className="fixed top-0 left-0 w-full bg-sidebar text-sidebar-foreground py-2 z-[1000]">
        <ul className="flex items-center justify-center gap-6 m-0 list-none p-0">
          <NavigationItem to="/">ComplexPostRequest</NavigationItem>
          <NavigationItem to="/post-request">PostRequest</NavigationItem>
          <NavigationItem to="/component-vs-function">
            ComponentVSFunction
          </NavigationItem>
          <NavigationItem to="/vite-default">ViteDefault</NavigationItem>
        </ul>
      </nav>

      <main className="max-w-7xl mx-auto p-8 pt-[60px] text-center">
        <Routes>
          <Route path="/" element={<ComplexPostRequest />} />
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
