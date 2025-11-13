"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import axios from "axios";

interface DocumentUploadProps {
  onUploadComplete: (document: any) => void;
}

export function DocumentUpload({ onUploadComplete }: DocumentUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);
    setUploadStatus("idle");
    setErrorMessage("");

    try {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post("/api/rag/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploadStatus("success");
      onUploadComplete(response.data);

      // Reset after 3 seconds
      setTimeout(() => setUploadStatus("idle"), 3000);
    } catch (error: any) {
      setUploadStatus("error");
      setErrorMessage(error.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }, [onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
      "text/markdown": [".md"],
    },
    multiple: true,
  });

  return (
    <div className="space-y-6">
      <Card>
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Upload Documents
          </h2>
          <p className="text-gray-600 mb-6">
            Upload your documents to build a knowledge base for your RAG system. Supported
            formats: PDF, DOC, DOCX, TXT, MD
          </p>

          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
              ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}
              ${uploading ? "opacity-50 pointer-events-none" : ""}
            `}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            {isDragActive ? (
              <p className="text-lg text-blue-600">Drop the files here...</p>
            ) : (
              <>
                <p className="text-lg text-gray-700 mb-2">
                  Drag & drop files here, or click to select files
                </p>
                <p className="text-sm text-gray-500">
                  Maximum file size: 10MB per file
                </p>
              </>
            )}
          </div>

          {/* Upload Status */}
          {uploading && (
            <div className="mt-4 flex items-center justify-center text-blue-600">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
              Processing documents...
            </div>
          )}

          {uploadStatus === "success" && (
            <div className="mt-4 flex items-center justify-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              Documents uploaded successfully!
            </div>
          )}

          {uploadStatus === "error" && (
            <div className="mt-4 flex items-center justify-center text-red-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              {errorMessage}
            </div>
          )}
        </div>
      </Card>

      {/* Processing Steps Info */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Processing Pipeline
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-sm font-semibold text-blue-600">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Document Parsing</p>
                <p className="text-sm text-gray-600">Extract text from uploaded files</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-sm font-semibold text-blue-600">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Text Chunking</p>
                <p className="text-sm text-gray-600">Split into semantic chunks</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-sm font-semibold text-blue-600">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Vector Embedding</p>
                <p className="text-sm text-gray-600">Generate embeddings using OpenAI</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-sm font-semibold text-blue-600">4</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Storage</p>
                <p className="text-sm text-gray-600">Store in Pinecone vector database</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
