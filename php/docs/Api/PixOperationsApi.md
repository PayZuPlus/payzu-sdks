# OpenAPI\Client\PixOperationsApi



All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPix()**](PixOperationsApi.md#getPix) | **GET** /pix | Retrieve Charge |
| [**getPixQrcode()**](PixOperationsApi.md#getPixQrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**getProof()**](PixOperationsApi.md#getProof) | **GET** /proof/{id} | Get Transaction Receipt |
| [**postPix()**](PixOperationsApi.md#postPix) | **POST** /pix | Create Charge (Pix deposit) |


## `getPix()`

```php
getPix($content_type, $id, $client_reference, $end_to_end_id, $virtual_account): \OpenAPI\Client\Model\Transaction
```

Retrieve Charge

Get the latest status and details for a Pix **deposit (charge)**. Provide **one** of `id`, `clientReference`, or `endToEndId`. Use apenas um destes parâmetros: id, clientReference, endToEndId. Combinar mais de um retorna erro.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = PAYZU20250817215911F49RDOBJ; // string | Transaction ID.
$client_reference = 'client_reference_example'; // string | External reference provided when creating the charge.
$end_to_end_id = 'end_to_end_id_example'; // string | Pix end-to-end ID.
$virtual_account = 'virtual_account_example'; // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa.

try {
    $result = $apiInstance->getPix($content_type, $id, $client_reference, $end_to_end_id, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->getPix: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**| Transaction ID. | [optional] |
| **client_reference** | **string**| External reference provided when creating the charge. | [optional] |
| **end_to_end_id** | **string**| Pix end-to-end ID. | [optional] |
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

## `getPixQrcode()`

```php
getPixQrcode($content_type, $transaction_id): \SplFileObject
```

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$transaction_id = 'transaction_id_example'; // string

try {
    $result = $apiInstance->getPixQrcode($content_type, $transaction_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->getPixQrcode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **transaction_id** | **string**|  | |

### Return type

**\SplFileObject**

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getProof()`

```php
getProof($content_type, $id, $type): \OpenAPI\Client\Model\GetProof200Response
```

Get Transaction Receipt

Retorna o comprovante da transação como JSON com o campo `base64` (PDF codificado). Decodifique pra exibir ou salvar como `.pdf`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = PAYZU2025081418333632CYKN8M; // string | Transaction ID.
$type = pdf; // string | Return format.

try {
    $result = $apiInstance->getProof($content_type, $id, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->getProof: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**| Transaction ID. | |
| **type** | **string**| Return format. | [optional] [default to &#39;pdf&#39;] |

### Return type

[**\OpenAPI\Client\Model\GetProof200Response**](../Model/GetProof200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/pdf`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postPix()`

```php
postPix($post_pix_request): \OpenAPI\Client\Model\Transaction
```

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_pix_request = new \OpenAPI\Client\Model\PostPixRequest(); // \OpenAPI\Client\Model\PostPixRequest

try {
    $result = $apiInstance->postPix($post_pix_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->postPix: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_pix_request** | [**\OpenAPI\Client\Model\PostPixRequest**](../Model/PostPixRequest.md)|  | |

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
