# ResendUserCallbacksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **\DateTime** | Period start (REQUIRED). Cannot be more than 30 days in the past. |
**created_at_to** | **\DateTime** | Period end (REQUIRED). Period span cannot exceed 7 days. |
**transaction_ids** | **string[]** | Restrict to specific transaction IDs | [optional]
**transaction_types** | **string[]** | Filter by transaction type | [optional]
**transaction_status** | **string[]** | Filter by transaction status | [optional]
**transaction_end_to_end_ids** | **string[]** | Restrict to specific Pix end-to-end IDs | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
