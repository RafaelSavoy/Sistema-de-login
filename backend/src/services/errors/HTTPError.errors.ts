export class HTTPError extends Error {
  code: number;
  message: string;

  constructor(message: string, code: number) {
    super();
    this.code = code;
    this.message = message;
  }
}
