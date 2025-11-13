"use client";

import { Activity, AlertCircle, CheckCircle, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Observatory() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Activity className="h-10 w-10 text-red-600" />
          <h1 className="text-4xl font-bold text-gray-900">Observatory</h1>
        </div>
        <p className="mt-2 text-lg text-gray-600">
          Monitor all your AI deployments with real-time metrics and alerts
        </p>
      </div>

      {/* Status Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full">
        <span className="font-semibold">Coming Soon</span>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Real-time Monitoring
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Track all your AI models and services in real-time with comprehensive
              performance metrics.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                API response times
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Request volume & throughput
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Error rates & failures
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Smart Alerts
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Get notified instantly when performance degrades or anomalies are detected
              in your systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Threshold-based alerts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Anomaly detection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Multi-channel notifications (email, Slack, SMS)
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Performance Analytics
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Deep dive into model performance with detailed analytics and
              visualizations.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Model accuracy trends
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Cost analysis & optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Usage patterns & insights
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Historical Reports
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Generate comprehensive reports for stakeholders with historical data and
              trends.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Customizable dashboards
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Automated report generation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Export to PDF, Excel
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Monitoring Metrics Preview */}
      <Card>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Key Metrics Tracked
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Uptime</span>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
              <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Avg Response</span>
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1.8s</div>
              <div className="text-xs text-gray-500 mt-1">95th percentile</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Error Rate</span>
                <AlertCircle className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">0.3%</div>
              <div className="text-xs text-gray-500 mt-1">Target &lt; 1%</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Requests</span>
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">45K</div>
              <div className="text-xs text-gray-500 mt-1">Last 24 hours</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
