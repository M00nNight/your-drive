import { authMiddleware } from "@clerk/nextjs";
import { Epilogue } from "next/font/google";

export default authMiddleware({
  publicRoutes: "/",
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
