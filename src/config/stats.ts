export interface StatItem {
  value: string;
  label: string;
  sub?: string;
  color?: string;
  bg?: string;
  border?: string;
  textColor?: string;
  iconName?: string;
}

export interface StatsConfig {
  marketing: StatItem[];
  investor: StatItem[];
  safety: StatItem[];
}

export const STATS: StatsConfig = {
  marketing: [
    {
      value: "400M+",
      label: "Urban Commuters in India",
      sub: "spending ₹3,000–8,000/mo on transport",
      color: "from-[#4F46E5] to-[#6366f1]",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      textColor: "text-[#4F46E5]",
    },
    {
      value: "$21–24B",
      label: "India Mobility Market (2026)",
      sub: "projected to reach $45–60B by 2030",
      color: "from-[#06B6D4] to-[#0ea5e9]",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      textColor: "text-[#06B6D4]",
    },
    {
      value: "60%",
      label: "Savings on Daily Commute",
      sub: "vs traditional ride-hailing apps",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      value: "75%",
      label: "Women Prioritise Safety",
      sub: "as primary concern in ride selection",
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
      border: "border-pink-100",
      textColor: "text-pink-600",
    },
  ],
  investor: [
    { value: '$21–24B', label: 'India ride-hailing market (2026)', iconName: 'SustainabilityIcon' },
    { value: '$45–60B', label: 'Projected market size by 2030', iconName: 'TrendingUpIcon' },
    { value: '400M+', label: 'Urban commuters — target users', iconName: 'UserGroupIcon' },
    { value: '10–15%', label: 'Our commission vs 25–30% competitors', iconName: 'BarChart3' },
    { value: '75%', label: 'Women cite safety as primary concern', iconName: 'SafetyShieldIcon' },
    { value: '₹15–25L', label: 'Pre-seed ask — infrastructure only', iconName: 'DollarSign' },
  ],
  safety: [
    { value: '75%', label: 'of women cite safety as primary transport concern' },
    { value: '140M+', label: 'women commuters underserved by current platforms' },
    { value: '<1%', label: 'of ride-hailing drivers in India are women' },
  ],
};
