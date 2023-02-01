import {
  Configuration,
  Consent,
  Environment,
  Identities,
  IdentityProvider,
  InvokeRightEvent,
  IPInfo,
  Ketch,
  Plugin,
  ShowPreferenceOptions,
  StorageProvider,
} from '@ketch-sdk/ketch-types'

const NOT_IMPLEMENTED = 'not implemented'

/**
 * Ketch Tag API
 */
export class KetchAPI implements Ketch {
  /**
   * Creates a new KetchWrapper
   */
  constructor() {}

  /**
   * Registers a plugin
   *
   * @param plugin The plugin to register
   * @param config The configuration for the plugin
   */
  registerPlugin(plugin: Plugin, config?: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      window.ketch('registerPlugin', plugin, config, resolve, reject)
    })
  }

  /**
   * Registers an identity provider
   *
   * @param name The identity name
   * @param provider The provider
   */
  registerIdentityProvider(name: string, provider: IdentityProvider): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      window.ketch('registerIdentityProvider', name, provider, resolve, reject)
    })
  }

  /**
   * Registers a storage provider
   *
   * @param provider The provider for storage
   */
  registerStorageProvider(provider: StorageProvider): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      window.ketch('registerStorageProvider', provider, resolve, reject)
    })
  }

  /**
   * Emits an event to any registered listeners.
   *
   * @param eventName The event
   * @param args The arguments to the event
   * @deprecated Future version will return Promise<boolean>
   */
  emit(eventName: string | symbol, ...args: any[]): boolean {
    window.ketch('emit', eventName, args)
    return true
  }

  /**
   * Registers an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   * @deprecated Future version will return Promise<void>
   */
  on(eventName: string | symbol, listener: (...args: any[]) => void): this {
    window.ketch('on', eventName, listener)
    return this
  }

  /**
   * Registers an event listener for the given event that will only be called once
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   * @deprecated Future version will return Promise<void>
   */
  once(eventName: string | symbol, listener: (...args: any[]) => void): this {
    window.ketch('once', eventName, listener)
    return this
  }

  /**
   * Registers an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   * @deprecated Future version will return Promise<void>
   */
  addListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
    return this.on(eventName, listener)
  }

  /**
   * Unregisters an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   * @deprecated Future version will return Promise<void>
   */
  off(eventName: string | symbol, listener: (...args: any[]) => void): this {
    window.ketch('off', eventName, listener)
    return this
  }

  /**
   * Unregisters an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   * @deprecated Future version will return Promise<void>
   */
  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
    this.off(eventName, listener)
    return this
  }

  /**
   * Unregisters all an event listeners (optionally just for the specified eventName).
   *
   * @param eventName The event
   * @deprecated Future version will return Promise<void>
   */
  removeAllListeners(eventName?: string | symbol): this {
    window.ketch('removeAllListeners', eventName)
    return this
  }

  /**
   * Get config
   */
  getConfig(): Promise<Configuration> {
    return new Promise<Configuration>((resolve, reject) => {
      window.ketch('getConfig', resolve, reject)
    })
  }

  /**
   * Get consent
   */
  getConsent(): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      window.ketch('getConsent', resolve, reject)
    })
  }

  /**
   * Get environment
   */
  getEnvironment(): Promise<Environment> {
    return new Promise<Environment>((resolve, reject) => {
      window.ketch('getEnvironment', resolve, reject)
    })
  }

  /**
   * Get GeoIP
   */
  getGeoIP(): Promise<IPInfo> {
    return new Promise<IPInfo>((resolve, reject) => {
      window.ketch('getGeoIP', resolve, reject)
    })
  }

  /**
   * Get identities
   */
  getIdentities(): Promise<Identities> {
    return new Promise<Identities>((resolve, reject) => {
      window.ketch('getIdentities', resolve, reject)
    })
  }

  /**
   * Get jurisdiction
   */
  getJurisdiction(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      window.ketch('getJurisdiction', resolve, reject)
    })
  }

  /**
   * Get region information
   */
  getRegionInfo(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      window.ketch('getRegionInfo', resolve, reject)
    })
  }

  /**
   * Shows the Consent experience
   *
   * @deprecated Future version will return Promise<void>
   */
  showConsentExperience(): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      window.ketch('showConsentExperience', resolve, reject)
    })
  }

  /**
   * Shows the Preference experience.
   *
   * @param params Optional parameters for configuring the Preference experience
   * @deprecated Future version will return Promise<void>
   */
  showPreferenceExperience(params?: ShowPreferenceOptions): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      window.ketch('showPreferenceExperience', params, resolve, reject)
    })
  }

  /**
   * Invoke a right
   *
   * @param eventData The right event data
   */
  invokeRight(eventData: InvokeRightEvent): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      window.ketch('invokeRight', eventData, resolve, reject)
    })
  }

  /**
   * @deprecated Do not use. Not implemented
   */
  experienceClosed(): Promise<Consent> {
    return Promise.reject(NOT_IMPLEMENTED)
  }

  /**
   * @deprecated Do not use. Not implemented
   */
  hasConsent(): boolean {
    throw Error(NOT_IMPLEMENTED)
  }

  /**
   * @deprecated Do not use. Not implemented
   */
  setConsent(): Promise<Consent> {
    return Promise.reject(NOT_IMPLEMENTED)
  }

  /**
   * @deprecated Do not use. Not implemented
   */
  setShowConsentExperience(): Promise<void> {
    return Promise.reject(NOT_IMPLEMENTED)
  }
}
