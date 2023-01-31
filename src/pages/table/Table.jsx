import "./Table.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Datatable } from "../../components/dataTable/DataTable";

export const Table = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};
