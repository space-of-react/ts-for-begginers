export type Logger = (message: string) => string;

export const log: Logger = (message) => {
  console.log(message);
};
