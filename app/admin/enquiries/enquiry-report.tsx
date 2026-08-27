"use client";

import {
  CalendarDays,
  CalendarRange,
  CircleGauge,
  ClipboardList,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { EnquiryReport as EnquiryReportData } from "@/db/enquiries";

import styles from "./admin.module.css";

const chartConfig = {
  count: {
    label: "Enquiries",
    color: "#2874c4",
  },
} satisfies ChartConfig;

const dayFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

function dayLabel(day: string) {
  const date = new Date(`${day}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? day : dayFormatter.format(date);
}

export function EnquiryReport({ report }: { report: EnquiryReportData }) {
  const chartData = report.trend.map((point) => ({
    ...point,
    label: dayLabel(point.day),
  }));
  const metrics = [
    { label: "Last 7 days", value: report.last7Days, icon: CalendarDays },
    { label: "Last 30 days", value: report.last30Days, icon: CalendarRange },
    { label: "Unresolved", value: report.unresolved, icon: ClipboardList },
    { label: "Resolution rate", value: `${report.resolutionRate}%`, icon: CircleGauge },
  ];

  return (
    <Card className={styles.reportCard}>
      <section className={styles.reportSummary}>
        <header><p>Performance snapshot</p><h2>Enquiry report</h2><span>Live figures from the claims database.</span></header>
        <div className={styles.reportMetrics}>
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article key={metric.label}>
                <span><Icon aria-hidden="true" /></span>
                <div><strong>{metric.value}</strong><small>{metric.label}</small></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.trendSection}>
        <header><div><p>14-day trend</p><h3>New consultation requests</h3></div><span>Daily volume</span></header>
        <ChartContainer
          config={chartConfig}
          className={styles.trendChart}
          initialDimension={{ width: 560, height: 180 }}
        >
          <BarChart accessibilityLayer data={chartData} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 4" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={9} interval="preserveStartEnd" />
            <ChartTooltip cursor={{ fill: "#eef5fb" }} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="count" fill="var(--color-count)" radius={[5, 5, 0, 0]} maxBarSize={25} />
          </BarChart>
        </ChartContainer>
      </section>
    </Card>
  );
}
