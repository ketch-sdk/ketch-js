export type Pusher = {
  push(a: any[]): void
}

export type Loaded = {
  loaded?: boolean
}

export interface Window {
  Ketch?: Pusher & Loaded
  semaphore?: Pusher & Loaded
}
