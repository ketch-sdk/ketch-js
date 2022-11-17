import {
  Callback,
  Configuration,
  Consent,
  InvokeRightEvent,
  Plugin,
  ShowPreferenceOptions
} from "@ketch-sdk/ketch-types";

/**
 * Wraps the Ketch tag
 */
export class KetchWrapper {
  /**
   * Registers an event listener for the given event
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async on(event: string, callback: Callback): Promise<void> {
    return this.push(['on', event, callback])
  }

  /**
   * Registers an event listener for the given event to be called once
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async once(event: string, callback: Callback): Promise<void> {
    return this.push(['once', event, callback])
  }

  /**
   * Unregisters an event listener for the given event
   *
   * @param event The event
   * @param callback The callback to call on the event
   */
  async off(event: string, callback: Callback): Promise<void> {
    return this.push(['off', event, callback])
  }

  /**
   * Registers a plugin
   *
   * @param plugin The plugin to register
   */
  async registerPlugin(plugin: Plugin): Promise<void> {
    return this.push(['registerPlugin', plugin])
  }

  /**
   * Sets the jurisdiction
   *
   * @param jurisdiction The jurisdiction to set
   */
  async setJurisdiction(jurisdiction: string): Promise<string> {
    return this.push(['setJurisdiction', jurisdiction])
  }

  /**
   * Get config
   */
  async getConfig(): Promise<Configuration> {
    return this.push(['getConfig'])
  }

  /**
   * Invoke a right
   *
   * @param eventData The right event data
   */
  async invokeRight(eventData: InvokeRightEvent): Promise<void> {
    return this.push(['invokeRight', eventData])
  }

  /**
   * Shows the Preference experience.
   *
   * @param params Optional parameters for configuring the Preference experience
   */
  async showPreferenceExperience(params?: ShowPreferenceOptions): Promise<Consent> {
    return this.push(['showPreferenceExperience', params])
  }

  /**
   * Shows the Consent experience.
   */
  async showConsentExperience(): Promise<Consent> {
    return this.push(['showConsentExperience'])
  }

  private async push<T>(args: any[]): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      window.semaphore.push(args.concat(resolve, reject))
    })
  }
}
