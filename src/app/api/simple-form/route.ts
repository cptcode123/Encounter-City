import { google } from "googleapis";
import { email, z } from "zod";

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    PhoneNumber: z.string().min(10, "Phone number is required"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsedData = FormSchema.safeParse(body);

        if (!parsedData.success) {
            return new Response(
                JSON.stringify({ error: "Invalid form data" }),
            );
    }

    const { name, email, PhoneNumber } = parsedData.data;

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],

    });

    const sheets =  google.sheets({ version: "v4", auth });

    console.log("Attemption to append to sheet...");
    console.log("Spreadsheet ID:" ,process.env.GOOGLE_SHEET_ID);

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: "SimpleFormResponses!A:D",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[name, email, PhoneNumber, new Date().toLocaleString()]],
            },
        });
        console.log("Data successfully added to sheet!");
    } catch (error) {
        console.error("Sheets appended error:", error);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, statusText: "Form submitted successfully" });
} catch (err) {
    console.error("Error submitting form:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
}


}