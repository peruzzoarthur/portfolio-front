import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/language-provider";
import { translations } from "./translations";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useTranslation(key: keyof typeof translations) {
  const { language } = useLanguage();

  return translations[key][language] || translations[key]["portuguese"]; // Fallback to Portuguese
}

export const enhanceMarkdownWithImages = (
  articleId: string,
  content: string,
  images: { filename: string }[],
) => {
  return content.replace(
    /!\[(.*?)\]\(images\/(.*?)\)/g,
    (match, alt, filename) => {
      const image = images.find((img) => img.filename === filename);

      if (image) {
        return `<img 
        src="${import.meta.env.VITE_SERVER_URL}/images/${articleId}/${image.filename}"
        alt="${alt || `${filename}`}" 
        class="mx-auto"
      />`;
      }

      return match;
    },
  );
};
