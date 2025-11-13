import { LucideIcon } from "lucide-react";
import { Card } from "./ui/Card";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export function MetricCard({ label, value, change, icon: Icon, trend }: MetricCardProps) {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{label}</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
            <p className={`mt-2 text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {change} from last week
            </p>
          </div>
          <div className="p-3 bg-blue-100 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
    </Card>
  );
}
