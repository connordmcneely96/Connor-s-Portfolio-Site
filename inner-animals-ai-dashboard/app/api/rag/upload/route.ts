import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_API_URL || "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Forward the form data to the Python backend
    const response = await axios.post(
      `${BACKEND_URL}/api/rag/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      {
        error: error.response?.data?.message || "Failed to upload documents",
      },
      { status: error.response?.status || 500 }
    );
  }
}
