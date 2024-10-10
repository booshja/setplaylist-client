import DJ from "@/images/dj.jpg";
import GuitaristOnStage from "@/images/guitarist-on-stage.jpg";
import Headphones from "@/images/headphones.jpg";
import MagnifyingGlass from "@/images/magnifying-glass.jpg";
import Mailboxes from "@/images/mailboxes.jpg";
import RecordPlayer from "@/images/record-player.jpg";
import SadIceCream from "@/images/sad-ice-cream.jpg";
import StaffOnly from "@/images/staff-only.jpg";
import NavbarLogo from "@/images/navbar-logo.svg";
import SpotifyGreen from "@/images/spotify-full-logo-green.svg";
import SpotifyWhite from "@/images/spofity-full-logo-white.svg";
import SpotifyBlack from "@/images/spotify-full-logo-black.svg";
import DeleteIcon from "@/icons/delete.svg";
import EditIcon from "@/icons/edit.svg";
import MusicNoteIcon from "@/icons/music-note.svg";
import RecordPlayerIcon from "@/icons/record-player.svg";
import UnpinIcon from "@/icons/unpin.svg";
import type { Icon, Image } from "@/types";

export enum IMAGE_KEYS {
    "DJ",
    "GUITARIST_ON_STAGE",
    "HEADPHONES",
    "MAGNIFYING_GLASS_PERSON",
    "MAILBOXES",
    "RECORD_PLAYER",
    "SAD_ICE_CREAM",
    "STAFF_ONLY_SIGN",
    "NAVBAR_LOGO",
    "SPOTIFY_GREEN",
    "SPOTIFY_WHITE",
    "SPOTIFY_BLACK",
}

// TODO: Update alt text for images
export const IMAGES: Record<IMAGE_KEYS, Image> = {
    [IMAGE_KEYS.DJ]: {
        src: DJ,
        alt: "DJ",
    },
    [IMAGE_KEYS.GUITARIST_ON_STAGE]: {
        src: GuitaristOnStage,
        alt: "Guitarist on stage",
    },
    [IMAGE_KEYS.HEADPHONES]: {
        src: Headphones,
        alt: "Headphones",
    },
    [IMAGE_KEYS.MAGNIFYING_GLASS_PERSON]: {
        src: MagnifyingGlass,
        alt: "Magnifying glass",
    },
    [IMAGE_KEYS.MAILBOXES]: {
        src: Mailboxes,
        alt: "Mailboxes",
    },
    [IMAGE_KEYS.RECORD_PLAYER]: {
        src: RecordPlayer,
        alt: "Record player",
    },
    [IMAGE_KEYS.SAD_ICE_CREAM]: {
        src: SadIceCream,
        alt: "A dropped waffle cone ice cream cone on its side on top of a slab of rock with the ice cream spilled out onto the rock.",
    },
    [IMAGE_KEYS.STAFF_ONLY_SIGN]: {
        src: StaffOnly,
        alt: "Staff only",
    },
    [IMAGE_KEYS.NAVBAR_LOGO]: {
        src: NavbarLogo,
        alt: "SetPlaylist",
    },
    [IMAGE_KEYS.SPOTIFY_GREEN]: {
        src: SpotifyGreen,
        alt: "Spotify",
    },
    [IMAGE_KEYS.SPOTIFY_WHITE]: {
        src: SpotifyWhite,
        alt: "Spotify",
    },
    [IMAGE_KEYS.SPOTIFY_BLACK]: {
        src: SpotifyBlack,
        alt: "Spotify",
    },
} as const;

export enum ICON_KEYS {
    "DELETE",
    "EDIT",
    "MUSIC_NOTE",
    "RECORD_PLAYER",
    "UNFAVORITE",
}

export const ICONS: Record<ICON_KEYS, Icon> = {
    [ICON_KEYS.DELETE]: {
        src: DeleteIcon,
        alt: "Delete",
    },
    [ICON_KEYS.EDIT]: {
        src: EditIcon,
        alt: "Edit",
    },
    [ICON_KEYS.MUSIC_NOTE]: {
        src: MusicNoteIcon,
        alt: "Music Note",
    },
    [ICON_KEYS.RECORD_PLAYER]: {
        src: RecordPlayerIcon,
        alt: "Record Player",
    },
    [ICON_KEYS.UNFAVORITE]: {
        src: UnpinIcon,
        alt: "Unfavorite",
    },
} as const;
