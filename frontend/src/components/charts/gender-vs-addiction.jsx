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

export default function GenderVsAddiction({ genderVsAddictionData }) {
  // console.log(genderVsAddictionData);

  const counts = genderVsAddictionData.reduce((acc, item) => {
    const key = `${item.gender}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      gender: `Male - Total: ${
        (counts["male_yes"] || 0) + (counts["male_no"] || 0)
      }`,
      atRisk: counts["male_yes"] || 0,
      notAtRisk: counts["male_no"] || 0,
    },
    {
      gender: `Female - Total: ${
        (counts["female_yes"] || 0) + (counts["female_no"] || 0)
      }`,
      atRisk: counts["female_yes"] || 0,
      notAtRisk: counts["female_no"] || 0,
    },
  ];

  const chartConfig = {
    atRisk: { label: "At Risk", color: "var(--chart-1)" },
    notAtRisk: { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gender</CardTitle>
        <CardDescription>
          Number of respondents per gender categories and their associated risk
          levels.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="gender"
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
