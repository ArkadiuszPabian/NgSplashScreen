/**
 * Represents a service that performs a long-running asynchronous initialization task.
 * Intended to be used during application startup (e.g., for configuration, translation, storage).
 *
 * Implementing services should provide a user-friendly description and an initialization method.
 */
export interface AsyncInitializer {
  /**
   * Describes the task being performed (e.g., "Loading configuration...").
   * This value can be shown in the UI to inform users during app initialization.
   */
  get taskDescription(): string;

  /**
   * Executes the asynchronous initialization logic.
   * Should resolve once the service has completed its setup.
   */
  init(): Promise<void>;
}
