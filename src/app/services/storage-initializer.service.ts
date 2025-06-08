import { Injectable } from '@angular/core';
import { AsyncInitializer } from '../core/interfaces/async-initializer.interface';
import { delay } from '../core/utils/delay.utils';

/**
 * Simulates storage initialization.
 */
@Injectable({
  providedIn: 'root',
})
export class StorageInitializerService implements AsyncInitializer {
  public get taskDescription(): string {
    return 'Initializing storage';
  }

  public async init(): Promise<void> {
    await delay();
  }
}
