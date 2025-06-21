# Dashboard

This project is a starter admin dashboard built with React, TypeScript, and Vite. It includes Tailwind CSS v4 for styling.

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

## API client

`src/api/client.ts` contains a small helper around `fetch` for talking to
external APIs. It is written in TypeScript and can be used with any REST API.

```ts
import { ApiClient } from './src/api/client'

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
