import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_API_URL || "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    // Forward request to Python backend
    const response = await axios.post(`${BACKEND_URL}/api/rag/query`, {
      query,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("RAG Query Error:", error);
    return NextResponse.json(
      {
        error: error.response?.data?.message || "Failed to process query",
      },
      { status: error.response?.status || 500 }
    );
  }
}
