
# GetUserTransactions200Response


## Properties

Name | Type
------------ | -------------
`total` | number
`pages` | number
`transactions` | [Array&lt;Transaction&gt;](Transaction.md)

## Example

```typescript
import type { GetUserTransactions200Response } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "pages": null,
  "transactions": null,
} satisfies GetUserTransactions200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserTransactions200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


