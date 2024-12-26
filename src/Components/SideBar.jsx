import Link from "./Link";

export default function SideBar() {
  const Links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Button",
      path: "/button",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Table",
      path: "/table",
    },
    {
        label: "Modal",
        path: "/modal",
      },
  ];
  return (
    <div>
      <ul>
        {Links.map((link) => (
          <li
            className="sticky top-0 overflow-y-scroll flex flex-col items-start"
            key={link.label}
          >
            <Link
              to={link.path}
              className="mb-3"
              activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
