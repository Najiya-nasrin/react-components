import className from "classnames";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "bg-blue-500 border-blue-700": primary,
      "bg-yellow-500 border-yellow-700": warning,
      "bg-red-500 border-red-700": danger,
      "bg-green-500 border-green-700 ": success,
      "border-gray-900 bg-gray-900": secondary,
      "text-white": warning || secondary || danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
