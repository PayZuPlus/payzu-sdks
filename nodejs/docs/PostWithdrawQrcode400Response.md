
# PostWithdrawQrcode400Response


## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string

## Example

```typescript
import type { PostWithdrawQrcode400Response } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "error": AMOUNT_REQUIRED,
  "message": Amount is required for QR Codes without embedded value.,
} satisfies PostWithdrawQrcode400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWithdrawQrcode400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


