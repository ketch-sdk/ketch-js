import { KetchAPI } from './KetchAPI'
import {
  Configuration,
  Consent,
  Environment,
  Identities,
  IdentityProvider,
  InvokeRightEvent,
  IPInfo,
  Ketch,
  ShowPreferenceOptions,
  StorageProvider,
} from '@ketch-sdk/ketch-types'
import ketch from './ketch'

const NOT_IMPLEMENTED = 'not implemented'

describe('KetchAPI', () => {
  const host = {} as Ketch
  const api = new KetchAPI()
  const pushMock = jest.fn()

  beforeEach(() => {
    pushMock.mockReset()
    window.semaphore = {
      push: pushMock,
      loaded: true,
    }
    window.ketch = ketch
  })

  describe('registerPlugin', () => {
    it('pushes action', () => {
      const p = async () => {}
      const c = {}
      expect.assertions(5)
      pushMock.mockImplementation(([fn, plugin, config, resolve, reject]) => {
        expect(fn).toBe('registerPlugin')
        expect(plugin).toStrictEqual(p)
        expect(config).toStrictEqual(c)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(host, c)
      })
      return api.registerPlugin(p, c)
    })
  })

  describe('registerIdentityProvider', () => {
    it('pushes action', () => {
      const n = 'foobar'
      const p = {} as IdentityProvider
      expect.assertions(5)
      pushMock.mockImplementation(([fn, name, provider, resolve, reject]) => {
        expect(fn).toBe('registerIdentityProvider')
        expect(name).toStrictEqual(n)
        expect(provider).toStrictEqual(p)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return api.registerIdentityProvider(n, p)
    })
  })

  describe('registerStorageProvider', () => {
    it('pushes action', () => {
      const p = {} as StorageProvider
      expect.assertions(4)
      pushMock.mockImplementation(([fn, provider, resolve, reject]) => {
        expect(fn).toBe('registerStorageProvider')
        expect(provider).toStrictEqual(p)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return api.registerStorageProvider(p)
    })
  })

  describe('emit', () => {
    it('pushes action', () => {
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, args, resolve, reject]) => {
        expect(fn).toBe('emit')
        expect(eventName).toStrictEqual(n)
        expect(args).toStrictEqual([123, 456])
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.emit(n, 123, 456)
    })
  })

  describe('on', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('on')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.on(n, l)
    })
  })

  describe('once', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('once')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.once(n, l)
    })
  })

  describe('addListener', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('on')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.addListener(n, l)
    })
  })

  describe('off', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('off')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.off(n, l)
    })
  })

  describe('removeListener', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('off')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.removeListener(n, l)
    })
  })

  describe('removeAllListeners', () => {
    it('pushes action', () => {
      const n = 'foobar'
      expect.assertions(4)
      pushMock.mockImplementation(([fn, eventName, resolve, reject]) => {
        expect(fn).toBe('removeAllListeners')
        expect(eventName).toStrictEqual(n)
        expect(resolve).toBeUndefined()
        expect(reject).toBeUndefined()
      })
      api.removeAllListeners(n)
    })
  })

  describe('getConfig', () => {
    it('pushes action', () => {
      const c = {} as Configuration
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getConfig')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getConfig()).resolves.toStrictEqual(c)
    })
  })

  describe('getConsent', () => {
    it('pushes action', () => {
      const c = {} as Consent
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getConsent')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getConsent()).resolves.toStrictEqual(c)
    })
  })

  describe('getEnvironment', () => {
    it('pushes action', () => {
      const c = {} as Environment
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getEnvironment')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getEnvironment()).resolves.toStrictEqual(c)
    })
  })

  describe('getGeoIP', () => {
    it('pushes action', () => {
      const c = {} as IPInfo
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getGeoIP')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getGeoIP()).resolves.toStrictEqual(c)
    })
  })

  describe('getIdentities', () => {
    it('pushes action', () => {
      const c = {} as Identities
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getIdentities')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getIdentities()).resolves.toStrictEqual(c)
    })
  })

  describe('getJurisdiction', () => {
    it('pushes action', () => {
      const c = 'gdpr'
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getJurisdiction')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getJurisdiction()).resolves.toBe(c)
    })
  })

  describe('getRegionInfo', () => {
    it('pushes action', () => {
      const c = 'US-CA'
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('getRegionInfo')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.getRegionInfo()).resolves.toBe(c)
    })
  })

  describe('showConsentExperience', () => {
    it('pushes action', () => {
      const c = 'US-CA'
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('showConsentExperience')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.showConsentExperience()).resolves.toBe(c)
    })
  })

  describe('showPreferenceExperience', () => {
    it('pushes action', () => {
      const c = {} as Consent
      const p = {} as ShowPreferenceOptions
      expect.assertions(5)
      pushMock.mockImplementation(([fn, params, resolve, reject]) => {
        expect(fn).toBe('showPreferenceExperience')
        expect(params).toStrictEqual(p)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve(c)
      })
      return expect(api.showPreferenceExperience(p)).resolves.toStrictEqual(c)
    })
  })

  describe('invokeRight', () => {
    it('pushes action', () => {
      const e = {} as InvokeRightEvent
      expect.assertions(4)
      pushMock.mockImplementation(([fn, request, resolve, reject]) => {
        expect(fn).toBe('invokeRight')
        expect(request).toStrictEqual(e)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return api.invokeRight(e)
    })
  })

  describe('experienceClosed', () => {
    it('throws not implemented', () => {
      return expect(api.experienceClosed()).rejects.toBe(NOT_IMPLEMENTED)
    })
  })

  describe('hasConsent', () => {
    it('throws not implemented', () => {
      return expect(api.hasConsent).toThrow(NOT_IMPLEMENTED)
    })
  })

  describe('setConsent', () => {
    it('throws not implemented', () => {
      return expect(api.setConsent()).rejects.toBe(NOT_IMPLEMENTED)
    })
  })

  describe('setShowConsentExperience', () => {
    it('throws not implemented', () => {
      return expect(api.setShowConsentExperience()).rejects.toBe(NOT_IMPLEMENTED)
    })
  })
})
