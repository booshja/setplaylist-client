import type { Metadata } from "next";

export const layoutMetadata: Metadata = {
    title: "SetPlaylist",
    description: "Create playlists in Spotify from your favorite concert setlists.",
    generator: "Next.js",
    applicationName: "SetPlaylist",
    category: "technology",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Jacob",
        "Andes",
        "Jacob Andes",
        "React",
        "Next.js",
        "TypeScript",
        "Styled Components",
        "TanStack Query",
        "Spotify",
        "Setlist.fm",
        "Setlist",
        "Playlist",
    ],
    authors: [{ name: "Jacob Andes", url: "https://github.com/booshja" }],
    creator: "Jacob Andes",
    publisher: "Jacob Andes",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    // openGraph: {
    //     title: "SetPlaylist",
    //     description:
    //         "Create playlists in Spotify from your favorite concert setlists.",
    //     url: "https://setplaylist.com",
    //     siteName: "SetPlaylist - Create playlists in Spotify from your favorite concert setlists.",
    //     images: "https://setplaylist.com/og-image.png",
    //     locale: "en_US",
    //     type: "website",
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "SetPlaylist",
    //     description:
    //         "Create playlists in Spotify from your favorite concert setlists.",
    //     images: {
    //         url: "https://setplaylist.com/twitter-og-image.png",
    //         alt: "SetPlaylist - Create playlists in Spotify from your favorite concert setlists.",
    //     },
    // },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};
