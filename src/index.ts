import { KetchAPI } from './KetchAPI'
import ketch from './ketch'

const BaseUrl = 'https://global.ketchcdn.com/web/v2'

export async function loadScript(organizationCode: string, propertyCode: string): Promise<KetchAPI> {
  if (window.semaphore && window.semaphore.loaded) {
    return new KetchAPI()
  }

  window.semaphore = window.semaphore || []
  window.semaphore.loaded = false
  window.ketch = window.ketch || ketch

  return new Promise<KetchAPI>((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `${BaseUrl}/config/${organizationCode}/${propertyCode}/boot.js`
    script.defer = script.async = true
    script.addEventListener('load', () => {
      resolve(new KetchAPI())
    })
    script.addEventListener('error', e => {
      reject(e.error)
    })

    const parent = document.head || document.body
    parent.appendChild(script)
  })
}
