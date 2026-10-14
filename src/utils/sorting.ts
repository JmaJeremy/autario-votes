/**
 * Helper utilities for candidate sorting and formatting.
 */

/**
 * Extracts a comparable last name from a candidate's full name,
 * supporting compound surnames (e.g., 'Di Giovanni', 'van Amelsvoort').
 */
export function getLastName(name: string): string {
  if (!name) return '';
  const trimmed = name.trim();
  const parts = trimmed.split(/\s+/);
  if (parts.length <= 1) return trimmed.toLowerCase();

  const secondLast = parts[parts.length - 2].toLowerCase();
  if (['di', 'de', 'van', 'von', 'del', 'della', 'la', 'le'].includes(secondLast)) {
    return `${parts[parts.length - 2]} ${parts[parts.length - 1]}`.toLowerCase();
  }

  return parts[parts.length - 1].toLowerCase();
}

/**
 * Sorts any array of candidate objects in alphabetical order by last name.
 */
export function sortByLastName<T extends { name: string }>(candidates: T[]): T[] {
  return [...candidates].sort((a, b) => {
    const lNameA = getLastName(a.name);
    const lNameB = getLastName(b.name);
    const cmp = lNameA.localeCompare(lNameB);
    if (cmp !== 0) return cmp;
    return a.name.localeCompare(b.name);
  });
}
