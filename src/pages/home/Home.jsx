import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { Widget } from "../../components/widgets/Widgets";
import { AvgCard } from "../../components/avgCard/AvgCard";
import { Chart } from "../../components/chart/Chart";
import { Datatable } from "../../components/dataTable/DataTable";
import Switch from "@mui/material/Switch";
import "./Home.scss";

export const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <span className="snapshot">Snapshot View</span>
        <Switch onChange={() => setShow(!show)} />
        {!show && (
          <>
            {" "}
            <div className="charts">
              <Chart title="ESG Score Comparison Chart" aspect={2 / 1} />
              <AvgCard />
            </div>
          </>
        )}
        <div className="widgets">
          <Widget type="Environment" />
          <Widget type="Social" />
          <Widget type="Governance" />
        </div>
        <Datatable />
      </div>
    </div>
  );
};
