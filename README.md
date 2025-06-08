# Angular Splash Screen with Async Initialization

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This project demonstrates how to implement a custom splash screen in an Angular application that stays visible until all long-running asynchronous initialization tasks are completed.

## Getting Started

### Requirements

Ensure you have [Node.js](https://nodejs.org/en/download) installed. This project supports:

- Node.js 18.x (from 18.19.1 onward)
- Node.js 20.x (from 20.11.1 onward)
- Node.js 22.x (from 22.0.0 onward)

### Install Dependencies

Install the required packages:

```
npm install
```

### Run the Application

To start the development server and view the app in your browser:

```
npm start
```

### What to Expect

A splash screen will appear immediately with a logo and loading message.

Angular will begin bootstrapping in the background.

Once all simulated async initialization tasks are completed, the splash screen will fade out and the main app will load.

## Features

- Custom splash screen shown **before Angular bootstraps**
- Dynamic loading messages to indicate what’s initializing
- Sequential execution of async tasks using Angular's `APP_INITIALIZER`
- Smooth transition from splash to app
- Extensible service-based initialization architecture

## Folder Structure

```
src
├── app
│   ├── app.component.html                      # Root component template
│   ├── app.component.scss                      # Root component styles
│   ├── app.component.ts                        # Root component logic
│   ├── app.config.ts                           # Application configuration and DI setup
│   ├── core                                    # Reusable, global logic
│   │   ├── interfaces
│   │   │   └── async-initializer.interface.ts  # Interface for async task contracts
│   │   └── utils
│   │       ├── delay.utils.ts                  # Delay helper for splash timing
│   │       └── splash-screen.utils.ts          # DOM helper for splash screen fade-out
│   └── services
│       ├── config-loader.service.ts            # Simulates load of remote config before app starts
│       ├── connection-checker.service.ts       # Simulates connection check
│       ├── storage-initializer.service.ts      # Simulates storage initialization
│       └── translation-loader.service.ts       # Simulates loading translations
├── index.html                                  # Bootstraps splash screen and Angular app
├── main.ts                                     # Entry point for Angular bootstrap
└── styles.scss                                 # Global styles (optional splash-related globals)
```

## Why Use Inline CSS for the Splash Screen?

Using **inline CSS** for the splash screen (instead of linking to an external stylesheet) ensures the splash screen appears **immediately**, without relying on Angular’s loading pipeline or external resource loading.

### Benefits of Inline CSS

- **Zero render delay**  
  Since styles are already present in the initial HTML payload, the browser can render the splash screen **without waiting** for any CSS files to load.

- **Flicker-free experience**  
  The splash screen is fully styled even before Angular bootstraps. This prevents a flash of unstyled content (FOUC).

- **Decoupled from Angular lifecycle**  
  The splash screen exists **before Angular takes control**. Using inline styles ensures it doesn't depend on Angular's asset pipeline or change detection.

- **Improved perceived performance**  
  Users see feedback instantly (a branded logo, loading message), even while JavaScript loads and initializes.

### When to Avoid It

Inline CSS should be used **only for critical-first render** styles (e.g., splash screen, loading spinner). Avoid inlining large or complex styles, as that bloats your HTML and harms maintainability.

## Tests

This project intentionally omits unit and e2e tests to keep the codebase focused, lightweight, and easy to follow for its primary purpose: **demonstrating a splash screen pattern in Angular**.

### What About Testing?

In real-world applications, testing is essential. This example skips tests only because:

- There’s **no business logic** or complex user interaction.
- Most functionality is related to DOM manipulation and async flows that would be tested **indirectly** in an integration environment.

### Clean by Design

All unused spec files (`*.spec.ts`) and test configuration were removed to reduce noise and improve focus. Additionally, test-related npm packages like `karma`, and `jasmine` were trimmed from `package.json` to keep dependencies lean and build times fast.

This results in a cleaner, faster project that's easier to clone, run, and understand — ideal for educational purposes.

## License

This project is licensed under the [MIT License](LICENSE).
