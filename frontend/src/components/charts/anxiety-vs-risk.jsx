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

export default function AnxietyVsRisk({ anxietyVsRiskData }) {
  // console.log("Anxiety vs Risk Data:", anxietyVsRiskData);

  const counts = anxietyVsRiskData.reduce((acc, item) => {
    const key = `${item.phone_anxiety}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      level: "Never",
      atRisk: counts["never_yes"],
      notAtRisk: counts["never_no"],
    },
    {
      level: "Rarely",
      atRisk: counts["rarely_yes"],
      notAtRisk: counts["rarely_no"],
    },
    {
      level: "Sometimes",
      atRisk: counts["sometimes_yes"],
      notAtRisk: counts["sometimes_no"],
    },
    {
      level: "Often",
      atRisk: counts["often_yes"],
      notAtRisk: counts["often_no"],
    },
    {
      level: "Always",
      atRisk: counts["always_yes"],
      notAtRisk: counts["always_no"],
    },
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
