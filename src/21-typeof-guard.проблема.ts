export function formatId(id: string | number): string {
  return id.toUpperCase();
}

formatId("abc-123");
formatId(42);
