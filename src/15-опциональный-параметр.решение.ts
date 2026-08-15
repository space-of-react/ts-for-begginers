export function greet(name: string = "гость") {
  return "Привет, " + name;
}

greet("Макс");
greet();
