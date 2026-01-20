
import CheersIcon from "../assets/icons/CheersIcon.astro";
import DinnerIcon from "../assets/icons/DinnerIcon.astro";
import LocationIcon from "../assets/icons/LocationIcon.astro";
import RingsIcon from "../assets/icons/RingsIcon.astro";
import PartyIcon from "../assets/icons/PartyIcon.astro";
import ChurchIcon from "../assets/icons/ChurchIcon.astro";

export const eventIcons = {
  cheers: CheersIcon,
  dinner: DinnerIcon,
  location: LocationIcon,
  rings: RingsIcon,
  party: PartyIcon,
  church:ChurchIcon
} as const;

export type EventIconKey = keyof typeof eventIcons;
