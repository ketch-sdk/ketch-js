import { KetchAPI } from './KetchAPI'
import {
  Configuration,
  Consent,
  Environment,
  ExperienceClosedReason,
  Identities,
  IdentityProvider,
  InvokeRightEvent,
  IPInfo,
  ShowPreferenceOptions,
  StorageOriginPolicy,
  StorageProvider,
} from '@ketch-sdk/ketch-types'
import ketch from './ketch'

describe('KetchAPI', () => {
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
      expect.assertions(6)
      pushMock.mockImplementation(([fn, plugin, config, resolve, reject]) => {
        expect(fn).toBe('registerPlugin')
        expect(plugin).toStrictEqual(p)
        expect(config).toStrictEqual(c)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.registerPlugin(p, c)).resolves.toBeUndefined()
    })
  })

  describe('registerIdentityProvider', () => {
    it('pushes action', () => {
      const n = 'foobar'
      const p = {} as IdentityProvider
      expect.assertions(6)
      pushMock.mockImplementation(([fn, name, provider, resolve, reject]) => {
        expect(fn).toBe('registerIdentityProvider')
        expect(name).toStrictEqual(n)
        expect(provider).toStrictEqual(p)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.registerIdentityProvider(n, p)).resolves.toBeUndefined()
    })
  })

  describe('registerStorageProvider', () => {
    it('pushes action', () => {
      const p = {} as StorageProvider
      expect.assertions(6)
      pushMock.mockImplementation(([fn, policy, provider, resolve, reject]) => {
        expect(fn).toBe('registerStorageProvider')
        expect(policy).toBe(StorageOriginPolicy.CrossOrigin)
        expect(provider).toStrictEqual(p)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.registerStorageProvider(StorageOriginPolicy.CrossOrigin, p)).resolves.toBeUndefined()
    })
  })

  describe('emit', () => {
    it('pushes action', () => {
      const n = 'foobar'
      expect.assertions(6)
      pushMock.mockImplementation(([fn, eventName, args, resolve, reject]) => {
        expect(fn).toBe('emit')
        expect(eventName).toStrictEqual(n)
        expect(args).toStrictEqual([123, 456])
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.emit(n, 123, 456)).resolves.toBeUndefined()
    })
  })

  describe('on', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(6)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('on')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.on(n, l)).resolves.toBeUndefined()
    })
  })

  describe('once', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(6)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('once')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.once(n, l)).resolves.toBeUndefined()
    })
  })

  describe('addListener', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(6)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('on')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.addListener(n, l)).resolves.toBeUndefined()
    })
  })

  describe('off', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(6)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('off')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.off(n, l)).resolves.toBeUndefined()
    })
  })

  describe('removeListener', () => {
    it('pushes action', () => {
      const l = jest.fn()
      const n = 'foobar'
      expect.assertions(6)
      pushMock.mockImplementation(([fn, eventName, listener, resolve, reject]) => {
        expect(fn).toBe('off')
        expect(eventName).toStrictEqual(n)
        expect(listener).toStrictEqual(l)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.removeListener(n, l)).resolves.toBeUndefined()
    })
  })

  describe('removeAllListeners', () => {
    it('pushes action', () => {
      const n = 'foobar'
      expect.assertions(5)
      pushMock.mockImplementation(([fn, eventName, resolve, reject]) => {
        expect(fn).toBe('removeAllListeners')
        expect(eventName).toStrictEqual(n)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.removeAllListeners(n)).resolves.toBeUndefined()
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

  describe('showConsent', () => {
    it('pushes action', () => {
      expect.assertions(4)
      pushMock.mockImplementation(([fn, resolve, reject]) => {
        expect(fn).toBe('showConsent')
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.showConsent()).resolves.toBeUndefined()
    })
  })

  describe('showPreferences', () => {
    it('pushes action', () => {
      const p = {} as ShowPreferenceOptions
      expect.assertions(5)
      pushMock.mockImplementation(([fn, params, resolve, reject]) => {
        expect(fn).toBe('showPreferences')
        expect(params).toStrictEqual(p)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.showPreferences(p)).resolves.toBeUndefined()
    })
  })

  describe('invokeRight', () => {
    it('pushes action', () => {
      const e = {} as InvokeRightEvent
      expect.assertions(5)
      pushMock.mockImplementation(([fn, request, resolve, reject]) => {
        expect(fn).toBe('invokeRight')
        expect(request).toStrictEqual(e)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.invokeRight(e)).resolves.toBeUndefined()
    })
  })

  describe('experienceClosed', () => {
    it('pushes action', () => {
      pushMock.mockImplementation(([fn, params, resolve, reject]) => {
        expect(fn).toBe('experienceClosed')
        expect(params).toStrictEqual(ExperienceClosedReason.CLOSE)
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(api.experienceClosed(ExperienceClosedReason.CLOSE)).resolves.toBeUndefined()
    })
  })

  describe('setConsent', () => {
    it('pushes action', () => {
      pushMock.mockImplementation(([fn, consent, resolve, reject]) => {
        expect(fn).toBe('setConsent')
        expect(consent).toStrictEqual({
          purposes: {},
        })
        expect(resolve).toBeDefined()
        expect(reject).toBeDefined()
        resolve()
      })
      return expect(
        api.setConsent({
          purposes: {},
        }),
      ).resolves.toBeUndefined()
    })
  })
})
