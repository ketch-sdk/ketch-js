# ketch-js

Ketch JavaScript ES Module for the Ketch Tag

## Initialization

```typescript
import { loadScript } from '@ketch-sdk/ketch-js'
import { Consent } from '@ketch-sdk/ketch-types'

function myConsentHandler(consent: Consent) {
  console.log(consent)
}

const api = await loadScript('myOrgCode', 'myPropertyCode')
```

## Register a plugin

```typescript
api.registerPlugin(myPlugin)
```

## Register an identity provider

```typescript
api.registerIdentityProvider('myIdentity', myProvider)
```

## Register a storage provider

```typescript
api.registerStorageProvider(myProvider)
```

## Emits a custom event

```typescript
api.emit('myEvent', 'some argument')
```

## Register an event listener

```typescript
api.on('consent', myConsentHandler)
api.addListener('consent', myConsentHandler)
```

## Register an event listener that is called only once

```typescript
api.once('consent', myConsentHandler)
```

## Deregister an event listener

```typescript
api.off('consent', myConsentHandler)
api.removeEventListener('consent', myConsentHandler)
```

## Deregister all event listeners

```typescript
api.removeAllListeners('consent')
```

## Get config

```typescript
const config = await api.getConfig()
```

## Get consent

```typescript
const consent = await api.getConsent()
```

## Get environment

```typescript
const env = await api.getEnvironment()
```

## Get GeoIP

```typescript
const ipInfo = await api.getGeoIP()
```

## Get identities

```typescript
const identities = await api.getIdentities()
```

## Get jurisdiction

```typescript
const jurisdiction = await api.getJurisdiction()
```

## Get region information

```typescript
const regionInfo = await api.getRegionInfo()
```

## Show the Consent experience

```typescript
api.showConsentExperience()
```

## Show the Preference experience.

```typescript
const options: ShowPreferenceOptions = {}
api.showPreferenceExperience(options)
```

## Invoke a right

```typescript
const request: InvokeRightEvent = {}
api.invokeRight(request)
```
