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

export default function AnxietyVsRisk() {
  const data = [
    { level: "Never", atRisk: 8, notAtRisk: 60 },
    { level: "Rarely", atRisk: 22, notAtRisk: 76 },
    { level: "Sometimes", atRisk: 68, notAtRisk: 56 },
    { level: "Often", atRisk: 62, notAtRisk: 20 },
    { level: "Always", atRisk: 12, notAtRisk: 1 }, // fixed negative value
  ];

  // matching shadcn pattern (like chartConfig in ChartBarDefault)
  const chartConfig = {
    atRisk: {
      label: "At Risk",
      color: "var(--chart-1)",
    },
    notAtRisk: {
      label: "Not At Risk",
      color: "var(--chart-2)",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Anxiety vs Addiction Risk</CardTitle>
        <CardDescription>
          Correlation between anxiety levels and phone addiction
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-80">
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="level"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis tickLine={false} axisLine={false} />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar
              dataKey="atRisk"
              stackId="a"
              fill="var(--color-atRisk)"
              radius={6}
            />
            <Bar
              dataKey="notAtRisk"
              stackId="a"
              fill="var(--color-notAtRisk)"
              radius={6}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
