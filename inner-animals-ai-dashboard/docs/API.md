# Inner Animals AI Platform - API Documentation

Complete API reference for all endpoints

## Base URL

- Development: `http://localhost:8000`
- Production: `https://api.inneranimals.ai`

## Authentication

Currently using API key authentication. Include your API key in the header:

```
Authorization: Bearer YOUR_API_KEY
```

Future: OAuth 2.0 / JWT authentication

---

## RAG System Endpoints

### Upload Documents

Upload documents to build knowledge base

**Endpoint**: `POST /api/rag/upload`

**Request**:
```bash
curl -X POST http://localhost:8000/api/rag/upload \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "files=@document.pdf" \
  -F "files=@another.docx"
```

**Response**:
```json
{
  "id": "doc_123",
  "filename": "document.pdf",
  "size": 524288,
  "chunks": 42,
  "uploadedAt": "2024-01-15T10:30:00Z"
}
```

### Query Knowledge Base

Ask questions about uploaded documents

**Endpoint**: `POST /api/rag/query`

**Request**:
```json
{
  "query": "What are the main features?",
  "top_k": 5,
  "filters": {}
}
```

**Response**:
```json
{
  "answer": "The main features include...",
  "sources": [
    {
      "content": "Relevant text from document...",
      "metadata": {
        "filename": "document.pdf",
        "page": 3
      },
      "score": 0.92
    }
  ],
  "model": "gpt-4",
  "tokens_used": 450
}
```

### List Documents

Get all documents in the system

**Endpoint**: `GET /api/rag/documents`

**Response**:
```json
{
  "documents": [
    {
      "id": "doc_123",
      "filename": "document.pdf",
      "size": 524288,
      "chunks": 42,
      "uploadedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 1
}
```

### Delete Document

Remove a document from the system

**Endpoint**: `DELETE /api/rag/documents/{document_id}`

**Response**:
```json
{
  "message": "Document deleted successfully"
}
```

### RAG Statistics

Get system statistics

**Endpoint**: `GET /api/rag/stats`

**Response**:
```json
{
  "total_documents": 25,
  "total_chunks": 1247,
  "total_queries": 3542,
  "avg_accuracy": 0.94
}
```

---

## Machine Learning Endpoints

### Train Model

Start a new model training job

**Endpoint**: `POST /api/ml/train`

**Request**:
```json
{
  "model_type": "classification",
  "target_column": "churn",
  "features": ["age", "tenure", "usage"],
  "hyperparameters": {
    "max_depth": 10,
    "n_estimators": 100
  },
  "auto_tune": true,
  "cv_folds": 5
}
```

**Response**:
```json
{
  "job_id": "job_456",
  "status": "pending",
  "message": "Training job created successfully",
  "started_at": "2024-01-15T11:00:00Z"
}
```

### Upload Training Dataset

Upload data for model training

**Endpoint**: `POST /api/ml/upload-dataset`

**Request**: Multipart form data with CSV/Excel file

**Response**:
```json
{
  "filename": "training_data.csv",
  "size": 1048576,
  "rows": 10000,
  "columns": 15,
  "message": "Dataset uploaded successfully"
}
```

### Get Training Job Status

Check training job progress

**Endpoint**: `GET /api/ml/jobs/{job_id}`

**Response**:
```json
{
  "job_id": "job_456",
  "model_type": "classification",
  "status": "completed",
  "metrics": {
    "accuracy": 0.94,
    "precision": 0.92,
    "recall": 0.91,
    "f1_score": 0.915
  },
  "started_at": "2024-01-15T11:00:00Z",
  "completed_at": "2024-01-15T11:45:00Z"
}
```

### List Training Jobs

Get all training jobs

**Endpoint**: `GET /api/ml/jobs`

**Response**:
```json
{
  "jobs": [...],
  "total": 10
}
```

### List Models

Get all trained models

**Endpoint**: `GET /api/ml/models`

**Response**:
```json
{
  "models": [
    {
      "model_id": "model_1",
      "name": "Churn Prediction XGBoost",
      "type": "classification",
      "accuracy": 0.94,
      "created_at": "2024-01-15T10:30:00Z",
      "status": "deployed"
    }
  ],
  "total": 5
}
```

### Make Prediction

Use a trained model for prediction

**Endpoint**: `POST /api/ml/predict`

**Request**:
```json
{
  "model_id": "model_1",
  "data": {
    "age": 35,
    "tenure": 24,
    "usage": 450
  }
}
```

**Response**:
```json
{
  "predictions": [0.85],
  "confidence": [0.91],
  "model_version": "1.0.0"
}
```

