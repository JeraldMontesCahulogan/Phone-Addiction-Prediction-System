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

export default function WakeUpCheck() {
  const data = [
    { frequency: "Never", count: 32 },
    { frequency: "Rarely", count: 72 },
    { frequency: "Sometimes", count: 134 },
    { frequency: "Often", count: 112 },
    { frequency: "Always", count: 33 },
  ];

  const chartConfig = {
    count: { label: "Users", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Phone Right After Waking</CardTitle>
        <CardDescription>Morning phone check habits</CardDescription>
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
