import * as ketchapi from '@ketch-sdk/ketch-web-api'
import { Pusher } from './types'
import {
  Callback,
  Consent,
  Identities,
  InvokeRightsEvent,
  Plugin,
  PreferenceExperienceParams,
} from '@ketch-sdk/ketch-plugin/src'

type EventMap = {
  [id: string]: string
}

const _events: EventMap = {
  consent: 'onConsent',
  environment: 'onEnvironment',
  geoip: 'onGeoIP',
  hideexperience: 'onHideExperience',
  identities: 'onIdentities',
  invokeright: 'onInvokeRight',
  jurisdiction: 'onJurisdiction',
  regioninfo: 'onRegionInfo',
  showconsentexperience: 'onShowConsentExperience',
  showpreferenceexperience: 'onShowPreferenceExperience',
  willshowexperience: 'onWillShowExperience',
}

/**
 * Wraps the Ketch tag
 */
export class KetchWrapper {
  _semaphore: Pusher

  /**
   * Creates a new KetchWrapper using the given semaphore
   *
   * @param semaphore The semaphore instance to wrap
   */
  constructor(semaphore: Pusher) {
    this._semaphore = semaphore
  }

  /**
   * Update the experience display status to closed, with the given reason
   *
   * @param reason The reason the experience was closed
   */
  async experienceClosed(reason: string): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['experienceClosed', reason, resolve, reject])
    })
  }

  /**
   * Get config
   */
  async getConfig(): Promise<ketchapi.Configuration> {
    return new Promise<ketchapi.Configuration>((resolve, reject) => {
      this._semaphore.push(['getConfig', resolve, reject])
    })
  }

  /**
   * Get consent
   */
  async getConsent(): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['getConsent', resolve, reject])
    })
  }

  /**
   * Get environment
   */
  async getEnvironment(): Promise<ketchapi.Environment> {
    return new Promise<ketchapi.Environment>((resolve, reject) => {
      this._semaphore.push(['getEnvironment', resolve, reject])
    })
  }

  /**
   * Get GeoIP
   */
  async getGeoIP(): Promise<ketchapi.IPInfo> {
    return new Promise<ketchapi.IPInfo>((resolve, reject) => {
      this._semaphore.push(['getGeoIP', resolve, reject])
    })
  }

  /**
   * Get identities
   */
  async getIdentities(): Promise<Identities> {
    return new Promise<Identities>((resolve, reject) => {
      this._semaphore.push(['getIdentities', resolve, reject])
    })
  }

  /**
   * Get jurisdiction
   */
  async getJurisdiction(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._semaphore.push(['getJurisdiction', resolve, reject])
    })
  }

  /**
   * Get region information
   */
  async getRegionInfo(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._semaphore.push(['getRegionInfo', resolve, reject])
    })
  }

  /**
   * Invoke a right
   *
   * @param eventData The right event data
   */
  async invokeRight(eventData: InvokeRightsEvent): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._semaphore.push(['invokeRight', eventData, resolve, reject])
    })
  }

  /**
   * Registers an event listener for the given event
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async on(event: string, callback: Callback): Promise<void> {
    const evt = _events[event.toLowerCase()]
    if (evt) {
      this._semaphore.push([evt, callback])
    } else {
      console.error(`event ${event} not supported`)
    }
  }

  /**
   * Registers a plugin
   *
   * @param plugin The plugin to register
   */
  async registerPlugin(plugin: Plugin): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._semaphore.push(['registerPlugin', plugin, resolve, reject])
    })
  }

  /**
   * TODO: how is this different to setConsent?
   *
   * @param consent The consent to change
   */
  async changeConsent(consent: Consent): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._semaphore.push(['changeConsent', consent, resolve, reject])
    })
  }

  /**
   * Sets the consent
   *
   * @param consent The consent to set
   */
  async setConsent(consent: Consent): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['setConsent', consent, resolve, reject])
    })
  }

  /**
   * Sets the environment
   *
   * @param env The environment to set
   */
  async setEnvironment(env: ketchapi.Environment): Promise<ketchapi.Environment> {
    return new Promise<ketchapi.Environment>((resolve, reject) => {
      this._semaphore.push(['setEnvironment', env, resolve, reject])
    })
  }

  /**
   * Sets the GeoIP
   *
   * @param geo The GeoIP information to set
   */
  async setGeoIP(geo: ketchapi.IPInfo): Promise<ketchapi.IPInfo> {
    return new Promise<ketchapi.IPInfo>((resolve, reject) => {
      this._semaphore.push(['setGeoIP', geo, resolve, reject])
    })
  }

  /**
   * Sets the identities
   *
   * @param id The identities to set
   */
  async setIdentities(id: Identities): Promise<Identities> {
    return new Promise<Identities>((resolve, reject) => {
      this._semaphore.push(['setIdentities', id, resolve, reject])
    })
  }

  /**
   * Sets the jurisdiction
   *
   * @param jurisdiction The jurisdiction to set
   */
  async setJurisdiction(jurisdiction: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._semaphore.push(['setJurisdiction', jurisdiction, resolve, reject])
    })
  }

  /**
   * Sets the region info
   *
   * @param region The region to set
   */
  async setRegionInfo(region: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._semaphore.push(['setRegionInfo', region, resolve, reject])
    })
  }

  /**
   * Returns true if Consent experience should be shown based on the given consent
   *
   * @param consent The consent to check
   */
  async shouldShowConsent(consent: Consent): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._semaphore.push(['shouldShowConsent', consent, resolve, reject])
    })
  }

  /**
   * TODO: what is this?
   */
  async setShowConsentExperience(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._semaphore.push(['setShowConsentExperience', resolve, reject])
    })
  }

  /**
   * Sets a provisional consent
   *
   * @param consent The provisional consent
   */
  async setProvisionalConsent(consent: Consent): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._semaphore.push(['setProvisionalConsent', consent, resolve, reject])
    })
  }

  /**
   * Shows the Consent experience
   */
  async showConsentExperience(): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['showConsentExperience', resolve, reject])
    })
  }

  /**
   * Shows the Preference experience.
   *
   * @param params Optional parameters for configuring the Preference experience
   */
  async showPreferenceExperience(params?: PreferenceExperienceParams): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['showPreferenceExperience', params, resolve, reject])
    })
  }
}
