# Inner Animals AI Platform

Complete AI/ML Operations Dashboard for Enterprise Solutions

![Status](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Overview

The Inner Animals AI Platform is a comprehensive, production-ready dashboard for building and deploying enterprise AI/ML solutions. It fills the market gap between simple no-code tools and custom AI development, offering:

- **Advanced RAG Systems**: Multi-document knowledge bases with intelligent querying
- **Custom ML Models**: Training, tuning, and deployment of predictive models
- **Computer Vision**: Object detection and image classification with YOLOv8
- **NLP Analytics**: Sentiment analysis, entity recognition, and text classification
- **Real-time Monitoring**: Complete observability for all AI deployments

## Features

### ✅ Available Now

- **RAG Builder** (90% Complete)
  - Document upload and processing
  - Vector embeddings with OpenAI
  - Intelligent query system with source citations
  - Support for PDF, DOCX, TXT, MD formats

- **ML Studio** (Beta)
  - Model training API
  - Multiple algorithm support (XGBoost, LightGBM)
  - Hyperparameter tuning
  - Model versioning

- **Database & Infrastructure**
  - Complete Prisma schema
  - PostgreSQL database
  - RESTful API architecture

### 🚧 Coming Soon

- Computer Vision Lab
- NLP Analytics Suite
- Observatory Dashboard
- Authentication system
- Payment integration

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI**: React 18 + Tailwind CSS
- **State**: Zustand + React Query

### Backend
- **API**: FastAPI (Python 3.11+)
- **ML**: PyTorch, scikit-learn, XGBoost
- **LLM**: LangChain + OpenAI/Anthropic
- **Vector DB**: Pinecone
- **Vision**: YOLOv8, Ultralytics

### Infrastructure
- **Frontend**: Vercel
- **Backend**: Railway/Fly.io
- **Database**: Supabase (PostgreSQL)
- **Storage**: Cloudflare R2
- **Cache**: Upstash Redis

## Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- Python 3.11+
- PostgreSQL database
- API keys (see `.env.example`)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd inner-animals-ai-dashboard

# Install frontend dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Generate Prisma client
npx prisma generate

# Set up Python backend
cd ml-services
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

### Development

Run both frontend and backend in development mode:

```bash
# Terminal 1: Frontend (from root directory)
pnpm dev

# Terminal 2: Backend (from ml-services directory)
cd ml-services
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Database Setup

```bash
# Run Prisma migrations
npx prisma migrate dev

# Open Prisma Studio to view data
npx prisma studio
```

## Environment Variables

See `.env.example` for all required environment variables. Key configurations:

- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: For embeddings and LLM
- `PINECONE_API_KEY`: Vector database
- `BACKEND_API_URL`: FastAPI backend URL

## Project Structure

```
inner-animals-ai-dashboard/
├── app/                    # Next.js app router
│   ├── page.tsx           # Dashboard home
│   ├── rag-builder/       # RAG system UI
│   ├── ml-studio/         # ML training UI
│   ├── vision-lab/        # Computer vision UI
│   ├── nlp-analytics/     # NLP UI
│   └── api/               # Next.js API routes
├── components/            # React components
├── ml-services/          # Python FastAPI backend
│   ├── main.py           # FastAPI application
│   └── api/              # API endpoints
│       ├── rag.py        # RAG endpoints
│       ├── ml_training.py # ML endpoints
│       ├── inference.py   # Inference endpoints
│       ├── vision.py      # Vision endpoints
│       └── nlp.py         # NLP endpoints
├── prisma/
│   └── schema.prisma     # Database schema
└── docs/                 # Documentation
```

## API Documentation

Complete API documentation is available at:
- Interactive Docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- See `docs/API.md` for detailed endpoint documentation

## Deployment

### Frontend (Vercel)

```bash
# Deploy to Vercel
vercel --prod

# Set environment variables in Vercel dashboard
```

### Backend (Railway/Fly.io)

```bash
# For Railway
railway up

# For Fly.io
fly deploy
```

### Database (Supabase)

1. Create a Supabase project
2. Copy the connection string to `DATABASE_URL`
3. Run migrations: `npx prisma migrate deploy`

## Development Roadmap

### Phase 1: Foundation (✅ Complete)
- [x] Project setup
- [x] Database schema
- [x] Basic UI components
- [x] API architecture

### Phase 2: RAG System (90% Complete)
- [x] Document upload
- [x] Vector embeddings
- [x] Query interface
- [ ] Production API integration

### Phase 3: ML Studio (In Progress)
- [x] Training API
- [ ] UI completion
- [ ] Model deployment flow

### Phase 4: Advanced Features (Planned)
- [ ] Computer Vision Lab
- [ ] NLP Analytics
- [ ] Observatory
- [ ] Authentication
- [ ] Payment integration

## Contributing

This is a proprietary project for Inner Animals. For internal development:

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Ensure tests pass

## Support

For questions or issues:
- Check the documentation in `/docs`
- Review API documentation at `/docs/API.md`
- Contact the development team

## License

Proprietary - Inner Animals © 2024

## Business Value

### Target Revenue: $500K+ Year 1

**Service Tiers:**
- RAG Systems: $25K-50K per project
- Custom ML Models: $75K-150K per project
- Computer Vision: $100K-300K per project

**Competitive Advantage:**
- Fills gap between Clay.global and custom development
- Enterprise-grade features
- Production-ready from day one
- Scalable architecture

---

**Built with ❤️ by Inner Animals**

*Empowering businesses with intelligent AI solutions*
