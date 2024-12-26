import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import classNames from "classnames";

export default function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}
