import React from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
class Gridcomponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const columns = [
      { key: "id", name: "" },
      { key: "title", name: "GB" },
      { key: "title", name: "FR" }
    ];

    const rows = [
      { id: 1, title: "size restriction" },
      { id: 1, title: "ingredient" },
      { id: 2, title: "packing date" },
      { id: 3, title: "end date" },
      { id: 3, title: "packing date" },
      { id: 4, title: "ingredient" },
      { id: 1, title: "ingredient" },
      { id: 2, title: "packing date" },
      { id: 3, title: "end date" }
    ];
    return (
      <div className="gridmain">
        <DataGrid columns={columns} rows={rows} />
      </div>
    );
  }
}

export default Gridcomponent;
