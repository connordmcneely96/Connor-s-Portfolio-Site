"use client";

import { useState } from "react";
import { Search, Send, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import axios from "axios";

interface QueryResult {
  answer: string;
  sources: Array<{
    content: string;
    metadata: {
      filename: string;
      page?: number;
    };
    score: number;
  }>;
}

export function QueryInterface() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QueryResult | null>(null);

  const handleQuery = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post("/api/rag/query", { query });
      setResult(response.data);
    } catch (error) {
      console.error("Query failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const exampleQueries = [
    "What are the main features of this product?",
    "Summarize the key findings from the documents",
    "What is the pricing structure?",
    "Explain the technical architecture",
  ];

  return (
    <div className="space-y-6">
      {/* Query Input */}
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Query Your Knowledge Base
          </h2>
          <p className="text-gray-600 mb-6">
            Ask questions about your uploaded documents. The AI will search through your
            knowledge base and provide accurate answers with source citations.
          </p>

          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleQuery()}
                placeholder="Ask a question..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleQuery}
              disabled={loading || !query.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Searching...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Query
                </>
              )}
            </button>
          </div>

          {/* Example Queries */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQueries.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(example)}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Query Result */}
      {result && (
        <Card>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Answer</h3>
            </div>
            <div className="prose max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">{result.answer}</p>
            </div>

            {/* Sources */}
            {result.sources && result.sources.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Sources</h4>
                <div className="space-y-3">
                  {result.sources.map((source, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          {source.metadata.filename}
                          {source.metadata.page && ` (Page ${source.metadata.page})`}
                        </span>
                        <span className="text-sm text-gray-600">
                          Relevance: {(source.score * 100).toFixed(1)}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{source.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
