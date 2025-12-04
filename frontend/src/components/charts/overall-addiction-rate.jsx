import { PieChart, Pie, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function OverallAddictionRate({ overallAddictionRate }) {
  // console.log("Overall Addiction Rate Data:", overallAddictionRate);

  const counts = overallAddictionRate.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const total = counts["yes"] + counts["no"];

  const data = [
    {
      name: "At Risk",
      value: counts["yes"] || 0,
      percentage: ((counts["yes"] / total) * 100).toFixed(2),
    },
    {
      name: "Not At Risk",
      value: counts["no"] || 0,
      percentage: ((counts["no"] / total) * 100).toFixed(2),
    },
  ];

  const COLORS = ["var(--color-atRisk)", "var(--color-notAtRisk)"];

  const chartConfig = {
    atRisk: { label: "At Risk", color: "var(--chart-1)" },
    notAtRisk: { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Addiction Rate</CardTitle>
        <CardDescription>Population risk distribution</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              labelLine={false}
              label={({ name, percentage }) => `${name}: ${percentage}%`}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
