import { NextResponse } from "next/server";
import axios from "axios";

const symbols = "MSFT,AAPL,NVDA,AMZN,GOOGL,META,TSLA";
const apiKey = process.env.TWELVE_DATA_API_KEY!;

export async function GET() {
  try {
    const response = await axios.get(
      `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${apiKey}`
    );

    const data = response.data;

    if (data.status === "error") {
      return NextResponse.json({ error: data.message }, { status: data.code });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Unexpected error occurs." }, { status: 500 });
  }
}
