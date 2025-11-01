import { NextResponse } from "next/server";
import type { NextRequest as Request } from "next/server";


export function middleware(req: Request) {

    const basicAuth = req.headers.get("authorization");

    if (req.nextUrl.pathname.startsWith("/studio")){
        if (basicAuth) {
            const authValue = basicAuth.split(" ")[1];
            const [user, pwd] = atob(authValue).split(":");

            if (
                user === 'admin' && 
                pwd === process.env.STUDIO_PASSWORD
            ) {
                return NextResponse.next();
            }
        }

        return new NextResponse("Auth required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
    }