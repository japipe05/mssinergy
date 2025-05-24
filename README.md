npm install --legacy-peer-deps


auditar vulnerabilidadesnpm audit
> npm audit     
arreglar
npm audit fix --force

a

producción


https://adminpro-nextjs-main.vercel.app/


ojo rdto va en crear en local el build 
.json
//"type": "module",


validar
npm warn deprecated react-jvectormap@0.0.16: This package is deprecated. Please start using @react-jvectormap/core instead

   We detected TypeScript in your project and reconfigured your tsconfig.json file for you. Strict-mode is set to
 false by default.
   The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:

        - include was updated to add 'dist/types/**/*.ts'

#1C2833
#49B158
ventas@mssinergy.com
felipehuchija@gmail.com
desplegar en hositnger
> npm run build

produeccion
mails
npm install @emailjs/browser
https://dashboard.emailjs.com/admin/templates/mf51egn


# url .svg
https://www.svgviewer.dev/s/465619/chemical-experiment-lab-laboratory-microscope-research


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


npx create-next-app@latest --example with-jest login-registro-nextjs

## Getting Started

First, run the development server:
felipe boorrar
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.














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


docker build -t adminpro-nextjs .
