
# CallbackListResponse


## Properties

Name | Type
------------ | -------------
`pagination` | [CallbackListResponsePagination](CallbackListResponsePagination.md)
`callbacks` | [Array&lt;CallbackDetail&gt;](CallbackDetail.md)

## Example

```typescript
import type { CallbackListResponse } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "pagination": null,
  "callbacks": null,
} satisfies CallbackListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallbackListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


