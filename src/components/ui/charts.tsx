"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
/*
const data = [
  {
    name: "Jan 7",
    creatinine: 4000,
    ferritin: 2400,
    iron: 2400,
  },
  {
    name: "Jan 21",
    creatinine: 3000,
    ferritin: 1398,
    iron: 2210,
  },
  {
    name: "Jan 23",
    creatinine: 2000,
    ferritin: 9800,
    iron: 2290,
  },
  {
    name: "Jan 25",
    creatinine: 2780,
    ferritin: 3908,
    iron: 2000,
  },
  {
    name: "Jan 27",
    creatinine: 1890,
    ferritin: 4800,
    iron: 2181,
  },
  {
    name: "Jan 29",
    creatinine: 2390,
    ferritin: 3800,
    iron: 2500,
  },
  {
    name: "Jan 31",
    creatinine: 3490,
    ferritin: 4300,
    iron: 2100,
  },
];
*/
const SyncLineChart = ({data}) => {
  return (
    <div style={{ width: "100%" }}>
        <h4>Systolic Pressure:</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="syst_press" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>
<h4>Diastolic Pressure:</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="dias_press" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>
<h4>Oxigen Saturation:</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="oxi_sat" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>

<h4>Kt/v:</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="kt_v" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>

<h4>Urea Reduction Ratio (URR):</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="urr" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>

<h4>Sodium:</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="sodium" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>
<h4>Blood Urea Nitrogen (BUN):</h4>

<ResponsiveContainer width="100%" height={200}>
  <LineChart
    width={500}
    height={200}
    data={data}
    syncId="anyId"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
    <Line type="monotone" dataKey="bun" stroke="#d8a71d" fill="#d8a71d" />
  </LineChart>
</ResponsiveContainer>

      <h4>Creatinine levels:</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
          <Line type="monotone" dataKey="creatinine" stroke="#d8a71d" fill="#d8a71d" />
        </LineChart>
      </ResponsiveContainer>
      <h4>Ferritin:</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
          <Line type="monotone" dataKey="ferritin" stroke="#d8a71d" fill="#d8a71d" />
        </LineChart>
      </ResponsiveContainer>
      <h4>Iron saturation:</h4>


      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "rgba(255,255,255,0.1)"}}/>
          <Line type="monotone" dataKey="iron_saturation" stroke="#d8a71d" fill="#d8a71d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SyncLineChart;
