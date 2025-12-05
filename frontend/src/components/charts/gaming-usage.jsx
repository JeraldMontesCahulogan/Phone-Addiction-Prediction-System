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
  // console.log("Gaming Usage Data:", gamingUsageDailyData);

  // const counts = gamingUsageDailyData.reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc;
  // }, {});

  const counts = {
    "less than 1 hour": 1,
    "1 to 3 hours": 2,
    "4 to 6 hours": 3,
    "7 to 9 hours": 4,
    "more than 9 hours": 5,
  };

  const data = [
    { category: "<1 hr", count: counts["less than 1 hour"] || 0 },
    { category: "1-3 hrs", count: counts["1 to 3 hours"] || 0 },
    { category: "4-6 hrs", count: counts["4 to 6 hours"] || 0 },
    { category: "7-9 hrs", count: counts["7 to 9 hours"] || 0 },
    { category: ">9 hrs", count: counts["more than 9 hours"] || 0 },
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
