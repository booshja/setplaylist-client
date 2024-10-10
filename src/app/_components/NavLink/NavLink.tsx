"use client";

import { fontSizes } from "@/app/fonts";
import { colors, spacing } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

interface NavLinkProps {
    href: string;
    children: string;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <NavLinkStyled href={href} $isActive={isActive}>
            {children}
        </NavLinkStyled>
    );
};

const NavLinkStyled = styled(Link)<{ $isActive: boolean }>`
    font: inherit;
    color: ${colors.textPrimary};
    text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
    font-weight: ${({ $isActive }) =>
        $isActive ? fontSizes.extraBold : fontSizes.semiBold};
    font-size: ${spacing.lg}px;

    &:hover {
        transform: translateY(-3px);
    }
`;
