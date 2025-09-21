import ViteDefault from "./pages/ViteDefault"
import PostRequest from "./pages/PostRequest"
import ComponentVSFunction from "./pages/ComponentVSFunction"
import Wip from "./pages/wip"
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/">WIP</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/post-request">PostRequest</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/component-vs-function">ComponentVSFunction</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/vite-default">ViteDefault</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Wip />} />
        <Route path="/wip" element={<Wip />} />
        <Route path="/post-request" element={<PostRequest />} />
        <Route path="/component-vs-function" element={<ComponentVSFunction />} />
        <Route path="/vite-default" element={<ViteDefault />} />
      </Routes>
    </>
  )
}

export default App
