# ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** | HTTP status code. |
**error** | **string** | HTTP status text. |
**message** | **string** | Human-readable error message. |
**request_id** | **string** | Unique request correlation ID (cuid). Include it when contacting support. |
**error_code** | **string** | Stable machine-readable error code, when available. | [optional]
**retry_after_seconds** | **int** | Seconds to wait before retrying. Present only on 429 responses. | [optional]
**details** | [**\OpenAPI\Client\Model\ApiErrorDetailsInner[]**](ApiErrorDetailsInner.md) | Field-level validation errors, when applicable. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
