import React from "react";
import { VictoryBar, VictoryChart } from "victory";
import "./styles.scss";

const data = [
  { quarter: "0 - 10%", earnings: 12000000 },
  { quarter: "11- 20%", earnings: 24000000 },
  { quarter: "21 - 30%", earnings: 17000000 },
  { quarter: "31 - 40%", earnings: 15000000 },
  { quarter: "41 - 50%", earnings: 22000000 },
  { quarter: "51 - 60%", earnings: 5000000 },
  { quarter: "61 - 70%", earnings: 3000000 },
  { quarter: "71 - 80%", earnings: 7000000 },
];

const Chart = () => {
  return (
    <div className="chart">
      <VictoryChart
        domainPadding={30}
        width={700}
        height={300}
        padding={{ left: 100, bottom: 40 }}
      >
        <VictoryBar
          style={{ data: { fill: "#ffd873" } }}
          data={data}
          x="quarter"
          y="earnings"
          //   barWidth={25}
          alignment="middle"
          //   range={{ x: [10, 10], y: [10, 10] }}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
