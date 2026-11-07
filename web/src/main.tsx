import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const container = document.querySelector('div');

if (container) {
    const root = createRoot(container);

    root.render(<App/>)
}; // verifica se o container é existente ou 'null'. O createRoot só funciona se o container existir.