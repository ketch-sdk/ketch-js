import {
  Callback,
  Configuration,
  Consent,
  InvokeRightEvent,
  Plugin,
  Pusher,
  ShowPreferenceOptions
} from "@ketch-sdk/ketch-types";

/**
 * Wraps the Ketch tag
 */
export class KetchWrapper {
  private readonly _semaphore: Pusher

  /**
   * Creates a new KetchWrapper using the given semaphore
   *
   * @param semaphore The semaphore instance to wrap
   */
  constructor(semaphore: Pusher) {
    this._semaphore = semaphore
  }

  /**
   * Registers an event listener for the given event
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async on(event: string, callback: Callback): Promise<void> {
    this._semaphore.push(['on', event, callback])
  }

  /**
   * Registers an event listener for the given event to be called once
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async once(event: string, callback: Callback): Promise<void> {
    this._semaphore.push(['once', event, callback])
  }

  /**
   * Unregisters an event listener for the given event
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async off(event: string, callback: Callback): Promise<void> {
    this._semaphore.push(['off', event, callback])
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
   * Get config
   */
  async getConfig(): Promise<Configuration> {
    return new Promise<Configuration>((resolve, reject) => {
      this._semaphore.push(['getConfig', resolve, reject])
    })
  }

  /**
   * Invoke a right
   *
   * @param eventData The right event data
   */
  async invokeRight(eventData: InvokeRightEvent): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._semaphore.push(['invokeRight', eventData, resolve, reject])
    })
  }

  /**
   * Shows the Preference experience.
   *
   * @param params Optional parameters for configuring the Preference experience
   */
  async showPreferenceExperience(params?: ShowPreferenceOptions): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['showPreferenceExperience', params, resolve, reject])
    })
  }

  /**
   * Shows the Consent experience.
   */
  async showConsentExperience(): Promise<Consent> {
    return new Promise<Consent>((resolve, reject) => {
      this._semaphore.push(['showConsentExperience', resolve, reject])
    })
  }
}
