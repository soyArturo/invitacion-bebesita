import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Invitacion from "./pages/invitacion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="invitacion" element={<Invitacion />} />
    </Routes>
  );
}

export default App;
