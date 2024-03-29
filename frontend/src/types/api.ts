export type TErrorApi = {
  message: string;
  errors: Partial<Record<string, string[]>>;
};
