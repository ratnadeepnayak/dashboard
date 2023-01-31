import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Table } from "./pages/table/Table";
import { Products } from "./pages/products/products";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<Table />} />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
