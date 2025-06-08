import { Injectable } from '@angular/core';
import { AsyncInitializer } from '../core/interfaces/async-initializer.interface';
import { delay } from '../core/utils/delay.utils';

/**
 * Simulates connection check.
 */
@Injectable({
  providedIn: 'root',
})
export class ConnectionCheckerService implements AsyncInitializer {
  public get taskDescription(): string {
    return 'Checking database connection';
  }

  public async init(): Promise<void> {
    await delay();
  }
}
