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

export default function SocialMediaUsage() {
  const data = [
    { category: "<1 hr", count: 52 },
    { category: "1-3 hrs", count: 89 },
    { category: "4-6 hrs", count: 124 },
    { category: "7-9 hrs", count: 98 },
    { category: ">9 hrs", count: 20 },
  ];

  const chartConfig = {
    count: { label: "Users", color: "var(--chart-3)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Usage Daily</CardTitle>
        <CardDescription>Time spent on social media</CardDescription>
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
            <Bar dataKey="count" fill="var(--chart-3)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
