# PostWithdrawRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL. Must be &gt;&#x3D; 1. |
**pix_key** | **string** | Destination Pix key. |
**pix_type** | **string** | Pix key type. |
**callback_url** | **string** | Webhook URL for status updates. | [optional]
**client_reference** | **string** | External reference for this withdrawal. | [optional]
**description** | **string** | Optional description. | [optional]
**virtual_account** | **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
