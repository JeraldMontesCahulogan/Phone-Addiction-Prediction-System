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

export default function InteractionFrequency({ personInteractionData }) {
  // console.log("Person Interaction Data:", personInteractionData);

  const counts = personInteractionData.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const data = [
    { frequency: "Never", count: counts["never"] || 0 },
    { frequency: "Rarely", count: counts["rarely"] || 0 },
    { frequency: "Sometimes", count: counts["sometimes"] || 0 },
    { frequency: "Often", count: counts["often"] || 0 },
    { frequency: "Always", count: counts["always"] || 0 },
  ];

  const chartConfig = {
    count: { label: "Number of Respondents", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Face-to-Face Interaction Frequency</CardTitle>
        <CardDescription>Social interaction patterns</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="frequency"
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
