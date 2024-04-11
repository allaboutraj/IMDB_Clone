
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<h1>Hello</h1>}></Route>
            <Route path="movie/:id" element={<h1>Movie Detail Page</h1>}></Route>
            <Route path="movies/:type" element={<h1>Movie list Page</h1>}></Route>
            <Route path="/*" element={<h1>Error</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
