"use client";

import { IMAGE_KEYS, useMedia } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const NavbarLogo = () => {
    const logoProps = useMedia(IMAGE_KEYS.NAVBAR_LOGO, "image");

    const isLoggedIn = true;
    const href = isLoggedIn ? "/home" : "/";

    return (
        <LinkStyled href={href}>
            <Image {...logoProps} loading="eager" />
        </LinkStyled>
    );
};

const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
