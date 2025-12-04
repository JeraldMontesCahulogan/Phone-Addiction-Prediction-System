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

export default function PhoneUseDuringMeals() {
  const data = [
    { frequency: "Never", count: 42 },
    { frequency: "Rarely", count: 78 },
    { frequency: "Sometimes", count: 145 },
    { frequency: "Often", count: 98 },
    { frequency: "Always", count: 20 },
  ];

  const chartConfig = {
    count: { label: "Phone Use", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Phone Use During Meals</CardTitle>
        <CardDescription>Phone usage in social settings</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              vertical={false}
            />
            <XAxis dataKey="frequency" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
