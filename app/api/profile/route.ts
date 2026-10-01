// digunakan nanti untuk memberikan response
import { NextResponse } from "next/server"; 
// data
import {profile} from "@/data/profile"


// membuat get
export async function GET(){
    return NextResponse.json(profile)
}
