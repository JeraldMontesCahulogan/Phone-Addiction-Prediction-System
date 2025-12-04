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

export default function GamingUsage() {
  const data = [
    { category: "<1 hr", count: 156 },
    { category: "1-2 hrs", count: 98 },
    { category: "3-4 hrs", count: 67 },
    { category: "5-6 hrs", count: 34 },
    { category: ">6 hrs", count: 28 },
  ];

  const chartConfig = {
    count: { label: "Number of Respondents", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gaming Usage Daily</CardTitle>
        <CardDescription>Time spent on gaming apps</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis tickLine={false} axisLine={false} />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
