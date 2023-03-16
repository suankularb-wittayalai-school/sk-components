export function toggleItem(item: any, array: any[]): any[] {
  return array.includes(item)
    ? array.filter((existingItem) => item !== existingItem)
    : [...array, item];
}
