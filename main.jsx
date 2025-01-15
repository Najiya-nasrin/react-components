import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.jsx";
import "./src/index.css";
import { NavigationProvider } from "./src/context/NavigationContext.jsx";
import { Provider } from "react-redux";
import { store } from "./src/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </Provider>
  </StrictMode>
);
