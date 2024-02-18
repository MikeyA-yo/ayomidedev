//  import type { NextApiRequest, NextApiResponse } from "next"
// import { NextRequest } from "next/server";
import sendMessage from "./contact";

export async function GET(req: Request, res:Response){
    return Response.json({message:"hello ayo, you're probably the only one here"});
}

export async function POST(req:Request, res:Response){
    try {
        const data = await req.json();
        await sendMessage(data);
        return  Response.json(data);
    } catch (e) {
        console.log(e);
    }
}