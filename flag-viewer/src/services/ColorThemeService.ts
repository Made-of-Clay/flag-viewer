export const THEME_KEY = 'isDarkMode';
export const DEFAULT_IS_DARK_MODE = false;
export const SERVICE_KEY = Symbol('colorThemeService');

export interface ColorThemeService {
    getTheme: () => boolean;
    setTheme: (isDarkMode: boolean) => void;
}

export function getTheme(): boolean {
    const storedValue = localStorage.getItem(THEME_KEY);
    return storedValue ? JSON.parse(storedValue) : DEFAULT_IS_DARK_MODE;
}

export function setTheme(isDarkMode: boolean): void {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
}