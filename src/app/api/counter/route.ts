import { NextResponse } from "next/server";


export async function GET() {

  // console.log({ method: request.method });

  return NextResponse.json({
    method: 'GET',
    count: 100,
  });
}

export async function POST() {

  // console.log({ method: request.method });

  return NextResponse.json({
    method: 'POST',
    count: 100,
  });
}