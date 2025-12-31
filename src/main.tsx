import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (import.meta.env.DEV) {
  // dev-only helper that highlights elements wider than the viewport
  import("./lib/overflow-detector");
}

createRoot(document.getElementById("root")!).render(<App />);
