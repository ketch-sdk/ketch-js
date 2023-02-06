import {
  Configuration,
  Consent,
  Environment, ExperienceClosedReason,
  Identities,
  IdentityProvider,
  InvokeRightEvent,
  IPInfo,
  Ketch,
  Plugin,
  ShowPreferenceOptions,
  StorageOriginPolicy,
  StorageProvider
} from "@ketch-sdk/ketch-types";

function ketch<T = void>(fnName: string, ...args: any[]): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    window.ketch(fnName, ...args, resolve, reject)
  })
}

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
    return ketch('registerPlugin', plugin, config)
  }

  /**
   * Registers an identity provider
   *
   * @param name The identity name
   * @param provider The provider
   */
  registerIdentityProvider(name: string, provider: IdentityProvider): Promise<void> {
    return ketch('registerIdentityProvider', name, provider)
  }

  /**
   * Registers a storage provider
   *
   * @param policy The storage origin policy
   * @param provider The provider for storage
   */
  registerStorageProvider(policy: StorageOriginPolicy, provider: StorageProvider): Promise<void> {
    return ketch('registerStorageProvider', policy, provider)
  }

  /**
   * Emits an event to any registered listeners.
   *
   * @param eventName The event
   * @param args The arguments to the event
   */
  emit(eventName: string | symbol, ...args: any[]): Promise<void> {
    return ketch('emit', eventName, args)
  }

  /**
   * Registers an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   */
  on(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void> {
    return ketch('on', eventName, listener)
  }

  /**
   * Registers an event listener for the given event that will only be called once
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   */
  once(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void> {
    return ketch('once', eventName, listener)
  }

  /**
   * Registers an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   */
  addListener(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void> {
    return ketch('on', eventName, listener)
  }

  /**
   * Unregisters an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   */
  off(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void> {
    return ketch('off', eventName, listener)
  }

  /**
   * Unregisters an event listener for the given event
   *
   * @param eventName The event
   * @param listener The listener to call on the event
   */
  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): Promise<void> {
    return ketch('off', eventName, listener)
  }

  /**
   * Unregisters all an event listeners (optionally just for the specified eventName).
   *
   * @param eventName The event
   */
  removeAllListeners(eventName?: string | symbol): Promise<void> {
    return ketch('removeAllListeners', eventName)
  }

  /**
   * Get config
   */
  getConfig(): Promise<Configuration> {
    return ketch('getConfig')
  }

  /**
   * Get consent
   */
  getConsent(): Promise<Consent> {
    return ketch('getConsent')
  }

  /**
   * Get environment
   */
  getEnvironment(): Promise<Environment> {
    return ketch('getEnvironment')
  }

  /**
   * Get GeoIP
   */
  getGeoIP(): Promise<IPInfo> {
    return ketch('getGeoIP')
  }

  /**
   * Get identities
   */
  getIdentities(): Promise<Identities> {
    return ketch('getIdentities')
  }

  /**
   * Get jurisdiction
   */
  getJurisdiction(): Promise<string> {
    return ketch('getJurisdiction')
  }

  /**
   * Get region information
   */
  getRegionInfo(): Promise<string> {
    return ketch('getRegionInfo')
  }

  /**
   * Shows the Consent experience
   */
  showConsent(): Promise<void> {
    return ketch('showConsent')
  }

  /**
   * Shows the Preference experience.
   *
   * @param params Optional parameters for configuring the Preference experience
   */
  showPreferences(params?: ShowPreferenceOptions): Promise<void> {
    return ketch('showPreferences', params)
  }

  /**
   * Invoke a right
   *
   * @param eventData The right event data
   */
  invokeRight(eventData: InvokeRightEvent): Promise<void> {
    return ketch('invokeRight', eventData)
  }

  /**
   * @deprecated Do not use. Not implemented
   */
  experienceClosed(reason: ExperienceClosedReason): Promise<void> {
    return ketch('experienceClosed', reason)
  }

  /**
   * @deprecated Do not use. Not implemented
   */
  setConsent(consent: Consent): Promise<void> {
    return ketch('setConsent', consent)
  }
}
