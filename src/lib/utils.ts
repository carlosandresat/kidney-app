import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toLocalDate = (date: string, locales: string) => {
  const options:object = {year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(locales, options);
};