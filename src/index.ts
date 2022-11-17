import { KetchWrapper } from './wrapper'
import { Loaded, Pusher } from '@ketch-sdk/ketch-types'

const BaseUrl = 'https://global.ketchcdn.com/web/v2'

export async function loadScript(organizationCode: string, propertyCode: string): Promise<KetchWrapper> {
  if (window.semaphore && window.semaphore.loaded) {
    return new KetchWrapper(window.semaphore)
  }

  const initial: Pusher & Loaded = [] as any
  initial.loaded = false

  window.semaphore = window.semaphore || initial

  return new Promise<KetchWrapper>((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `${BaseUrl}/config/${organizationCode}/${propertyCode}/boot.js`
    script.defer = script.async = true
    script.addEventListener('load', () => {
      window.semaphore.loaded = true
      resolve(new KetchWrapper(window.semaphore))
    })
    script.addEventListener('error', e => {
      reject(e.error)
    })

    const headOrBody = document.head || document.body
    if (!headOrBody) {
      throw new Error('Expected document.body not to be null. Ketch.js requires a <body> element.')
    }

    headOrBody.appendChild(script)
  })
}
