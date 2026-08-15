export function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toString();
}

formatId("abc-123");
formatId(42);
