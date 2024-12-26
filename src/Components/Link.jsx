import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

export default function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
