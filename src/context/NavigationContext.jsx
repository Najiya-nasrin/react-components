import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrenPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlr = () => {
      setCurrenPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlr);

    return () => window.removeEventListener("popstate", handlr);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrenPath(path);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
