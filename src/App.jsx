import SideBar from "./Components/SideBar";
import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";
import DropDownPage from "./Pages/DropDownPage";
import TablePage from "./Pages/TablePage";
import ModalPage from "./Pages/ModalPage";
import SearchPage from "./Pages/SearchPage";
import CounterPage from "./Pages/CounterPage";
import PlayListPage from "./Pages/PlayListPage";

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
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/playlist">
          <PlayListPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
