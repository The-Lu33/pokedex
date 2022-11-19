import { Routes, Route } from "react-router-dom";
import "./App.css";
import StartImput from "./components/StartImput";
import Characters from "./components/Characters";
import CharactersDetails from "./components/CharactersDetails";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartImput />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/poke-characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharactersDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
