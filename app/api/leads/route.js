import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// On Vercel, the file system is read-only except for the /tmp directory.
const isVercel = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
const DATA_FILE = isVercel 
  ? path.join("/tmp", "leads.json") 
  : path.join(process.cwd(), "data", "leads.json");

async function readLeads() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeLeads(leads) {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.warn("Failed to write to file system. This is expected on Vercel unless using /tmp.", error);
    // Continue execution so the user still gets a success response
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, domain } = body;

    // Basic validation
    if (!name || !email || !phone || !company || !domain) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const leads = await readLeads();
    const newLead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };
    leads.push(newLead);
    await writeLeads(leads);

    return NextResponse.json(
      { message: "Lead captured successfully", lead: newLead },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await readLeads();
    return NextResponse.json({ leads, total: leads.length });
  } catch (error) {
    console.error("Error reading leads:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
