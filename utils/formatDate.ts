/**
 * Format date (string) to <month-day-year>
 * @example January 1, 2025
 * @param date
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
