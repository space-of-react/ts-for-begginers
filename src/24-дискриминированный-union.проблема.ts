type Success = {
  status: "success";
  data: string;
};

type Failure = {
  status: "error";
  message: string;
};

export type Result = Success | Failure;

export function handle(result: Result): string {
  return result.data;
}
