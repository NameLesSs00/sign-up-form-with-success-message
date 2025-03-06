import { NextResponse } from "next/server"
import {z} from "zod"

const emailSchema = z.string().email("");

export async function POST(request:Request) {
  try{
    const body = await request.json();
    const {email} = body;
    const validatoinResult = emailSchema.safeParse(email);
    if (!validatoinResult.success){
      return NextResponse.json(
        {status:400}
      )
    }
    return NextResponse.json(
      { message: "Email is valid!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}