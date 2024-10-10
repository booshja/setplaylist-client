"use client";

import { anybody, fontSizes, inter } from "@/app/fonts";
import { colors, IMAGE_KEYS, spacing, useMedia } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Footer = () => {
    const spotifyProps = useMedia(IMAGE_KEYS.SPOTIFY_GREEN, "image");
    const setplaylistProps = useMedia(IMAGE_KEYS.NAVBAR_LOGO, "image");

    const isLoggedIn = true;
    const isLoggedOut = !isLoggedIn;

    return (
        <FooterStyled className={anybody.className}>
            <LinksRowStyled>
                <Link href="/">
                    <Image {...setplaylistProps} />
                </Link>
                <LinksListStyled>
                    {isLoggedIn && (
                        <>
                            <li>
                                <LinkStyled href="/search">Search</LinkStyled>
                            </li>
                            <li>
                                <LinkStyled href="/user/playlists">
                                    My playlists
                                </LinkStyled>
                            </li>
                            <li>
                                <LinkStyled href="/user">My account</LinkStyled>
                            </li>
                            <li>
                                <LinkStyled href="/about">About</LinkStyled>
                            </li>
                            <li>
                                <LinkStyled href="/contact">Contact</LinkStyled>
                            </li>
                        </>
                    )}
                    {isLoggedOut && (
                        <>
                            <li>
                                <LinkStyled href="/login">Log in</LinkStyled>
                            </li>
                            <li>
                                <LinkStyled href="/login">Create account</LinkStyled>
                            </li>
                            <li>
                                <LinkStyled href="/about">About</LinkStyled>
                            </li>
                        </>
                    )}
                </LinksListStyled>
                <Link
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image {...spotifyProps} height={45} />
                </Link>
            </LinksRowStyled>
            <CopyrightStyled className={inter.className}>
                &copy; 2021 - Present.{" "}
                <Link
                    href="https://jacobandes.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Jacob Andes
                </Link>
            </CopyrightStyled>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${spacing.md}px;
    background-color: ${colors.backgroundDark};
    height: 180px;
    padding: 0 ${spacing.xxl}px;
    color: ${colors.textPrimary};
`;

const LinksRowStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const LinksListStyled = styled.ul`
    display: flex;
    gap: ${spacing.xl}px;
    list-style: none;
    padding: 0;
`;

const LinkStyled = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-weight: ${fontSizes.regular};
    font-size: ${spacing.lg}px;
`;

const CopyrightStyled = styled.p`
    font-size: 12px;
    height: calc(12px * 1.5);

    & > a {
        color: inherit;
        text-decoration: none;
        font-weight: ${fontSizes.medium};
    }
`;
