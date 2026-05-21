# OpenAPI\Client\WithdrawalsApi

Send money via Pix (cash out) and DICT key/QR-code consultation

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPixKey()**](WithdrawalsApi.md#getPixKey) | **GET** /pix/key | Dict Pix Key Lookup |
| [**getWithdraw()**](WithdrawalsApi.md#getWithdraw) | **GET** /withdraw | Retrieve Withdrawal |
| [**getWithdrawProof()**](WithdrawalsApi.md#getWithdrawProof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**postPixQrcodeRead()**](WithdrawalsApi.md#postPixQrcodeRead) | **POST** /pix/qrcode/read | Read QR Code |
| [**postWithdraw()**](WithdrawalsApi.md#postWithdraw) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**postWithdrawQrcode()**](WithdrawalsApi.md#postWithdrawQrcode) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |


## `getPixKey()`

```php
getPixKey($content_type, $pix_key): \OpenAPI\Client\Model\PixKeyInfo
```

Dict Pix Key Lookup

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner's details and associated financial institution.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$pix_key = example@payzu.com.br; // string | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).

try {
    $result = $apiInstance->getPixKey($content_type, $pix_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->getPixKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **pix_key** | **string**| The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | |

### Return type

[**\OpenAPI\Client\Model\PixKeyInfo**](../Model/PixKeyInfo.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getWithdraw()`

```php
getWithdraw($content_type, $id, $client_reference, $end_to_end_id, $virtual_account): \OpenAPI\Client\Model\Transaction
```

Retrieve Withdrawal

Get the latest status and details for a **withdrawal**. You can provide any **one** of the following parameters: `id`, `clientReference`, or `endToEndId`. All three are optional and you can use any one of them to retrieve the withdrawal. Use apenas um destes parâmetros: id, clientReference, endToEndId. Combinar mais de um retorna erro.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = PAYZU2025081721512946OOLK75; // string | Transaction ID.
$client_reference = 'client_reference_example'; // string | External reference provided when creating the withdrawal.
$end_to_end_id = 'end_to_end_id_example'; // string | Pix end-to-end ID.
$virtual_account = 'virtual_account_example'; // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa.

try {
    $result = $apiInstance->getWithdraw($content_type, $id, $client_reference, $end_to_end_id, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->getWithdraw: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**| Transaction ID. | [optional] |
| **client_reference** | **string**| External reference provided when creating the withdrawal. | [optional] |
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

## `getWithdrawProof()`

```php
getWithdrawProof($content_type, $id, $type): \OpenAPI\Client\Model\GetProof200Response
```

Get Withdrawal Receipt

Retorna o comprovante da transação como JSON com o campo `base64` (PDF codificado). Decodifique pra exibir ou salvar como `.pdf`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = PAYZU2025081721512946OOLK75; // string | Transaction ID.
$type = pdf; // string | Return format.

try {
    $result = $apiInstance->getWithdrawProof($content_type, $id, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->getWithdrawProof: ', $e->getMessage(), PHP_EOL;
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
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postPixQrcodeRead()`

```php
postPixQrcodeRead($post_pix_qrcode_read_request): \OpenAPI\Client\Model\QRCodeReadResponse
```

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. No momento a PayZu só suporta QR Code dinâmico. QR estático ainda não é processado.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_pix_qrcode_read_request = new \OpenAPI\Client\Model\PostPixQrcodeReadRequest(); // \OpenAPI\Client\Model\PostPixQrcodeReadRequest

try {
    $result = $apiInstance->postPixQrcodeRead($post_pix_qrcode_read_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->postPixQrcodeRead: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_pix_qrcode_read_request** | [**\OpenAPI\Client\Model\PostPixQrcodeReadRequest**](../Model/PostPixQrcodeReadRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\QRCodeReadResponse**](../Model/QRCodeReadResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postWithdraw()`

```php
postWithdraw($post_withdraw_request): \OpenAPI\Client\Model\Transaction
```

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_withdraw_request = new \OpenAPI\Client\Model\PostWithdrawRequest(); // \OpenAPI\Client\Model\PostWithdrawRequest

try {
    $result = $apiInstance->postWithdraw($post_withdraw_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->postWithdraw: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_withdraw_request** | [**\OpenAPI\Client\Model\PostWithdrawRequest**](../Model/PostWithdrawRequest.md)|  | |

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

## `postWithdrawQrcode()`

```php
postWithdrawQrcode($post_withdraw_qrcode_request): \OpenAPI\Client\Model\Transaction
```

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If `amount` is not provided, the QR Code's embedded value will be used. No momento a PayZu só suporta QR Code dinâmico. QR estático ainda não é processado.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_withdraw_qrcode_request = new \OpenAPI\Client\Model\PostWithdrawQrcodeRequest(); // \OpenAPI\Client\Model\PostWithdrawQrcodeRequest

try {
    $result = $apiInstance->postWithdrawQrcode($post_withdraw_qrcode_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->postWithdrawQrcode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_withdraw_qrcode_request** | [**\OpenAPI\Client\Model\PostWithdrawQrcodeRequest**](../Model/PostWithdrawQrcodeRequest.md)|  | |

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
