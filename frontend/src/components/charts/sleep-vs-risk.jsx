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

export default function SleepVsRisk({ sleepDurationVsRiskData }) {
  // console.log("Sleep vs Risk Data:", sleepDurationVsRiskData);

  const counts = sleepDurationVsRiskData.reduce((acc, item) => {
    const key = `${item.sleep_hours}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  // console.log("Counts:", counts);

  const data = [
    {
      sleep: "<4 hrs",
      "At Risk": counts["less than 4 hours_yes"] || 0,
      "Not At Risk": counts["less than 4 hours_no"] || 0,
    },
    {
      sleep: "4-6 hrs",
      "At Risk": counts["4 to 6 hours_yes"] || 0,
      "Not At Risk": counts["4 to 6 hours_no"] || 0,
    },
    {
      sleep: "7-8 hrs",
      "At Risk": counts["7 to 8 hours_yes"] || 0,
      "Not At Risk": counts["7 to 8 hours_no"] || 0,
    },
    {
      sleep: ">8 hrs",
      "At Risk": counts["more than 8 hours_yes"] || 0,
      "Not At Risk": counts["more than 8 hours_no"] || 0,
    },
  ];

  const chartConfig = {
    "At Risk": { label: "At Risk", color: "var(--chart-1)" },
    "Not At Risk": { label: "Not At Risk", color: "var(--chart-2)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Duration</CardTitle>
        <CardDescription>
          Number of hours of sleep per day and their addiction risk status
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
            <XAxis dataKey="sleep" stroke="#9ca3af" />
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
