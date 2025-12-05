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

export default function SocialMediaVsRisk({ socialMediaUsageVsRiskData }) {
  // console.log("Social Media vs Risk Data:", socialMediaUsageVsRiskData);

  const counts = socialMediaUsageVsRiskData.reduce((acc, item) => {
    const key = `${item.social_media_hours}_${item.phone_addiction}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const data = [
    {
      usage: "<1 hr",
      "At Risk": counts["less than 1 hour_yes"] || 0,
      "Not At Risk": counts["less than 1 hour_no"] || 0,
    },
    {
      usage: "1-3 hrs",
      "At Risk": counts["1 to 3 hours_yes"] || 0,
      "Not At Risk": counts["1 to 3 hours_no"] || 0,
    },
    {
      usage: "4-6 hrs",
      "At Risk": counts["4 to 6 hours_yes"] || 0,
      "Not At Risk": counts["4 to 6 hours_no"] || 0,
    },
    {
      usage: "7-9 hrs",
      "At Risk": counts["7 to 9 hours_yes"] || 0,
      "Not At Risk": counts["7 to 9 hours_no"] || 0,
    },
    {
      usage: ">9 hrs",
      "At Risk": counts["more than 9 hours_yes"] || 0,
      "Not At Risk": counts["more than 9 hours_no"] || 0,
    },
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
