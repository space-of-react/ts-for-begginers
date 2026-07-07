export type Logger = (message: string) => void;

export export const log: Logger = (message) => {
  console.log(message);
};
