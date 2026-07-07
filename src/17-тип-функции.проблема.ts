export type Handler = any;

const onClick: Handler = (event: string) => {
  console.log("Клик:", event);
};

// @ts-expect-error Handler должен принимать строку, а не число
onClick(123);
