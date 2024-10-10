import PlausibleProvider from "next-plausible";
import { layoutMetadata } from "@/utils";
import { Footer, Navbar } from "./_components";
import { AllTheProviders } from "@/providers";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = layoutMetadata;

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <head>
                <PlausibleProvider domain="setplaylist.com" trackOutboundLinks />
            </head>
            <body style={{ height: "100dvh" }}>
                <AllTheProviders>
                    {/* <ConsoleLog /> */}
                    <Navbar />
                    {children}
                    <Footer />
                </AllTheProviders>
            </body>
        </html>
    );
}
