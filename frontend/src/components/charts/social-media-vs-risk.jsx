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

export default function SocialMediaVsRisk() {
  const data = [
    { usage: "<1 hr", "At Risk": 8, "Not At Risk": 44 },
    { usage: "1-3 hrs", "At Risk": 22, "Not At Risk": 67 },
    { usage: "4-6 hrs", "At Risk": 68, "Not At Risk": 56 },
    { usage: "7-9 hrs", "At Risk": 72, "Not At Risk": 26 },
    { usage: ">9 hrs", "At Risk": 14, "Not At Risk": 6 },
  ];

  const chartConfig = {
    "At Risk": { label: "At Risk", color: "var(--chart-3)" },
    "Not At Risk": { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media vs Addiction Risk</CardTitle>
        <CardDescription>Social media impact on addiction</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              vertical={false}
            />
            <XAxis dataKey="usage" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="At Risk"
              stackId="a"
              fill="var(--chart-3)"
              radius={6}
            />
            <Bar
              dataKey="Not At Risk"
              stackId="a"
              fill="var(--chart-2) "
              radius={6}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
