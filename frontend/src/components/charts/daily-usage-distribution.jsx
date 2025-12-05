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

export default function DailyUsageDistribution() {
  // console.log("Daily Phone Usage Data:", dailyPhoneUsageData);

  // const counts = dailyPhoneUsageData.reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc;
  // }, {});

  const data = [
    { category: "<2 hrs", count: 1 },
    { category: "2-4 hrs", count: 2 },
    { category: "5-7 hrs", count: 3 },
    { category: "8-10 hrs", count: 4 },
    { category: ">10 hrs", count: 5 },
  ];

  const chartConfig = {
    count: {
      label: "Number of Respondents",
      color: "var(--chart-1)",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Phone Usage Distribution</CardTitle>
        <CardDescription>
          Number of respondents per usage category
        </CardDescription>
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
