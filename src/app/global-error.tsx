"use client";

import Link from "next/link";
import { colors, IMAGE_KEYS, spacing } from "@/constants/index";
import Image from "next/image";
import type { Metadata } from "next";
import { useMedia } from "@/utils";

export const metadata: Metadata = {
    title: "Something went wrong",
    robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "none",
            "max-snippet": -1,
        },
    },
};

export default function Error(error: Error & { digest?: string }) {
    const iceCreamProps = useMedia(IMAGE_KEYS.SAD_ICE_CREAM, "image");

    return (
        <div
            style={{
                height: "100dvh",
                width: "100dvw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: spacing.md + "px",
            }}
        >
            <h1 style={{ color: colors.textPrimary, textAlign: "center" }}>
                Something went wrong!
            </h1>
            <Link
                href="/"
                style={{ color: colors.textPrimary, marginBottom: spacing.md + "px" }}
            >
                Go back home
            </Link>
            <div
                style={{ position: "relative", width: "80vw", aspectRatio: "1.5 / 1" }}
            >
                <Image
                    {...iceCreamProps}
                    priority
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
}
