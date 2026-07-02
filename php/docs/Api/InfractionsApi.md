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
getInfractions($page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name, $sort_by, $sort_direction, $reported_at_from, $reported_at_to, $created_at_from, $created_at_to, $expires_at_from, $expires_at_to, $updated_at_from, $updated_at_to, $needs_manual_review, $id, $protocol): \OpenAPI\Client\Model\InfractionListResponse
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
$sort_by = 'sort_by_example'; // string | Sort field.
$sort_direction = 'sort_direction_example'; // string | Sort direction.
$reported_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: reportedAt from.
$reported_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: reportedAt up to.
$created_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: createdAt from.
$created_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: createdAt up to.
$expires_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: expiresAt from.
$expires_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: expiresAt up to.
$updated_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: updatedAt from.
$updated_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: updatedAt up to.
$needs_manual_review = True; // bool | Filter: needs manual review.
$id = 'id_example'; // string | Filter by infraction ID.
$protocol = 'protocol_example'; // string | Filter by protocol.

try {
    $result = $apiInstance->getInfractions($page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name, $sort_by, $sort_direction, $reported_at_from, $reported_at_to, $created_at_from, $created_at_to, $expires_at_from, $expires_at_to, $updated_at_from, $updated_at_to, $needs_manual_review, $id, $protocol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
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
| **sort_by** | **string**| Sort field. | [optional] |
| **sort_direction** | **string**| Sort direction. | [optional] |
| **reported_at_from** | **\DateTime**| Filter: reportedAt from. | [optional] |
| **reported_at_to** | **\DateTime**| Filter: reportedAt up to. | [optional] |
| **created_at_from** | **\DateTime**| Filter: createdAt from. | [optional] |
| **created_at_to** | **\DateTime**| Filter: createdAt up to. | [optional] |
| **expires_at_from** | **\DateTime**| Filter: expiresAt from. | [optional] |
| **expires_at_to** | **\DateTime**| Filter: expiresAt up to. | [optional] |
| **updated_at_from** | **\DateTime**| Filter: updatedAt from. | [optional] |
| **updated_at_to** | **\DateTime**| Filter: updatedAt up to. | [optional] |
| **needs_manual_review** | **bool**| Filter: needs manual review. | [optional] |
| **id** | **string**| Filter by infraction ID. | [optional] |
| **protocol** | **string**| Filter by protocol. | [optional] |

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
getInfractionsById($id): \OpenAPI\Client\Model\InfractionDetail
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
$id = 'id_example'; // string | Infraction ID

try {
    $result = $apiInstance->getInfractionsById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
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
getInfractionsDefenseById($infraction_id, $defense_id): \OpenAPI\Client\Model\Defense
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
$infraction_id = 'infraction_id_example'; // string | Infraction ID
$defense_id = 'defense_id_example'; // string | Defense ID

try {
    $result = $apiInstance->getInfractionsDefenseById($infraction_id, $defense_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsDefenseById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
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
getInfractionsDefenses($id): \OpenAPI\Client\Model\Defense[]
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
$id = 'id_example'; // string | Infraction ID

try {
    $result = $apiInstance->getInfractionsDefenses($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsDefenses: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
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
