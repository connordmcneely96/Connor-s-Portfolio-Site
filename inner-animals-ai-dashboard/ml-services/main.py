"""
Inner Animals AI Platform - FastAPI Backend
Main application entry point
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
import logging

# Import API routes
from api import rag, ml_training, inference, vision, nlp

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan manager"""
    logger.info("🚀 Starting Inner Animals AI Platform...")
    # Add any startup logic here (database connections, model loading, etc.)
    yield
    logger.info("👋 Shutting down Inner Animals AI Platform...")
    # Add any cleanup logic here


# Initialize FastAPI application
app = FastAPI(
    title="Inner Animals AI Platform",
    description="Complete AI/ML Operations Dashboard API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Root endpoint
@app.get("/")
async def root():
    """Root endpoint - health check"""
    return {
        "status": "online",
        "service": "Inner Animals AI Platform",
        "version": "1.0.0",
        "docs": "/docs",
    }


@app.get("/health")
async def health_check():
    """Detailed health check endpoint"""
    return {
        "status": "healthy",
        "services": {
            "api": "operational",
            "rag": "operational",
            "ml": "operational",
            "vision": "planned",
            "nlp": "planned",
        },
    }


# Include API routers
app.include_router(rag.router, prefix="/api/rag", tags=["RAG"])
app.include_router(ml_training.router, prefix="/api/ml", tags=["Machine Learning"])
app.include_router(inference.router, prefix="/api/inference", tags=["Inference"])
app.include_router(vision.router, prefix="/api/vision", tags=["Computer Vision"])
app.include_router(nlp.router, prefix="/api/nlp", tags=["NLP"])


# Global exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    logger.error(f"Unhandled exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal server error",
            "message": str(exc),
        },
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info",
    )
