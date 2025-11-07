import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get("authorization");

    // Only protect /studio routes
    if (req.nextUrl.pathname.startsWith("/studio")) {
        // Check if STUDIO_PASSWORD is configured
        if (!process.env.STUDIO_PASSWORD) {
            console.error("STUDIO_PASSWORD environment variable is not set!");
            return new NextResponse("Studio authentication not configured", {
                status: 500,
            });
        }

        if (basicAuth) {
            try {
                const authValue = basicAuth.split(" ")[1];
                const [user, pwd] = atob(authValue).split(":");

                if (
                    user === 'admin' && 
                    pwd === process.env.STUDIO_PASSWORD
                ) {
                    return NextResponse.next();
                }
            } catch (error) {
                // Invalid auth format
                console.error("Invalid authorization header format:", error);
            }
        }

        // Require authentication
        return new NextResponse("Auth required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    // Allow all other routes
    return NextResponse.next();
}

// Configure middleware to only run on /studio routes for better performance
export const config = {
    matcher: '/studio/:path*',
};