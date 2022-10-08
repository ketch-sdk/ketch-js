import { KetchWrapper } from './wrapper'
import { Window } from './types'

const RootUrl = 'https://global.ketchcdn.com/web/v2'

export async function loadScript(window: Window | undefined, organizationCode: string, propertyCode: string): Promise<KetchWrapper | null> {
  if (window === undefined) {
    return null
  }

  if (window.Ketch?.loaded) {
    return new KetchWrapper(window.semaphore = window.Ketch)
  }

  if (window.semaphore?.loaded) {
    return new KetchWrapper(window.Ketch = window.semaphore)
  }

  window.semaphore = window.Ketch = (window.Ketch || window.semaphore || [])

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `${RootUrl}/config/${organizationCode}/${propertyCode}/boot.js`
  script.defer = script.async = true

  const headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error(
      'Expected document.body not to be null. Ketch.js requires a <body> element.'
    );
  }

  headOrBody.appendChild(script);

  return new KetchWrapper(window.Ketch)
}
