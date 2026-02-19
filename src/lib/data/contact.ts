export type SocialIconName = "linkedin" | "github" | "instagram" | "twitter";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  iconName: SocialIconName;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/yusrakuloglu/",
    iconName: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/yusrakuloglu",
    iconName: "github",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/yusra.kuloglu/",
    iconName: "instagram",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    url: "https://x.com/yusraklg_",
    iconName: "twitter",
  },
];
