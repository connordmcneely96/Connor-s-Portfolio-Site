"use client";

import { Eye, Camera, Scan, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function VisionLab() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Eye className="h-10 w-10 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-900">Vision Lab</h1>
        </div>
        <p className="mt-2 text-lg text-gray-600">
          Computer vision solutions with YOLOv8 for object detection and classification
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
              <div className="p-3 bg-green-100 rounded-lg">
                <Camera className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Object Detection
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Detect and classify multiple objects in images and video streams using
              state-of-the-art YOLOv8 models.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Real-time object detection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Custom object training
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Bounding box annotations
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ImageIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Image Classification
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Classify images into custom categories with high accuracy using transfer
              learning techniques.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Pre-trained model fine-tuning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Multi-class & multi-label support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Confidence scoring
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Scan className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Defect Detection
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Automated visual inspection for manufacturing quality control with
              anomaly detection.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Surface defect identification
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Anomaly detection
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Quality scoring
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Video Analytics
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Process video streams for object tracking, action recognition, and event
              detection.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Multi-object tracking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Action recognition
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Event detection & alerts
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
                Manufacturing QA
              </h4>
              <p className="text-sm text-gray-600">
                Automated quality inspection for detecting defects in production lines
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Retail Analytics
              </h4>
              <p className="text-sm text-gray-600">
                Track customer behavior, inventory, and optimize store layouts
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Security & Surveillance
              </h4>
              <p className="text-sm text-gray-600">
                Monitor facilities with intelligent object detection and alerts
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
