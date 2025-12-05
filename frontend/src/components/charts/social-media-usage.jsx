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
  // console.log("Social Media Usage Data:", socialMediaUsageData);

  // const counts = socialMediaUsageData.reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc;
  // }, {});

  const counts = {
    "less than 1 hour": 1,
    "1 to 3 hours": 2,
    "4 to 6 hours": 3,
    "7 to 9 hours": 4,
    "more than 9 hours": 5,
  };

  const data = [
    { category: "<1 hr", count: counts["less than 1 hour"] || 0 },
    { category: "1-3 hrs", count: counts["1 to 3 hours"] || 0 },
    { category: "4-6 hrs", count: counts["4 to 6 hours"] || 0 },
    { category: "7-9 hrs", count: counts["7 to 9 hours"] || 0 },
    { category: ">9 hrs", count: counts["more than 9 hours"] || 0 },
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
