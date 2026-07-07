export type Handler = (event: string) => void;

const onClick: Handler = (event) => {
  console.log("Клик:", event);
};

// @ts-expect-error Handler должен принимать строку, а не число
onClick(123);
