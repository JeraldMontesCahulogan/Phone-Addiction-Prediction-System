import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
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

export default function SleepDistribution() {
  // console.log("Sleep Duration Data:", sleepDurationData);

  // const counts = sleepDurationData.reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc;
  // }, {});

  const data = [
    { category: "<4 hrs", count: 1 },
    { category: "4-6 hrs", count: 2 },
    { category: "7-8 hrs", count: 3 },
    { category: ">8 hrs", count: 4 },
  ];

  const chartConfig = {
    count: { label: "Sleep Hours", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Duration Distribution</CardTitle>
        <CardDescription>Sleep patterns in the population</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              vertical={false}
            />
            <XAxis dataKey="category" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
