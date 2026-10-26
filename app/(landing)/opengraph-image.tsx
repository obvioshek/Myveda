import { HOME_CARD_ALT, homeCard } from "@/lib/og-home";

export const alt = HOME_CARD_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return homeCard();
}
