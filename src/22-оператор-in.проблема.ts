type Cat = {
  meow: () => void
};

type Dog = {
  bark: () => void 
};

export function speak(animal: Cat | Dog): void {
  animal.bark();
}
