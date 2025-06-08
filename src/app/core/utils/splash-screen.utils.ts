import { AsyncInitializer } from '../interfaces/async-initializer.interface';
import { delay } from './delay.utils';

/**
 * Updates splash screen text that indicates what part of the app is currently loading.
 *
 * @param text New text on splash screen.
 */
export function updateTitle(text: string): void {
  const elem = document.getElementById('updater');
  if (elem) {
    elem.textContent = text;
  }
}

/**
 * Makes splash screen slowly fading out and waits for it to end.
 */
export async function splashFadeOut(): Promise<void> {
  document.body.classList.add('fade-out');
  await delay();
}

/**
 * Updates text that indicates what is currently loading and waits for async operation loading till it completes.
 *
 * @param service Service that is going to be performing long-running, async task.
 */
export async function performAsyncInitialization(
  service: AsyncInitializer
): Promise<void> {
  updateTitle(service.taskDescription);
  await service.init();
}
