// Convenience to use during development. Make shure that these are not used in production code.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function todo(message: string | void): any {
  if (message) {
    console.error(message);
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function panic(message: string | void): any {
  throw `panic: ${message}`;
}
