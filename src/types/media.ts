import { IMAGE_KEYS, ICON_KEYS } from "@/constants/media";
import type { StaticImageData } from "next/image";

export type ImageKey = keyof typeof IMAGE_KEYS;
export type IconKey = keyof typeof ICON_KEYS;

export type Images = {
    [key in ImageKey]: Image;
};

export type Icons = {
    [key in IconKey]: Icon;
};

export type Image = {
    src: StaticImageData;
    alt: string;
};

export type Icon = {
    src: StaticImageData;
    alt: string;
};
