
# CallbackDetail


## Properties

Name | Type
------------ | -------------
`id` | string
`url` | string
`status` | number
`transactionId` | string
`createdAt` | Date
`body` | object
`responseBody` | string
`responseHeaders` | object
`responseTime` | number

## Example

```typescript
import type { CallbackDetail } from '@payzu/pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "url": null,
  "status": null,
  "transactionId": null,
  "createdAt": null,
  "body": null,
  "responseBody": null,
  "responseHeaders": null,
  "responseTime": null,
} satisfies CallbackDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallbackDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


