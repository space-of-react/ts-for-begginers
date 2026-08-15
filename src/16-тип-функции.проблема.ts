export type Handler = any;

export const onClick: Handler = (event: string) => {
  console.log("Клик:", event);
};

// @ts-expect-error Handler должен принимать строку, а не число
onClick(123);
