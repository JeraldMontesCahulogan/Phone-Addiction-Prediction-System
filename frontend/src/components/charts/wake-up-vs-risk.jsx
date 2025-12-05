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

export default function WakeUpVsRisk({ wakeUpVsRiskData }) {
  // console.log("Before Sleep vs Risk Data:", beforeSleepVsRiskData);

  const counts = wakeUpVsRiskData.reduce((acc, item) => {
    const key = `${item.phone_after_wakeup}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      frequency: "Never",
      "At Risk": counts["never_yes"],
      "Not At Risk": counts["never_no"],
    },
    {
      frequency: "Rarely",
      "At Risk": counts["rarely_yes"],
      "Not At Risk": counts["rarely_no"],
    },
    {
      frequency: "Sometimes",
      "At Risk": counts["sometimes_yes"],
      "Not At Risk": counts["sometimes_no"],
    },
    {
      frequency: "Often",
      "At Risk": counts["often_yes"],
      "Not At Risk": counts["often_no"],
    },
    {
      frequency: "Always",
      "At Risk": counts["always_yes"],
      "Not At Risk": counts["always_no"],
    },
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