---

## Inference Endpoints

### Real-time Inference

Make predictions with low latency

**Endpoint**: `POST /api/inference/predict`

**Request**:
```json
{
  "model_id": "model_1",
  "data": {
    "feature1": 10,
    "feature2": 20
  },
  "return_probabilities": true
}
```

**Response**:
```json
{
  "prediction": 1,
  "confidence": 0.92,
  "probabilities": {
    "class_0": 0.08,
    "class_1": 0.92
  },
  "model_version": "1.0.0",
  "inference_time_ms": 45.3
}
```

### Batch Inference

Process multiple predictions

**Endpoint**: `POST /api/inference/batch-predict`

**Request**:
```json
{
  "model_id": "model_1",
  "data": [
    {"feature1": 10, "feature2": 20},
    {"feature1": 15, "feature2": 25}
  ]
}
```

**Response**:
```json
{
  "predictions": [
    {"prediction": 1, "confidence": 0.92},
    {"prediction": 0, "confidence": 0.88}
  ],
  "total": 2,
  "total_inference_time_ms": 150.7
}
```

---

## Computer Vision Endpoints

### Object Detection

Detect objects in images

**Endpoint**: `POST /api/vision/detect`

**Request**: Multipart form data with image file

**Response**:
```json
{
  "detections": [
    {
      "class_name": "person",
      "confidence": 0.95,
      "bounding_box": {
        "x": 100,
        "y": 150,
        "width": 200,
        "height": 300
      }
    }
  ],
  "processing_time_ms": 125.4,
  "model_version": "yolov8n"
}
```

### Image Classification

Classify images

**Endpoint**: `POST /api/vision/classify`

**Request**: Multipart form data with image file

**Response**:
```json
{
  "class": "cat",
  "confidence": 0.96,
  "top_5": [
    {"class": "cat", "confidence": 0.96},
    {"class": "kitten", "confidence": 0.03}
  ],
  "processing_time_ms": 78.2
}
```

### Defect Detection

Identify defects in product images

**Endpoint**: `POST /api/vision/defect-detection`

**Request**: Multipart form data with image file

**Response**:
```json
{
  "has_defect": true,
  "confidence": 0.89,
  "defect_type": "scratch",
  "severity": "medium",
  "location": {"x": 150, "y": 200, "width": 50, "height": 30},
  "quality_score": 0.72
}
```

---

## NLP Endpoints

### Sentiment Analysis

Analyze text sentiment

**Endpoint**: `POST /api/nlp/sentiment`

**Request**:
```json
{
  "text": "This product is amazing!",
  "language": "en"
}
```

**Response**:
```json
{
  "sentiment": "positive",
  "confidence": 0.92,
  "scores": {
    "positive": 0.92,
    "negative": 0.05,
    "neutral": 0.03
  }
}
```

### Named Entity Recognition

Extract entities from text

**Endpoint**: `POST /api/nlp/ner`

**Request**:
```json
{
  "text": "John Smith works at Microsoft in Seattle.",
  "language": "en"
}
```

**Response**:
```json
{
  "entities": [
    {
      "text": "John Smith",
      "label": "PERSON",
      "start": 0,
      "end": 10,
      "confidence": 0.98
    },
    {
      "text": "Microsoft",
      "label": "ORGANIZATION",
      "start": 23,
      "end": 32,
      "confidence": 0.96
    }
  ],
  "processing_time_ms": 85.3
}
```

### Text Classification

Classify text into categories

**Endpoint**: `POST /api/nlp/classify`

**Request**:
```json
{
  "text": "Latest developments in artificial intelligence...",
  "language": "en"
}
```

**Response**:
```json
{
  "category": "technology",
  "confidence": 0.89,
  "top_categories": [
    {"category": "technology", "confidence": 0.89},
    {"category": "business", "confidence": 0.07}
  ]
}
```

---

## Error Responses

All endpoints return standard error responses:

```json
{
  "error": "Error type",
  "message": "Detailed error message"
}
```

**Status Codes**:
- `400`: Bad Request - Invalid input
- `401`: Unauthorized - Invalid API key
- `404`: Not Found - Resource doesn't exist
- `500`: Internal Server Error - Server error

---

## Rate Limits

- Development: Unlimited
- Production: 1000 requests/hour per API key

## Webhooks

Coming soon: Real-time notifications for:
- Training job completion
- Model deployment
- System alerts

## SDKs

Coming soon:
- Python SDK
- JavaScript/TypeScript SDK
- REST API Client

---

For questions or issues, contact support@inneranimals.ai
