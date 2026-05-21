
# InfractionListResponse


## Properties

Name | Type
------------ | -------------
`infractions` | [Array&lt;InfractionDetail&gt;](InfractionDetail.md)
`pagination` | [InfractionListResponsePagination](InfractionListResponsePagination.md)

## Example

```typescript
import type { InfractionListResponse } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "infractions": null,
  "pagination": null,
} satisfies InfractionListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfractionListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


