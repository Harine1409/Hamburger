import React from "react";
import {
  Chart,
  SeriesTemplate,
  CommonSeriesSettings,
  Title
} from "devextreme-react/chart";
// import { dataSource } from './data.js';

class Graphcomponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const dataSource = [
      { x: "0", number: 6869661 },
      { x: "20", number: 40277957 },
      { x: "40", number: 53481235 },
      { x: "60", number: 40890002 },
      { x: "80", number: 31916371 }
    ];
    return (
      <>
        <Chart id="chart" palette="Soft" dataSource={dataSource}>
          <CommonSeriesSettings
            argumentField="x"
            valueField="number"
            type="bar"
            ignoreEmptyPoints={true}
          />
          <SeriesTemplate nameField="x" />
        </Chart>
      </>
    );
  }
}

export default Graphcomponent;
