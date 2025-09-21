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
            <Link to="/">ViteDefault</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/post-request">PostRequest</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/component-vs-function">ComponentVSFunction</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/wip">WIP</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ViteDefault />} />
        <Route path="/post-request" element={<PostRequest />} />
        <Route path="/component-vs-function" element={<ComponentVSFunction />} />
        <Route path="/wip" element={<Wip />} />
      </Routes>
    </>
  )
}

export default App
