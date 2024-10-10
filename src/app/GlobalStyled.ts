"use client";

import { breakpoints, spacing } from "@/utils/constants";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

// export const PageContainerStyled = styled.main`
//     padding: ${spacing.sm}px ${spacing.lg}px ${spacing.lg}px ${spacing.lg}px;
//     /* min-height calc: full mobile window - navbar - copyright footer */
//     min-height: calc(100dvh - ${spacing.xxl}px - ${spacing.xl}px);

//     @media (min-width: ${breakpoints.mobileLg}px) {
//         padding: ${spacing.sm}px ${spacing.md}px ${spacing.md}px ${spacing.md}px;
//         /* min-height calc: full mobile window - navbar - copyright footer */
//         min-height: calc(100dvh - ${spacing.xxxl}px - ${spacing.xl}px);
//     }
//     @media (min-width: ${breakpoints.tabletXs}px) {
//         padding: ${spacing.sm}px ${spacing.lg}px ${spacing.lg}px ${spacing.lg}px;
//     }
//     @media (min-width: ${breakpoints.desktopLg}px) {
//         width: 1440px;
//         margin-left: calc((100dvw - 1440px) / 2);
//     }
// `;

const slideLeft = keyframes`
    from {
        transform: translateX(var(--slide-in-left-var));
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(var(--slide-in-right-var));
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(var(--slide-up-var));
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
`;

const reducedMotion = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
`;

const slideInLeft = css`
    animation: ${reducedMotion} 500ms ease-in-out forwards;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideLeft} 500ms ease-in-out forwards;
    }
`;
const slideInRight = css`
    animation: ${reducedMotion} 500ms ease-in-out forwards;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideRight} 500ms ease-in-out forwards;
    }
`;
const slideInUp = css`
    animation: ${reducedMotion} 500ms ease-in-out forwards;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideUp} 500ms ease-in-out forwards;
    }
`;

export const animations = {
    slideInLeft,
    slideInRight,
    slideInUp,
};

export const GlobalStyles = createGlobalStyle`
/** From Josh W Conmeau's CSS Reset */
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
    box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
    margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
    font: inherit;
}
/*
  7. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root,
#__next {
    isolation: isolate;
}

/* From Kevin Powell's "Improve your reset with these modern CSS additions" youtube video */
body > :is(header, footer),
main,
section,
article {
    container-type: inline-size;
}

p,
li,
figcaption {
    text-wrap: pretty;
    max-width: 65ch;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-wrap: balance;
}

/* My own additions */
/* 
  Animation Variables
*/
:root {
    --slide-in-left-var: -10px;
    --slide-in-right-var: 10px;
    --slide-up-var: 10px;
}

`;
