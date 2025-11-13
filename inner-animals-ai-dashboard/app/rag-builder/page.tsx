"use client";

import { useState } from "react";
import { Upload, FileText, Database, Search, Plus, Trash2, Download } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { DocumentUpload } from "@/components/rag/DocumentUpload";
import { QueryInterface } from "@/components/rag/QueryInterface";
import { DocumentList } from "@/components/rag/DocumentList";

export default function RAGBuilder() {
  const [activeTab, setActiveTab] = useState<"upload" | "query" | "manage">("upload");
  const [documents, setDocuments] = useState<any[]>([]);

  const tabs = [
    { id: "upload", label: "Upload Documents", icon: Upload },
    { id: "query", label: "Query System", icon: Search },
    { id: "manage", label: "Manage Data", icon: Database },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">RAG Builder</h1>
        <p className="mt-2 text-lg text-gray-600">
          Build advanced Retrieval-Augmented Generation systems
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Documents</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{documents.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Vector Embeddings</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {documents.reduce((acc, doc) => acc + (doc.chunks || 0), 0)}
                </p>
              </div>
              <Database className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Queries</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">1,247</p>
              </div>
              <Search className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Accuracy</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">94%</p>
              </div>
              <Database className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex items-center py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                <Icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "upload" && (
          <DocumentUpload
            onUploadComplete={(newDoc) => setDocuments([...documents, newDoc])}
          />
        )}
        {activeTab === "query" && <QueryInterface />}
        {activeTab === "manage" && (
          <DocumentList
            documents={documents}
            onDelete={(id) => setDocuments(documents.filter(d => d.id !== id))}
          />
        )}
      </div>
    </div>
  );
}
