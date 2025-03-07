# Commands and Guidelines for the Portfolio Project

## Commands
- **Development server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **Test (all)**: `npm test`
- **Test (single)**: `npm test -- -t "test name"`

## Code Style
- **Formatting**: Use Prettier with 2 space indentation
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Types**: Use TypeScript with strict mode, prefer explicit types over `any`
- **Imports**: Group imports (React, third-party, internal), sort alphabetically
- **Error handling**: Use try/catch blocks with specific error types
- **Components**: Functional components with hooks, props interface on top
- **State management**: Context API for global state, useState for local state