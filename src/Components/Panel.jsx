import classNames from "classnames";

export default function Panel({ className, children, ...rest }) {
  const fullClassName = classNames(className, 'border rounded p-3 shadow bg-white w-full');
  return (
    <div className={fullClassName} {...rest}>
      {children}
    </div>
  );
}
