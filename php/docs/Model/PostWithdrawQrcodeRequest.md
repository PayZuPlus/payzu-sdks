# PostWithdrawQrcodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code** | **string** | Pix QR Code payload (EMV format). |
**amount** | **float** | Amount in BRL. Optional - if not provided, uses the QR Code&#39;s embedded value. | [optional]
**callback_url** | **string** | Webhook URL for status updates. | [optional]
**description** | **string** | Optional description for the payment. | [optional]
**client_reference** | **string** | External reference for this withdrawal. | [optional]
**virtual_account** | **string** | Subconta virtual (até 50 caracteres) para correlacionar lojas, filiais, marketplaces. Volta no callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
