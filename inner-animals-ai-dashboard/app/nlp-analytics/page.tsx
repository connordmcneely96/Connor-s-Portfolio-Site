"use client";

import { MessageSquare, Heart, Users, BarChart } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function NLPAnalytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="h-10 w-10 text-orange-600" />
          <h1 className="text-4xl font-bold text-gray-900">NLP Analytics</h1>
        </div>
        <p className="mt-2 text-lg text-gray-600">
          Natural language processing for sentiment analysis and entity recognition
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
              <div className="p-3 bg-orange-100 rounded-lg">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Sentiment Analysis
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Analyze customer feedback, reviews, and social media to understand
              sentiment and emotional tone.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Positive/Negative/Neutral classification
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Emotion detection (joy, anger, sadness)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                Aspect-based sentiment
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Named Entity Recognition
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Extract and classify named entities like people, organizations, locations,
              and dates from text.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Person, organization, location extraction
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Custom entity types
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Entity linking & disambiguation
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Text Classification
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Automatically categorize text documents into predefined categories for
              organization and routing.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Multi-class & multi-label classification
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Custom taxonomy support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                Confidence scoring
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
                Topic Modeling
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Discover hidden topics and themes in large collections of documents using
              advanced algorithms.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                LDA & BERTopic algorithms
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Topic evolution tracking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Keyword extraction
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
                Customer Feedback Analysis
              </h4>
              <p className="text-sm text-gray-600">
                Understand customer sentiment from reviews, surveys, and support tickets
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Brand Monitoring
              </h4>
              <p className="text-sm text-gray-600">
                Track brand mentions and sentiment across social media and news
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Content Categorization
              </h4>
              <p className="text-sm text-gray-600">
                Automatically organize and route documents based on content
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
