import { NextResponse } from "next/server";
import { menuItems } from "@/data/menu";
export async function GET() { return NextResponse.json({ items: menuItems }); }
