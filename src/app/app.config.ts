import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
} from '@angular/core';

import { AsyncInitializer } from './core/interfaces/async-initializer.interface';
import {
  performAsyncInitialization,
  splashFadeOut,
} from './core/utils/splash-screen.utils';
import { ConfigLoaderService } from './services/config-loader.service';
import { ConnectionCheckerService } from './services/connection-checker.service';
import { StorageInitializerService } from './services/storage-initializer.service';
import { TranslationLoaderService } from './services/translation-loader.service';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * App initializer that sequentially performs all long-running async setup tasks
     * before the Angular app fully bootstraps.
     *
     * Shows current loading status in the splash screen during each task,
     * and fades out the splash once initialization completes.
     */
    provideAppInitializer(async () => {
      // Initialize services that will perform long-running async tasks
      const initializers: AsyncInitializer[] = [
        inject(ConfigLoaderService),
        inject(ConnectionCheckerService),
        inject(StorageInitializerService),
        inject(TranslationLoaderService),
      ];

      // Initialize all necessary data asynchronously
      for (const initializer of initializers) {
        await performAsyncInitialization(initializer);
      }

      // Close up splash screen and move to initialized Angular app smoothly.
      await splashFadeOut();
    }),
  ],
};
