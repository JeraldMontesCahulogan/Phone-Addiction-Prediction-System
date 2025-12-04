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

export default function RiskScoreDistribution() {
  const data = [
    { range: "0-20%", count: 28 },
    { range: "20-40%", count: 68 },
    { range: "40-60%", count: 134 },
    { range: "60-80%", count: 112 },
    { range: "80-100%", count: 41 },
  ];

  const chartConfig = {
    count: { label: "Risk Score", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Score Distribution</CardTitle>
        <CardDescription>
          Predicted addiction risk across population
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
            <XAxis dataKey="range" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
