/** @type {import('next').NextConfig} 
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  */
  
/**
* @type {import('next').NextConfig}

*/
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH||'',
    //output: 'export',
    distDir: 'dist',
    images:{
    unoptimized: true,
    }
}
module.exports = nextConfig
