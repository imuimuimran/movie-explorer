import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>MovieExplorer</h1>} />
      <Route path="/movies" element={<h1>Movies</h1>} />
    </Routes>
  );
}

export default App;