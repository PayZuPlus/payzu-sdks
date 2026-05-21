# PostPixRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL. Must be &gt;&#x3D; 1. |
**callback_url** | **string** | URL to receive &#x60;transaction updated&#x60; webhooks. | [optional]
**generated_name** | **string** | Payer full name. Letters and spaces only. | [optional]
**generated_email** | **string** | Payer email (optional). | [optional]
**generated_document** | **string** | Payer CPF (11 digits) or CNPJ (14 digits), no punctuation. | [optional]
**expires_in** | **float** | Seconds until the QR Code expires. Default: 600. | [optional]
**client_reference** | **string** | External reference (order, invoice, etc.). | [optional]
**virtual_account** | **string** | Subconta virtual (até 50 caracteres) para correlacionar lojas, filiais, marketplaces. Volta no callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
