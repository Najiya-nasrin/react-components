import Link from "./Link";
import Route from "./Route";
import AccordionPage from '../Pages/AccordionPage'
import ButtonPage from '../Pages/ButtonPage'
import DropDown from '../Pages/DropDownPage'
import DropDownPage from "../Pages/DropDownPage";

export default function SideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/dropdown">DropDown</Link>
        </li>
      </ul>

      <div>
        <Route path="/accordion"><AccordionPage /></Route>
        <Route path="/button"><ButtonPage /></Route>
        <Route path="/dropdown"><DropDownPage /></Route>
      </div>
    </div>
  );
}
