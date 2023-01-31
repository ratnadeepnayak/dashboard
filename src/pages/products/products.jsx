import { CardSales } from "../../components/card/card";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";

export const Products = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <h1>Our Newly launched products</h1>
        <div className="row">
          <CardSales productName={"CCPS"} />
          <CardSales productName={"DAPS"} />
          <CardSales productName={"SBCC"} />
        </div>
      </div>
    </div>
  );
};
