import { galleryImages } from "@/content/gallery-images"

/** Encode each path segment so spaces/parentheses work in production URLs. */
export function encodePublicImagePath(src: string): string {
  return (
    "/" +
    src
      .split("/")
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("/")
  )
}

/** Static gallery list from public/desktop-background and public/mobile-background. */
export async function fetchGalleryImages(): Promise<string[]> {
  return galleryImages.map(encodePublicImagePath)
}
