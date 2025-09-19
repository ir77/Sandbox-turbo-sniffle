import ViteDefault from "./pages/ViteDefault"
import PostRequest from "./pages/PostRequest"
import ComponentVSFunction from "./pages/ComponentVSFunction"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <ViteDefault />
            <PostRequest />
            <ComponentVSFunction />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
