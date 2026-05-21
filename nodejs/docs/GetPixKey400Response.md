
# GetPixKey400Response


## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string

## Example

```typescript
import type { GetPixKey400Response } from '@payzu/pix'

// TODO: Update the object below with actual values
const example = {
  "error": INVALID_PIX_KEY,
  "message": The provided Pix key has an invalid format.,
} satisfies GetPixKey400Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPixKey400Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


