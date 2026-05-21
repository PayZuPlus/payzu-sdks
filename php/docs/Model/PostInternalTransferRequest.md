# PostInternalTransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payer_account_number** | **string** | Payer account number (6 digits). Must match the authenticated user&#39;s accountNumber. |
**receiver_account_number** | **string** | Destination account number (6 digits). |
**amount** | **float** | Transfer amount in BRL. |
**description** | **string** | Optional transfer description. | [optional]
**callback_url** | **string** | URL to receive transaction-update webhooks. | [optional]
**client_reference** | **string** | External reference for idempotency / reconciliation. | [optional]
**virtual_account** | **string** | Subconta virtual (até 50 caracteres) para correlacionar lojas, filiais, marketplaces. Volta no callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
