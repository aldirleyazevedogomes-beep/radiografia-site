/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile certain uncompiled packages that ship modern/TS syntax.
  // `react-photo-view` includes source that Turbopack may attempt to parse
  // so we transpile it to avoid Sucrase parsing/TS errors.
  transpilePackages: ['react-photo-view'],
};

export default nextConfig;