# OpenAPI\Client\InfractionsApi

Manage Pix infractions (disputes, fraud reports) and submit defenses

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInfractions()**](InfractionsApi.md#getInfractions) | **GET** /user/infractions | List Infractions |
| [**getInfractionsById()**](InfractionsApi.md#getInfractionsById) | **GET** /user/infractions/{id} | Get Infraction |
| [**getInfractionsDefenseById()**](InfractionsApi.md#getInfractionsDefenseById) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**getInfractionsDefenses()**](InfractionsApi.md#getInfractionsDefenses) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**postInfractionsDefense()**](InfractionsApi.md#postInfractionsDefense) | **POST** /user/infractions/{id}/defenses | Create Defense |


## `getInfractions()`

```php
getInfractions($content_type, $page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name): \OpenAPI\Client\Model\InfractionListResponse
```

List Infractions

List all infractions for the authenticated user with pagination and filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$page = 1; // int
$limit = 10; // int
$status = 'status_example'; // string | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS)
$type = 'type_example'; // string | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED)
$end_to_end_id = 'end_to_end_id_example'; // string
$transaction_id = 'transaction_id_example'; // string
$amount_min = 3.4; // float
$amount_max = 3.4; // float
$analysis_result = 'analysis_result_example'; // string | Comma-separated AnalysisResult
$reported_by = 'reported_by_example'; // string | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT)
$participant_document = 'participant_document_example'; // string
$participant_name = 'participant_name_example'; // string

try {
    $result = $apiInstance->getInfractions($content_type, $page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **page** | **int**|  | [optional] [default to 1] |
| **limit** | **int**|  | [optional] [default to 10] |
| **status** | **string**| Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] |
| **type** | **string**| Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] |
| **end_to_end_id** | **string**|  | [optional] |
| **transaction_id** | **string**|  | [optional] |
| **amount_min** | **float**|  | [optional] |
| **amount_max** | **float**|  | [optional] |
| **analysis_result** | **string**| Comma-separated AnalysisResult | [optional] |
| **reported_by** | **string**| Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] |
| **participant_document** | **string**|  | [optional] |
| **participant_name** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\InfractionListResponse**](../Model/InfractionListResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInfractionsById()`

```php
getInfractionsById($content_type, $id): \OpenAPI\Client\Model\InfractionDetail
```

Get Infraction

Get a specific infraction by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = 'id_example'; // string | Infraction ID

try {
    $result = $apiInstance->getInfractionsById($content_type, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**| Infraction ID | |

### Return type

[**\OpenAPI\Client\Model\InfractionDetail**](../Model/InfractionDetail.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInfractionsDefenseById()`

```php
getInfractionsDefenseById($content_type, $infraction_id, $defense_id): \OpenAPI\Client\Model\Defense
```

Get Defense

Get a specific defense for an infraction. **Requires support privileges**.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$infraction_id = 'infraction_id_example'; // string | Infraction ID
$defense_id = 'defense_id_example'; // string | Defense ID

try {
    $result = $apiInstance->getInfractionsDefenseById($content_type, $infraction_id, $defense_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsDefenseById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **infraction_id** | **string**| Infraction ID | |
| **defense_id** | **string**| Defense ID | |

### Return type

[**\OpenAPI\Client\Model\Defense**](../Model/Defense.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInfractionsDefenses()`

```php
getInfractionsDefenses($content_type, $id): \OpenAPI\Client\Model\Defense[]
```

List Defenses

List all defenses for a specific infraction. **Requires support privileges**.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content_type = 'application/json'; // string | Obrigatório em toda chamada PayZu.
$id = 'id_example'; // string | Infraction ID

try {
    $result = $apiInstance->getInfractionsDefenses($content_type, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsDefenses: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **content_type** | **string**| Obrigatório em toda chamada PayZu. | [default to &#39;application/json&#39;] |
| **id** | **string**| Infraction ID | |

### Return type

[**\OpenAPI\Client\Model\Defense[]**](../Model/Defense.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postInfractionsDefense()`

```php
postInfractionsDefense($id, $defense, $files): \OpenAPI\Client\Model\Defense
```

Create Defense

Create a defense for a specific infraction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Infraction ID
$defense = 'defense_example'; // string | Defense text (max: 1000 characters)
$files = array('/path/to/file.txt'); // \SplFileObject[] | Evidence files (max: 10MB total)

try {
    $result = $apiInstance->postInfractionsDefense($id, $defense, $files);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->postInfractionsDefense: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Infraction ID | |
| **defense** | **string**| Defense text (max: 1000 characters) | |
| **files** | **\SplFileObject[]**| Evidence files (max: 10MB total) | [optional] |

### Return type

[**\OpenAPI\Client\Model\Defense**](../Model/Defense.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
