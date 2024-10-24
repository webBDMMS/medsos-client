import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";


export default async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    // Add other protected routes here
  ],
};
