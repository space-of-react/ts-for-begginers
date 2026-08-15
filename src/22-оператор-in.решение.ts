type Cat = {
  meow: () => void
};

type Dog = {
  bark: () => void
};

export function speak(animal: Cat | Dog): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
