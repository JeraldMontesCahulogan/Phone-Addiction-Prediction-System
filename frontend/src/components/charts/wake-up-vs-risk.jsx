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

export default function WakeUpVsRisk() {
  const data = [
    { frequency: "Never", "At Risk": 6, "Not At Risk": 26 },
    { frequency: "Rarely", "At Risk": 18, "Not At Risk": 54 },
    { frequency: "Sometimes", "At Risk": 62, "Not At Risk": 72 },
    { frequency: "Often", "At Risk": 78, "Not At Risk": 34 },
    { frequency: "Always", "At Risk": 18, "Not At Risk": 15 },
  ];

  const chartConfig = {
    "At Risk": { label: "At Risk", color: "var(--chart-1)" },
    "Not At Risk": { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wake-Up Check vs Addiction Risk</CardTitle>
        <CardDescription>
          Morning compulsion correlation with addiction
        </CardDescription>
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
            <Bar
              dataKey="At Risk"
              stackId="a"
              fill="var(--chart-1)"
              radius={6}
            />
            <Bar
              dataKey="Not At Risk"
              stackId="a"
              fill="var(--chart-2)"
              radius={6}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
