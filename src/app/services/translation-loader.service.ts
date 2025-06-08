import { Injectable } from '@angular/core';
import { AsyncInitializer } from '../core/interfaces/async-initializer.interface';
import { delay } from '../core/utils/delay.utils';

/**
 * Simulates loading translations.
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationLoaderService implements AsyncInitializer {
  public get taskDescription(): string {
    return 'Loading translations';
  }

  public async init(): Promise<void> {
    await delay();
  }
}
