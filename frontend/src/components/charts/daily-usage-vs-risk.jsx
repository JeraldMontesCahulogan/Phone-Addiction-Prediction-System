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

export default function DailyUsageVsRisk({ dailyPhoneUsageVsRiskData }) {
  // console.log(dailyPhoneUsageVsRiskData);

  const counts = dailyPhoneUsageVsRiskData.reduce((acc, item) => {
    const key = `${item.phone_use_hours}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      usage: "<2 hrs",
      atRisk: counts["less than 2 hours_yes"],
      notAtRisk: counts["less than 2 hours_no"],
    },
    {
      usage: "2-4 hrs",
      atRisk: counts["2 to 4 hours_yes"],
      notAtRisk: counts["2 to 4 hours_no"],
    },
    {
      usage: "5-7 hrs",
      atRisk: counts["5 to 7 hours_yes"],
      notAtRisk: counts["5 to 7 hours_no"],
    },
    {
      usage: "8-10 hrs",
      atRisk: counts["8 to 10 hours_yes"],
      notAtRisk: counts["8 to 10 hours_no"],
    },
    {
      usage: ">10 hrs",
      atRisk: counts["more than 10 hours_yes"],
      notAtRisk: counts["more than 10 hours_no"],
    },
  ];

  const chartConfig = {
    atRisk: { label: "At Risk", color: "var(--chart-1)" },
    notAtRisk: { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Phone Usage</CardTitle>
        <CardDescription>
          Number of respondents per screen time categories and their associated
          risk levels.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="usage"
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
