# InfractionsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInfractions**](InfractionsApi.md#getinfractions) | **GET** /user/infractions | List Infractions |
| [**getInfractionsById**](InfractionsApi.md#getinfractionsbyid) | **GET** /user/infractions/{id} | Get Infraction |
| [**getInfractionsDefenseById**](InfractionsApi.md#getinfractionsdefensebyid) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**getInfractionsDefenses**](InfractionsApi.md#getinfractionsdefenses) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**postInfractionsDefense**](InfractionsApi.md#postinfractionsdefense) | **POST** /user/infractions/{id}/defenses | Create Defense |



## getInfractions

> InfractionListResponse getInfractions(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, needsManualReview, id, protocol)

List Infractions

List all infractions for the authenticated user with pagination and filters.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // string | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) (optional)
    status: status_example,
    // string | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) (optional)
    type: type_example,
    // string (optional)
    endToEndId: endToEndId_example,
    // string (optional)
    transactionId: transactionId_example,
    // number (optional)
    amountMin: 8.14,
    // number (optional)
    amountMax: 8.14,
    // string | Comma-separated AnalysisResult (optional)
    analysisResult: analysisResult_example,
    // string | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) (optional)
    reportedBy: reportedBy_example,
    // string (optional)
    participantDocument: participantDocument_example,
    // string (optional)
    participantName: participantName_example,
    // string | Sort field. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction. (optional)
    sortDirection: sortDirection_example,
    // Date | Filter: reportedAt from. (optional)
    reportedAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filter: reportedAt up to. (optional)
    reportedAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filter: createdAt from. (optional)
    createdAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filter: createdAt up to. (optional)
    createdAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filter: expiresAt from. (optional)
    expiresAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filter: expiresAt up to. (optional)
    expiresAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filter: updatedAt from. (optional)
    updatedAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filter: updatedAt up to. (optional)
    updatedAtTo: 2013-10-20T19:20:30+01:00,
    // boolean | Filter: needs manual review. (optional)
    needsManualReview: true,
    // string | Filter by infraction ID. (optional)
    id: id_example,
    // string | Filter by protocol. (optional)
    protocol: protocol_example,
  } satisfies GetInfractionsRequest;

  try {
    const data = await api.getInfractions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **status** | `string` | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` |  | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` |  | [Optional] [Defaults to `undefined`] |
| **analysisResult** | `string` | Comma-separated AnalysisResult | [Optional] [Defaults to `undefined`] |
| **reportedBy** | `string` | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [Optional] [Defaults to `undefined`] |
| **participantDocument** | `string` |  | [Optional] [Defaults to `undefined`] |
| **participantName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Sort field. | [Optional] [Defaults to `undefined`] |
| **sortDirection** | `asc`, `desc` | Sort direction. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **reportedAtFrom** | `Date` | Filter: reportedAt from. | [Optional] [Defaults to `undefined`] |
| **reportedAtTo** | `Date` | Filter: reportedAt up to. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Filter: createdAt from. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Filter: createdAt up to. | [Optional] [Defaults to `undefined`] |
| **expiresAtFrom** | `Date` | Filter: expiresAt from. | [Optional] [Defaults to `undefined`] |
| **expiresAtTo** | `Date` | Filter: expiresAt up to. | [Optional] [Defaults to `undefined`] |
| **updatedAtFrom** | `Date` | Filter: updatedAt from. | [Optional] [Defaults to `undefined`] |
| **updatedAtTo** | `Date` | Filter: updatedAt up to. | [Optional] [Defaults to `undefined`] |
| **needsManualReview** | `boolean` | Filter: needs manual review. | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Filter by infraction ID. | [Optional] [Defaults to `undefined`] |
| **protocol** | `string` | Filter by protocol. | [Optional] [Defaults to `undefined`] |

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of infractions with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsById

> InfractionDetail getInfractionsById(id)

Get Infraction

Get a specific infraction by ID.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | Infraction ID
    id: id_example,
  } satisfies GetInfractionsByIdRequest;

  try {
    const data = await api.getInfractionsById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Infraction ID | [Defaults to `undefined`] |

### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Infraction details |  -  |
| **404** | Infraction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsDefenseById

> Defense getInfractionsDefenseById(infractionId, defenseId)

Get Defense

Get a specific defense for an infraction. **Requires support privileges**.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsDefenseByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | Infraction ID
    infractionId: infractionId_example,
    // string | Defense ID
    defenseId: defenseId_example,
  } satisfies GetInfractionsDefenseByIdRequest;

  try {
    const data = await api.getInfractionsDefenseById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **infractionId** | `string` | Infraction ID | [Defaults to `undefined`] |
| **defenseId** | `string` | Defense ID | [Defaults to `undefined`] |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Defense details |  -  |
| **404** | Defense not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsDefenses

> Array&lt;Defense&gt; getInfractionsDefenses(id)

List Defenses

List all defenses for a specific infraction. **Requires support privileges**.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsDefensesRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | Infraction ID
    id: id_example,
  } satisfies GetInfractionsDefensesRequest;

  try {
    const data = await api.getInfractionsDefenses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Infraction ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;Defense&gt;**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of defenses |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postInfractionsDefense

> Defense postInfractionsDefense(id, defense, files)

Create Defense

Create a defense for a specific infraction.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { PostInfractionsDefenseRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | Infraction ID
    id: id_example,
    // string | Defense text (max: 1000 characters)
    defense: defense_example,
    // Array<Blob> | Evidence files (max: 10MB total) (optional)
    files: /path/to/file.txt,
  } satisfies PostInfractionsDefenseRequest;

  try {
    const data = await api.postInfractionsDefense(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Infraction ID | [Defaults to `undefined`] |
| **defense** | `string` | Defense text (max: 1000 characters) | [Defaults to `undefined`] |
| **files** | `Array<Blob>` | Evidence files (max: 10MB total) | [Optional] |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Defense created |  -  |
| **400** | Invalid file or provider does not support defense |  -  |
| **404** | Infraction not found |  -  |
| **422** | Infraction not open for defense |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

