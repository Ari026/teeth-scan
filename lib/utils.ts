import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getConfidenceColor(confidence: number): string {
  if (confidence > 65) return "bg-green-500"
  if (confidence < 35) return "bg-red-500"
  return "bg-yellow-500"
}