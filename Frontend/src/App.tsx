import ViteDefault from "./pages/ViteDefault"
import PostRequest from "./pages/PostRequest"
import ComponentVSFunction from "./pages/ComponentVSFunction"
import Wip from "./pages/wip"
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">WIP</Link>
          </li>
          <li>
            <Link to="/post-request">PostRequest</Link>
          </li>
          <li>
            <Link to="/component-vs-function">ComponentVSFunction</Link>
          </li>
          <li>
            <Link to="/vite-default">ViteDefault</Link>
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
