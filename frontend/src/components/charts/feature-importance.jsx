import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

export default function FeatureImportance() {
  const data = [
    { feature: "Daily Usage Hours", importance: 28.5 },
    { feature: "Anxiety Level", importance: 22.3 },
    { feature: "Sleep Duration", importance: 18.7 },
    { feature: "Social Media Time", importance: 16.2 },
    { feature: "Gaming Time", importance: 14.3 },
  ];

  const chartConfig = {
    importance: { label: "Importance (%)", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Addiction Predictors</CardTitle>
        <CardDescription>Feature importance in ML model</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid vertical={false} />
            <XAxis type="number" tickLine={false} axisLine={false} />
            <YAxis
              dataKey="feature"
              type="category"
              width={150}
              tickLine={false}
              axisLine={false}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar
              dataKey="importance"
              fill="var(--color-importance)"
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
