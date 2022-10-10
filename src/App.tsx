import { Route, Routes } from "react-router-dom";
import "./App.css";
import MusicApp from "./pages/MusicApp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MusicApp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
