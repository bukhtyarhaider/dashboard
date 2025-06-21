# Dashboard

This project is a starter admin dashboard built with React, TypeScript, and Vite. It includes Tailwind CSS v4 for styling.

## Directory Structure

```
src/
  assets/      # images, svgs
  components/  # reusable UI components
  layouts/     # application shells
  pages/       # feature views
  hooks/       # custom React hooks
  services/    # API clients
  store/       # state management
  types/       # shared TypeScript interfaces
  utils/       # helpers and formatters
  config/      # environment and constants
```

## Development

Install dependencies (requires Node.js) and start the development server:

```bash
npm install
npm run dev
```

## Building

To create a production build:

```bash
npm run build
```

## Routing

React Router is used for client-side routing. Routes are defined in
`src/App.tsx` and page components live under `src/pages`.

## API client

`src/services/client.ts` contains a small helper around `fetch` for talking to
external APIs. It is written in TypeScript and can be used with any REST API.

```ts
import { ApiClient } from './src/services/client'

const client = new ApiClient({ baseUrl: 'https://api.example.com' })

interface User {
  id: string
  name: string
}

client.get<User>('/users/1').then(user => {
  console.log(user.name)
})
```

Use `post`, `put`, and `delete` for the other HTTP methods. The default export
`apiClient` creates a client with no base URL, which can be used directly for
simple requests.

## State Management

Redux Toolkit manages the application's global state. Store setup and slices
live under `src/store`. Typed hooks are provided for dispatching actions and
selecting state:

```ts
import { useAppDispatch, useAppSelector } from './src/store/hooks'
```

The store is connected via the `Provider` component in `src/main.tsx`.

### Authentication State

`src/store/authSlice.ts` manages the currently authenticated user. Login and
logout actions update the stored `user` and authentication `token`:

```ts
dispatch(login({ user, token }))
dispatch(logout())
```

Use the typed selector to access the current user:

```ts
const user = useAppSelector(state => state.auth.user)
```

## Middleware & Side Effects

- Redux Toolkit's default thunk middleware handles async actions.
- A custom logger middleware prints dispatched actions in development.
- Axios interceptors attach the auth token and handle errors globally.
- Errors trigger toast notifications via the `ToastProvider` component.
- Failed requests are retried once for transient network or server issues.
