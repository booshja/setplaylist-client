"use client";

import { NavbarLogo } from "../NavbarLogo";
import styled from "styled-components";
import { colors, spacing } from "@/utils";
import { anybody } from "@/app/fonts";
import { NavLink } from "../NavLink";

export const Navbar = () => {
    const isLoggedIn = true;
    const isLoggedOut = !isLoggedIn;

    return (
        <NavbarStyled className={anybody.className}>
            <NavbarLogo />
            <nav>
                <NavListStyled>
                    {isLoggedIn && (
                        <>
                            <li>
                                <NavLink href="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="/playlists">My playlists</NavLink>
                            </li>
                            <li>
                                <NavLink href="/logout">Log Out</NavLink>
                            </li>
                        </>
                    )}
                    {isLoggedOut && (
                        <li>
                            <NavLink href="/login">Sign up/Log in</NavLink>
                        </li>
                    )}
                </NavListStyled>
            </nav>
        </NavbarStyled>
    );
};

const NavbarStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 ${spacing.xl}px;
    background-color: ${colors.backgroundDark};
`;

const NavListStyled = styled.ul`
    display: flex;
    gap: ${spacing.md}px;
    list-style: none;
`;
