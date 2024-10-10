import { ICON_KEYS, ICONS, IMAGE_KEYS, IMAGES } from "@/constants/index";
import type { Icon, Image } from "@/types";

export const useMedia = (
    name: IMAGE_KEYS | ICON_KEYS,
    type: "image" | "icon"
): Icon | Image => {
    if (type === "image") {
        return IMAGES[name as IMAGE_KEYS];
    }

    return ICONS[name as ICON_KEYS];
};
