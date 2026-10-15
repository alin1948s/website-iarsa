# IAR S.A. Brașov

A bilingual presentation website for IAR S.A. Brașov, built with Next.js. It covers the company and its history, industrial capabilities, aircraft, MRO maintenance, investor relations and contact information.

The English site is available at **/en**. Some official labels, company facts and original investor documents remain in Romanian.

## Screenshots

### Home page

![IAR S.A. Brașov home page in English](screenshots/home.png)

### Capabilities and modernization

![IAR aerospace capabilities page in English](screenshots/capabilities.png)

### MRO maintenance

![IAR MRO page in English](screenshots/mro.png)

## Technologies

- Next.js 15 with App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Radix UI, Framer Motion and Zod

## Run locally

Requires Node.js 20 or later.

~~~bash
npm ci
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000). The root route redirects to **/ro**; the English version is at **/en**.

For a production build:

~~~bash
npm run build
npm start
~~~

## Contact form

The API route validates form data and writes it to the server logs. Email delivery is not configured in this repository.
