declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string;
  }
}
export const process: NodeJS.Process = { env: {} };
