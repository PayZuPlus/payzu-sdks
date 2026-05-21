# OpenAPI\Client\InternalTransferApi



All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInternalTransfer()**](InternalTransferApi.md#getInternalTransfer) | **GET** /internal-transfer | Get internal transfer |
| [**postInternalTransfer()**](InternalTransferApi.md#postInternalTransfer) | **POST** /internal-transfer | Create internal transfer |


## `getInternalTransfer()`

```php
getInternalTransfer($content_type, $id, $client_reference, $virtual_account): \OpenAPI\Client\Model\Transaction
```

Get internal transfer

Retrieve an internal transfer by id or clientReference Use apenas um destes parâmetros: id, clientReference. Combinar mais de um retorna erro.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InternalTransferApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = 'id_example'; // string | Transaction ID
$client_reference = 'client_reference_example'; // string | External reference
$virtual_account = 'virtual_account_example'; // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa.

try {
    $result = $apiInstance->getInternalTransfer($content_type, $id, $client_reference, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InternalTransferApi->getInternalTransfer: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**| Transaction ID | [optional] |
| **client_reference** | **string**| External reference | [optional] |
| **virtual_account** | **string**| Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | [optional] |

### Return type

[**\OpenAPI\Client\Model\Transaction**](../Model/Transaction.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postInternalTransfer()`

```php
postInternalTransfer($post_internal_transfer_request): \OpenAPI\Client\Model\Transaction
```

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InternalTransferApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_internal_transfer_request = new \OpenAPI\Client\Model\PostInternalTransferRequest(); // \OpenAPI\Client\Model\PostInternalTransferRequest

try {
    $result = $apiInstance->postInternalTransfer($post_internal_transfer_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InternalTransferApi->postInternalTransfer: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_internal_transfer_request** | [**\OpenAPI\Client\Model\PostInternalTransferRequest**](../Model/PostInternalTransferRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Transaction**](../Model/Transaction.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
