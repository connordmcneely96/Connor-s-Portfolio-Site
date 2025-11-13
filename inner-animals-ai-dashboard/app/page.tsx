"use client";

import { Brain, Database, Eye, MessageSquare, Activity, TrendingUp, Zap, Users } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { MetricCard } from "@/components/MetricCard";

export default function Dashboard() {
  const features = [
    {
      title: "RAG Builder",
      description: "Build advanced Retrieval-Augmented Generation systems with multi-document support",
      icon: Database,
      href: "/rag-builder",
      status: "active",
      color: "blue",
    },
    {
      title: "ML Studio",
      description: "Train custom machine learning models with AutoML capabilities",
      icon: Brain,
      href: "/ml-studio",
      status: "beta",
      color: "purple",
    },
    {
      title: "Vision Lab",
      description: "Computer vision solutions with YOLOv8 for object detection and classification",
      icon: Eye,
      href: "/vision-lab",
      status: "coming-soon",
      color: "green",
    },
    {
      title: "NLP Analytics",
      description: "Natural language processing for sentiment analysis and entity recognition",
      icon: MessageSquare,
      href: "/nlp-analytics",
      status: "coming-soon",
      color: "orange",
    },
    {
      title: "Observatory",
      description: "Monitor all your AI deployments with real-time metrics and alerts",
      icon: Activity,
      href: "/observatory",
      status: "coming-soon",
      color: "red",
    },
  ];

  const metrics = [
    { label: "Active Projects", value: "12", change: "+3", icon: TrendingUp, trend: "up" },
    { label: "API Calls (24h)", value: "45.2K", change: "+12%", icon: Zap, trend: "up" },
    { label: "Models Deployed", value: "8", change: "+2", icon: Brain, trend: "up" },
    { label: "Active Users", value: "156", change: "+8%", icon: Users, trend: "up" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Inner Animals AI Platform
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Enterprise AI/ML Operations Dashboard
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          AI Capabilities
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${feature.color}-100`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        feature.status === "active"
                          ? "bg-green-100 text-green-800"
                          : feature.status === "beta"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {feature.status === "active"
                        ? "Active"
                        : feature.status === "beta"
                        ? "Beta"
                        : "Coming Soon"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Platform Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold">99.8%</div>
            <div className="text-blue-100">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold">&lt;2s</div>
            <div className="text-blue-100">Avg Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold">94%</div>
            <div className="text-blue-100">Model Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
