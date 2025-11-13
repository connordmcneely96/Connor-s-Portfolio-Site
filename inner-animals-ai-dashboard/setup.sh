#!/bin/bash

# Inner Animals AI Platform - Setup Script
# Automates the initial setup process

set -e  # Exit on error

echo "🚀 Inner Animals AI Platform - Setup"
echo "===================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python is not installed. Please install Python 3.11+ first."
    exit 1
fi

echo "✅ Python version: $(python3 --version)"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm version: $(pnpm --version)"

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
pnpm install

# Set up environment file
if [ ! -f .env.local ]; then
    echo ""
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your API keys"
else
    echo "✅ .env.local already exists"
fi

# Generate Prisma client
echo ""
echo "🗄️  Generating Prisma client..."
npx prisma generate

# Set up Python backend
echo ""
echo "🐍 Setting up Python backend..."
cd ml-services

if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv venv
fi

echo "Installing Python dependencies..."
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
deactivate

cd ..

# Success message
echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your API keys (OpenAI, Pinecone, etc.)"
echo "2. Set up your PostgreSQL database and update DATABASE_URL"
echo "3. Run 'npx prisma migrate dev' to set up the database"
echo "4. Start the frontend: pnpm dev"
echo "5. Start the backend: cd ml-services && source venv/bin/activate && uvicorn main:app --reload"
echo ""
echo "📚 Documentation: ./docs/"
echo "🌐 Frontend: http://localhost:3000"
echo "⚡ Backend: http://localhost:8000"
echo "📖 API Docs: http://localhost:8000/docs"
echo ""
echo "Happy coding! 🎉"
