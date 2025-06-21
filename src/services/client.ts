export interface ApiClientOptions {
  baseUrl?: string
  headers?: Record<string, string>
}

export class ApiClient {
  private baseUrl: string
  private headers: Record<string, string>

  constructor(options: ApiClientOptions = {}) {
    this.baseUrl = options.baseUrl ?? ''
    this.headers = options.headers ?? {}
  }

  private buildUrl(path: string): string {
    return `${this.baseUrl}${path}`
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const url = this.buildUrl(path)
    const response = await fetch(url, {
      ...init,
      headers: {
        ...this.headers,
        ...(init.headers || {})
      }
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => '')
      throw new Error(`Request failed with status ${response.status} ${errorText}`)
    }

    return response.status === 204 ? (undefined as T) : ((await response.json()) as T)
  }

  get<T>(path: string, init: RequestInit = {}) {
    return this.request<T>(path, { ...init, method: 'GET' })
  }

  post<T>(path: string, body?: unknown, init: RequestInit = {}) {
    return this.request<T>(path, {
      ...init,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(init.headers || {})
      },
      body: body !== undefined ? JSON.stringify(body) : undefined
    })
  }

  put<T>(path: string, body?: unknown, init: RequestInit = {}) {
    return this.request<T>(path, {
      ...init,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(init.headers || {})
      },
      body: body !== undefined ? JSON.stringify(body) : undefined
    })
  }

  delete<T>(path: string, init: RequestInit = {}) {
    return this.request<T>(path, { ...init, method: 'DELETE' })
  }
}

export const apiClient = new ApiClient()
