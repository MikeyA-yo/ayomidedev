//  import type { NextApiRequest, NextApiResponse } from "next"
// import { NextRequest } from "next/server";
import sendMessage from "./contact";

export async function GET(req: Request, res:Response){
    return Response.json({message:"hello ayo"});
}

export async function POST(req:Request, res:Response){
    const data = await req.json();
    return  Response.json(data);
}