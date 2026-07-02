
# ApiError


## Properties

Name | Type
------------ | -------------
`statusCode` | number
`error` | string
`message` | string
`requestId` | string
`errorCode` | string
`retryAfterSeconds` | number
`details` | [Array&lt;ApiErrorDetailsInner&gt;](ApiErrorDetailsInner.md)

## Example

```typescript
import type { ApiError } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "statusCode": 400,
  "error": Bad Request,
  "message": Validation failed,
  "requestId": cmbz0f8qk0001js04hp3e2n0f,
  "errorCode": PZA100,
  "retryAfterSeconds": 30,
  "details": null,
} satisfies ApiError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


