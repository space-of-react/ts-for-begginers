export type Logger = (message: string) => string;

export export const log: Logger = (message) => {
  console.log(message);
};
