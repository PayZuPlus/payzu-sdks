# OpenAPI\Client\ReportsApi

Transaction history, reports, bank statements, and pending deposits

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**downloadUserReport()**](ReportsApi.md#downloadUserReport) | **POST** /user/report/{id}/download | Download report |
| [**getUserReport()**](ReportsApi.md#getUserReport) | **GET** /user/report/{id} | List report job status |
| [**getUserTransactionById()**](ReportsApi.md#getUserTransactionById) | **GET** /user/transactions/{id} | List transaction details |
| [**getUserTransactions()**](ReportsApi.md#getUserTransactions) | **GET** /user/transactions | List Transactions |
| [**listUserReports()**](ReportsApi.md#listUserReports) | **GET** /user/report | List report jobs |
| [**postUserReport()**](ReportsApi.md#postUserReport) | **POST** /user/report | Generate transactions report |


## `downloadUserReport()`

```php
downloadUserReport($content_type, $id): \OpenAPI\Client\Model\DownloadUserReport200Response
```

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = 'id_example'; // string

try {
    $result = $apiInstance->downloadUserReport($content_type, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->downloadUserReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\DownloadUserReport200Response**](../Model/DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserReport()`

```php
getUserReport($content_type, $id): \OpenAPI\Client\Model\ReportJob
```

List report job status

List report jobs created by the authenticated user.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = 'id_example'; // string

try {
    $result = $apiInstance->getUserReport($content_type, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\ReportJob**](../Model/ReportJob.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserTransactionById()`

```php
getUserTransactionById($content_type, $id): \OpenAPI\Client\Model\GetUserTransactionById200Response
```

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = 'id_example'; // string

try {
    $result = $apiInstance->getUserTransactionById($content_type, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserTransactionById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\GetUserTransactionById200Response**](../Model/GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserTransactions()`

```php
getUserTransactions($content_type, $date_from, $date_to, $limit, $page, $id, $status, $type, $amount, $document, $name, $end_to_end_id, $sort_by, $sort_direction, $client_reference, $virtual_account): \OpenAPI\Client\Model\GetUserTransactions200Response
```

List Transactions

Paginated list of account transactions with filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$date_from = 2025-08-01; // string | Start date (YYYY-MM-DD).
$date_to = 2025-08-17; // string | End date (YYYY-MM-DD).
$limit = 10; // float | Items per page (max 1000).
$page = 1; // float | Page number (default 1).
$id = PAYZU2025081418333632CYKN8M; // string | Transaction ID.
$status = COMPLETED; // string | Status da transação. Aceita CSV: PENDING,COMPLETED,etc.
$type = DEPOSIT; // string | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION.
$amount = 15000; // float | Amount filter.
$document = 12345678901; // string | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação.
$name = Alice; // string | Name filter.
$end_to_end_id = E00360305202508141833bcf1f37b487; // string | Pix end-to-end ID.
$sort_by = 'createdAt'; // string | Field to sort by
$sort_direction = 'desc'; // string | Sort direction
$client_reference = 'client_reference_example'; // string | Filter by external reference
$virtual_account = 'virtual_account_example'; // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa.

try {
    $result = $apiInstance->getUserTransactions($content_type, $date_from, $date_to, $limit, $page, $id, $status, $type, $amount, $document, $name, $end_to_end_id, $sort_by, $sort_direction, $client_reference, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserTransactions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **date_from** | **string**| Start date (YYYY-MM-DD). | [optional] |
| **date_to** | **string**| End date (YYYY-MM-DD). | [optional] |
| **limit** | **float**| Items per page (max 1000). | [optional] [default to 10] |
| **page** | **float**| Page number (default 1). | [optional] [default to 1] |
| **id** | **string**| Transaction ID. | [optional] |
| **status** | **string**| Status da transação. Aceita CSV: PENDING,COMPLETED,etc. | [optional] |
| **type** | **string**| Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION. | [optional] |
| **amount** | **float**| Amount filter. | [optional] |
| **document** | **string**| CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [optional] |
| **name** | **string**| Name filter. | [optional] |
| **end_to_end_id** | **string**| Pix end-to-end ID. | [optional] |
| **sort_by** | **string**| Field to sort by | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction | [optional] [default to &#39;desc&#39;] |
| **client_reference** | **string**| Filter by external reference | [optional] |
| **virtual_account** | **string**| Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetUserTransactions200Response**](../Model/GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listUserReports()`

```php
listUserReports($content_type, $page, $limit, $status): \OpenAPI\Client\Model\ListUserReports200Response
```

List report jobs

List report jobs created by the authenticated user.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$page = 1; // int
$limit = 10; // int
$status = 'status_example'; // string

try {
    $result = $apiInstance->listUserReports($content_type, $page, $limit, $status);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->listUserReports: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **page** | **int**|  | [optional] [default to 1] |
| **limit** | **int**|  | [optional] [default to 10] |
| **status** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListUserReports200Response**](../Model/ListUserReports200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postUserReport()`

```php
postUserReport($post_user_report_request): \OpenAPI\Client\Model\ReportJob
```

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_user_report_request = new \OpenAPI\Client\Model\PostUserReportRequest(); // \OpenAPI\Client\Model\PostUserReportRequest

try {
    $result = $apiInstance->postUserReport($post_user_report_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->postUserReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_user_report_request** | [**\OpenAPI\Client\Model\PostUserReportRequest**](../Model/PostUserReportRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ReportJob**](../Model/ReportJob.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
