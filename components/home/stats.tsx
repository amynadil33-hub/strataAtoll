"use client";

import { StatStrip } from "@/components/stat-strip";

const stats = [
  {
    value: "200+",
    label: "Inhabited islands screened",
  },
  {
    value: "Integrated",
    label: "Tourism and villa-led concepts",
  },
  {
    value: "Diverse",
    label: "Resort, council, and island opportunities",
  },
  {
    value: "Private",
    label: "Access for qualified partners",
  },
];

export function HomeStats() {
  return <StatStrip stats={stats} />;
}
