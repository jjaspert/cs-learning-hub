import type { NextConfig } from "next";
// Importing the type definition for Next.js configuration

const nextConfig: NextConfig = {
  // Our configuration object
  
  turbopack: {},
  // Turbopack is the new, faster version of webpack
  // Next.js 16 uses it by default
  // Passing an empty object {} tells Next.js:
  // "yes we know about Turbopack, use it as-is"
  // This silences the warning we just saw
};

export default nextConfig;
// Export the config so Next.js can read it