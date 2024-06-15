export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favorites"],
};

// To prevent users from accessing these pages if they are not logged in. It automatically redirects them back to the
// home page if they try to access these pages.
