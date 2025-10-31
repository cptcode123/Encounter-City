import { google } from "googleapis";
import { z } from "zod";
import { ca } from "zod/locales";

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});

export async function POST(req: Request) {

    try {
        const body = await req.json();
        const parsedData = FormSchema.parse(body);

        if (!parsedData) {
            return new Response(
                JSON.stringify({ error: "Invalid form data" }),
            );
    }

    const { name, email, subject, message } = parsedData;

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets =  google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_ID,
        range: "ContactFormResponses!A:F",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [[name, email, subject, message, new Date().toString(), false]],
        },  
    });

    return new Response(JSON.stringify({ success: true }), { status: 200});
} catch (err) {
    console.error("Error submitting form:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
}}