import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { siteConfig } from '@/config/site';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';

import { Navbar } from '@/components/nav/navbar';
import { cn } from '@/lib/utils';
import ToasterProvider from '@/lib/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: [
        {
            url: '/logo.png',
            href: '/logo.png',
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={cn('bg-slate-200', inter.className)}>
                    <ToasterProvider />
                    <Navbar />
                    <main className="max-w-3xl mx-auto mt-20 ">{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}
