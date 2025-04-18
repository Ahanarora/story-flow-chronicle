
import { NewsTheme } from "@/lib/types/news";
import { russiaUkraineWar } from "./russia-ukraine";
import { aiDevelopment } from "./ai-development";
import { climateCrisis } from "./climate-crisis";

export const newsThemes: NewsTheme[] = [
  russiaUkraineWar,
  aiDevelopment,
  climateCrisis
];

export const getThemes = () => {
  return newsThemes;
};

export const getThemeById = (id: string) => {
  return newsThemes.find(theme => theme.id === id);
};

export const getFilteredEvents = (themeId: string, detailLevel: number) => {
  const theme = getThemeById(themeId);
  if (!theme) return [];
  return theme.events
    .filter(event => event.detailLevel <= detailLevel)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getCategories = () => {
  const categories = new Set(newsThemes.map(theme => theme.category));
  return Array.from(categories);
};
