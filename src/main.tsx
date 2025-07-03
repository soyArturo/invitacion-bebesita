import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import App from "./App.tsx";
import { useIsMobile } from "./hooks/use-mobile.ts";
import "./index.css";

const Main = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div className="w-full h-full bg-amber-200 flex justify-center items-center">
        <h1>Esto solo se puede ver en un celular</h1>
      </div>
    );
  }

  return (
    <Router>
      <App />
    </Router>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
