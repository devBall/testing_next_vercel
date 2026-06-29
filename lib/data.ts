import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'gwisanu012@outlook.com',
};

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.svg',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'FinSight',
        slug: 'finsight',
        techStack: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Zustand',
            'Tanstack Query',
            'React Hook Form',
        ],
        thumbnail: '/projects/thumbnail/finsight.png',
        longThumbnail: '/projects/long/finsight.png',
        images: [
            '/projects/images/finsight-1.png',
            '/projects/images/finsight-2.png',
            '/projects/images/finsight-3.png',
        ],
        year: 2023,
        description: `
        FinSight is a fintech customer portal for SMBs to apply for funding, track status, manage documents, and get AI-powered insights from their data — built with Next.js 14 and a production-grade React stack.`,
        role: `
        <ul>
            <li>Next.js 14 + TypeScript with App Router and code splitting</li>
            <li>TanStack Query for server state + Zustand for UI state</li>
            <li>React Hook Form + Zod for multi-step forms</li>
            <li>RBAC with route guards and permission-driven UI</li>
            <li>MSW mock backend for development and testing</li>
            <li>Tailwind + semantic tokens for theming, accessible modals and forms</li>
        </ul>
        `,
    },
    {
        title: 'Atrium',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Zustand',
            'Gsap',
            'Tanstack Query',
            'React Hook Form',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-5.png',
            '/projects/images/property-pro-3.png',
            '/projects/images/property-pro-4.png',
        ],
        year: 2023,
        description: `
        Atrium is a modern real estate platform for browsing, saving, and reserving homes, with curated listings, transparent pricing, and a guided multi-step checkout. Built as a production-grade React app, it pairs a clean, responsive design system with real data fetching, cart and authentication flows, and end-to-end testing.`,
        role: `
            <ul>
                <li>React + TypeScript + Vite with a real router and route-level code-splitting</li>
                <li>TanStack Query + Suspense for data fetching, loading, error & retry</li>
                <li>Zustand (persisted) for cart, auth & saved listings</li>
                <li>Multi-step checkout with React Hook Form + Zod and save-and-restore progress</li>
                <li>URL-driven filters, sorting & pagination — shareable and refresh-safe</li>
                <li>Lazy-loaded images + branded loading/splash states</li>
                <li>End-to-end tested with Playwright (desktop + mobile)</li>
            </ul>
        `,
    },
    {
        title: 'Zion',
        slug: 'zion',
        techStack: [
            'React',
            'i18next',
            'React Context',
            'CDN Hosting',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/zion.png',
        longThumbnail: '/projects/long/zion.png',
        images: [
            '/projects/images/zion-1.png',
            '/projects/images/zion-2.png',
            '/projects/images/zion-3.png',
        ],
        year: 2021,
        description:
            "Zion MAXHUB is a React-powered product showcase website for MAXHUB's interactive displays, conference bars, and wireless sharing solutions. It highlights core features like touch-screen collaboration, video conferencing, and annotation tools, serving as a digital storefront for educators and businesses seeking all-in-one meeting and classroom technology.",
        role: `As the sole developer, I:<br/>
        - Designed and developed the entire marketing website from scratch using React, delivering a responsive and visually engaging product showcase.<br/>
        - Structured the UI to clearly present multiple product lines—Interactive Panels, Conference Bars, and Wireless Screen-Sharing Boxes—with distinct value propositions for education and business audiences.<br/>
        - Implemented a clean, conversion-focused layout that guides visitors through product features, use cases, and key differentiators.<br/>
        - Deployed and maintained the live application, ensuring fast load times and a seamless browsing experience across devices.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Frontend Engineer',
        company: 'Toggl',
        duration: 'Jan 2025 - Present',
        description:
            'Building SaaS workflows in React, TypeScript, and GraphQL. Created design-system patterns that cut feature build time ~20% and optimised key workflows to load ~25% faster, backed by full Jest, RTL, and Playwright coverage.',
    },
    {
        title: 'Frontend Engineer',
        company: 'Wayflyer',
        duration: 'Apr 2021 - Dec 2024',
        description:
            'Built onboarding, funding, and repayment experiences for e-commerce businesses. Simplified multi-step forms to lift application completion ~15% and shipped reusable patterns that cut duplicate frontend effort ~25%, with Jest, RTL, and Cypress coverage across critical financial flows.',
    },
    {
        title: 'Junior Software Developer',
        company: 'CarTrawler',
        duration: 'Jun 2018 - Mar 2021',
        description:
            'Built responsive vehicle search, pricing, and checkout experiences for travel customers, integrating booking flows with inventory, payment, and reservation services via React, TypeScript, Redux, and REST APIs. Added Jest and RTL tests while contributing to code reviews and regular releases.',
    },
];
