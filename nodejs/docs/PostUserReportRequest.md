
# PostUserReportRequest


## Properties

Name | Type
------------ | -------------
`dateFrom` | Date
`dateTo` | Date
`status` | Array&lt;string&gt;
`type` | Array&lt;string&gt;

## Example

```typescript
import type { PostUserReportRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "dateFrom": null,
  "dateTo": null,
  "status": null,
  "type": null,
} satisfies PostUserReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostUserReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


