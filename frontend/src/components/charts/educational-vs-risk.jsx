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

export default function EducationalVsRisk({ educationalTimeDailyVsRiskData }) {
  // console.log(educationalTimeDailyVsRiskData);

  const counts = educationalTimeDailyVsRiskData.reduce((acc, item) => {
    const key = `${item.educational_hours}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      time: "<1 hr",
      atRisk: counts["less than 1 hour_yes"],
      notAtRisk: counts["less than 1 hour_no"],
    },
    {
      time: "1-3 hrs",
      atRisk: counts["1 to 3 hours_yes"],
      notAtRisk: counts["1 to 3 hours_no"],
    },
    {
      time: "4-6 hrs",
      atRisk: counts["4 to 6 hours_yes"],
      notAtRisk: counts["4 to 6 hours_no"],
    },
    {
      time: "7-9 hrs",
      atRisk: counts["7 to 9 hours_yes"],
      notAtRisk: counts["7 to 9 hours_no"],
    },
    {
      time: ">9 hrs",
      atRisk: counts["more than 9 hours_yes"],
      notAtRisk: counts["more than 9 hours_no"],
    },
  ];

  const chartConfig = {
    atRisk: { label: "At Risk", color: "var(--chart-1)" },
    notAtRisk: { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Educational Time vs Addiction Risk</CardTitle>
        <CardDescription>
          Educational activities impact on addiction
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
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
