"use client";

import { FileText, Trash2, Download, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { formatBytes, formatDate } from "@/lib/utils";

interface Document {
  id: string;
  filename: string;
  size: number;
  chunks: number;
  uploadedAt: string;
}

interface DocumentListProps {
  documents: Document[];
  onDelete: (id: string) => void;
}

export function DocumentList({ documents, onDelete }: DocumentListProps) {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Document Management
          </h2>
          <p className="text-gray-600 mb-6">
            View and manage all documents in your knowledge base.
          </p>

          {documents.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600">No documents uploaded yet</p>
              <p className="text-sm text-gray-500 mt-2">
                Upload documents to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center flex-1">
                    <FileText className="h-10 w-10 text-blue-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{doc.filename}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>{formatBytes(doc.size)}</span>
                        <span>{doc.chunks} chunks</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(doc.uploadedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => onDelete(doc.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Statistics */}
      {documents.length > 0 && (
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Storage Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Documents</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {documents.length}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Size</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {formatBytes(documents.reduce((acc, doc) => acc + doc.size, 0))}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Chunks</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {documents.reduce((acc, doc) => acc + doc.chunks, 0)}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
