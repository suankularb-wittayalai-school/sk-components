import { sift } from "radash";

export function cn(...segments: unknown[]) {
  return sift(segments).join(" ");
}
