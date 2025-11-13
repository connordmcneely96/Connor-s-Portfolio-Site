"use client";

import { Brain, TrendingUp, Settings, Play, Download } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function MLStudio() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Brain className="h-10 w-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">ML Studio</h1>
        </div>
        <p className="mt-2 text-lg text-gray-600">
          Train custom machine learning models with AutoML capabilities
        </p>
      </div>

      {/* Status Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">
        <span className="font-semibold">Beta</span>
        <span className="ml-2">- Coming Soon</span>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Model Training
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Train classification, regression, and time series models with automatic
              hyperparameter tuning.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Automated feature engineering
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Multiple algorithm support (XGBoost, LightGBM, Neural Networks)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Cross-validation & evaluation metrics
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                AutoML Pipeline
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Automated machine learning pipeline that handles data preprocessing,
              feature selection, and model optimization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Automatic data cleaning & normalization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Smart feature selection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Model interpretability reports
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Play className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Model Deployment
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              One-click deployment to production with automatic API generation and
              monitoring.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                RESTful API endpoints
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Load balancing & auto-scaling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Performance monitoring
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Download className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Model Export
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Export trained models in various formats for deployment in different
              environments.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                ONNX, TensorFlow, PyTorch formats
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Model versioning & registry
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Inference optimization
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Use Cases */}
      <Card>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Churn Prediction
              </h4>
              <p className="text-sm text-gray-600">
                Identify customers likely to churn and take proactive retention actions
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Demand Forecasting
              </h4>
              <p className="text-sm text-gray-600">
                Predict future demand for inventory optimization and resource planning
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Fraud Detection
              </h4>
              <p className="text-sm text-gray-600">
                Detect anomalous transactions and prevent fraudulent activities
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
