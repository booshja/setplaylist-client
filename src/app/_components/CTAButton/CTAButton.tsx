"use client";

import { inter } from "@/app/fonts";
import { colors, spacing } from "@/utils";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface CTAButtonProps {
    children: string;
}

export const CTAButton = ({ children }: CTAButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/signup");
    };

    return (
        <ButtonStyled className={inter.className} onClick={handleClick}>
            {children}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    border: 3px solid ${colors.textPrimary};
    color: ${colors.textPrimary};
    padding: ${spacing.md}px ${spacing.lg}px;
    background-color: ${colors.backgroundDark};
    border-radius: 6px;
    font-size: ${spacing.lg}px;
    width: fit-content;

    &:hover {
        cursor: pointer;
    }
`;
