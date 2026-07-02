
# GetUserTransactionById200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`amount` | number
`type` | string
`qrCodeText` | string
`qrCodeBase64` | string
`qrCodeUrl` | string
`generatedName` | string
`generatedDocument` | string
`generatedEmail` | string
`payerName` | string
`payerDocument` | string
`payerInstitutionIspb` | string
`payerInstitutionName` | string
`payerAccountNumber` | string
`serviceFeeCharged` | number
`withdrawPixKey` | string
`withdrawPixType` | string
`receiverName` | string
`receiverDocument` | string
`receiverInstitutionIspb` | string
`receiverInstitutionName` | string
`receiverAccountNumber` | string
`endToEndId` | string
`createdAt` | string
`updatedAt` | string
`paidAt` | string
`clientReference` | string
`refundEndToEndId` | string
`refundAmount` | number
`refundStatus` | string
`refundReason` | string
`refundDescription` | string
`refundedAt` | string
`cancellationReason` | string
`virtualAccount` | string
`method` | string
`infraction` | [Array&lt;GetUserTransactionById200ResponseAllOfInfractionInner&gt;](GetUserTransactionById200ResponseAllOfInfractionInner.md)
`callbackLog` | [Array&lt;GetUserTransactionById200ResponseAllOfCallbackLogInner&gt;](GetUserTransactionById200ResponseAllOfCallbackLogInner.md)

## Example

```typescript
import type { GetUserTransactionById200Response } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "amount": null,
  "type": null,
  "qrCodeText": null,
  "qrCodeBase64": null,
  "qrCodeUrl": null,
  "generatedName": null,
  "generatedDocument": null,
  "generatedEmail": null,
  "payerName": null,
  "payerDocument": null,
  "payerInstitutionIspb": null,
  "payerInstitutionName": null,
  "payerAccountNumber": null,
  "serviceFeeCharged": null,
  "withdrawPixKey": null,
  "withdrawPixType": null,
  "receiverName": null,
  "receiverDocument": null,
  "receiverInstitutionIspb": null,
  "receiverInstitutionName": null,
  "receiverAccountNumber": null,
  "endToEndId": null,
  "createdAt": null,
  "updatedAt": null,
  "paidAt": null,
  "clientReference": null,
  "refundEndToEndId": null,
  "refundAmount": null,
  "refundStatus": null,
  "refundReason": null,
  "refundDescription": null,
  "refundedAt": null,
  "cancellationReason": null,
  "virtualAccount": null,
  "method": null,
  "infraction": null,
  "callbackLog": null,
} satisfies GetUserTransactionById200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserTransactionById200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


