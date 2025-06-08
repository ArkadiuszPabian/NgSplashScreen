/**
 * Waits given amount of time without making any other operations.
 *
 * @param delayInMs Time to wait, in milliseconds.
 */
export function delay(delayInMs: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delayInMs));
}
