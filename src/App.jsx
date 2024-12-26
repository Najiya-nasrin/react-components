import SideBar from "./Components/SideBar";
import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";
import DropDownPage from "./Pages/DropDownPage";
import TablePage from "./Pages/TablePage";
import ModalPage from "./Pages/ModalPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
