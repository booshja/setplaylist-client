import { Anybody, Inter, Pacifico } from "next/font/google";

export const anybody = Anybody({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    style: ["normal"],
});

export const fontSizes = {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
};

export const inter = Inter({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const pacifico = Pacifico({
    weight: ["400"],
    subsets: ["latin"],
    style: ["normal"],
});
