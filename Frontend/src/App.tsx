import ViteDefault from "./pages/ViteDefault"
import PostRequest from "./pages/PostRequest"
import ComponentVSFunction from "./pages/ComponentVSFunction"
import Wip from "./pages/wip"
import { Routes, Route, NavLink } from "react-router-dom"

function App() {

  return (
    <>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>WIP</NavLink>
          </li>
          <li>
            <NavLink to="/post-request" className={({ isActive }) => isActive ? "active" : ""}>PostRequest</NavLink>
          </li>
          <li>
            <NavLink to="/component-vs-function" className={({ isActive }) => isActive ? "active" : ""}>ComponentVSFunction</NavLink>
          </li>
          <li>
            <NavLink to="/vite-default" className={({ isActive }) => isActive ? "active" : ""}>ViteDefault</NavLink>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Wip />} />
          <Route path="/wip" element={<Wip />} />
          <Route path="/post-request" element={<PostRequest />} />
          <Route path="/component-vs-function" element={<ComponentVSFunction />} />
          <Route path="/vite-default" element={<ViteDefault />} />
        </Routes>
      </main>
    </>
  )
}

export default App
