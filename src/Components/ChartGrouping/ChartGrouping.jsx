import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChartGrouping() {
  const data = [
    {
      name: "Page A",
      LastMonth: 38,
      thisMonth: 45,
    },
    {
      name: "Page B",
      LastMonth: 42,
      thisMonth: 57,
    },
    {
      name: "Page C",
      LastMonth: 20,
      thisMonth: 30,
    },
    {
      name: "Page D",
      LastMonth: 40,
      thisMonth: 60,
    },
  ];

  return (
    <>
      <div className="flex justify-center bg-second-bg-web-dark mx-8 rounded-md p-4">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="LastMonth" fill="#E20E02" />
          <Bar dataKey="thisMonth" fill="#007AFF" />
        </BarChart>
      </div>
    </>
  );
}
