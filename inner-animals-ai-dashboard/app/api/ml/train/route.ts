import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_API_URL || "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Forward request to Python backend
    const response = await axios.post(`${BACKEND_URL}/api/ml/train`, body);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("ML Training Error:", error);
    return NextResponse.json(
      {
        error: error.response?.data?.message || "Failed to start training",
      },
      { status: error.response?.status || 500 }
    );
  }
}
