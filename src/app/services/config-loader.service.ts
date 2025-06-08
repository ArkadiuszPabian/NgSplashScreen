import { Injectable } from '@angular/core';
import { AsyncInitializer } from '../core/interfaces/async-initializer.interface';
import { delay } from '../core/utils/delay.utils';

/**
 * Simulates load of remote config before app starts.
 */
@Injectable({
  providedIn: 'root',
})
export class ConfigLoaderService implements AsyncInitializer {
  public get taskDescription(): string {
    return 'Loading configuration file';
  }

  public async init(): Promise<void> {
    await delay();
  }
}
