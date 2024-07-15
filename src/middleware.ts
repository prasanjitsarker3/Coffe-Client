import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/product/order"];

const roleBasePrivateRoute = {
  USER: [/^\/dashboard/],
  ADMIN: [/^\/dashboard\/admin/],
};

type Role = keyof typeof roleBasePrivateRoute;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    commonPrivateRoutes.includes(pathname)
    // commonPrivateRoutes.includes(pathname)
  ) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;
  if (role && roleBasePrivateRoute[role as Role]) {
    const routes = roleBasePrivateRoute[role as Role];
    // console.log(routes);
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/product/order/:page*",
    "/dashboard/:page*",
  ],
};
