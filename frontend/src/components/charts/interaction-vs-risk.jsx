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

export default function InteractionVsRisk() {
  const data = [
    { frequency: "Never", atRisk: 16, notAtRisk: 2 },
    { frequency: "Rarely", atRisk: 32, notAtRisk: 13 },
    { frequency: "Sometimes", atRisk: 48, notAtRisk: 50 },
    { frequency: "Often", atRisk: 42, notAtRisk: 100 },
    { frequency: "Always", atRisk: 14, notAtRisk: 66 },
  ];

  const chartConfig = {
    atRisk: { label: "At Risk", color: "var(--chart-1)" },
    notAtRisk: { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interaction vs Addiction Risk</CardTitle>
        <CardDescription>
          Real-world interaction impact on addiction
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="frequency"
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
