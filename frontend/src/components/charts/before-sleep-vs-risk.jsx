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

export default function BeforeSleepVsRisk({ beforeSleepVsRiskData }) {
  // console.log("Before Sleep vs Risk Data:", beforeSleepVsRiskData);

  const counts = beforeSleepVsRiskData.reduce((acc, item) => {
    const key = `${item.phone_before_sleep}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      frequency: "Never",
      atRisk: counts["never_yes"],
      notAtRisk: counts["never_no"],
    },
    {
      frequency: "Rarely",
      atRisk: counts["rarely_yes"],
      notAtRisk: counts["rarely_no"],
    },
    {
      frequency: "Sometimes",
      atRisk: counts["sometimes_yes"],
      notAtRisk: counts["sometimes_no"],
    },
    {
      frequency: "Often",
      atRisk: counts["often_yes"],
      notAtRisk: counts["often_no"],
    },
    {
      frequency: "Always",
      atRisk: counts["always_yes"],
      notAtRisk: counts["always_no"],
    },
  ];

  // const data = [
  //   { frequency: "Never", atRisk: 4, notAtRisk: 24 },
  //   { frequency: "Rarely", atRisk: 12, notAtRisk: 44 },
  //   { frequency: "Sometimes", atRisk: 56, notAtRisk: 68 },
  //   { frequency: "Often", atRisk: 102, notAtRisk: 40 },
  //   { frequency: "Always", atRisk: 28, notAtRisk: 5 },
  // ];

  const chartConfig = {
    atRisk: { label: "At Risk", color: "var(--chart-1)" },
    notAtRisk: { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pre-Sleep Phone Use vs Risk</CardTitle>
        <CardDescription>Impact on sleep and addiction</CardDescription>
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
