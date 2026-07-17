export type Logger = (message: string) => void;

export const log: Logger = (message) => {
  console.log(message);
};
