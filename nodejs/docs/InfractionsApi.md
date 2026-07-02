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

> InfractionListResponse getInfractions(contentType, page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, needsManualReview, id, protocol)

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
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
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
    // string | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Direção da ordenação. (optional)
    sortDirection: sortDirection_example,
    // Date | Filtro: reportedAt a partir de. (optional)
    reportedAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: reportedAt até. (optional)
    reportedAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: createdAt a partir de. (optional)
    createdAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: createdAt até. (optional)
    createdAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: expiresAt a partir de. (optional)
    expiresAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: expiresAt até. (optional)
    expiresAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: updatedAt a partir de. (optional)
    updatedAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filtro: updatedAt até. (optional)
    updatedAtTo: 2013-10-20T19:20:30+01:00,
    // boolean | Filtro: precisa de revisão manual. (optional)
    needsManualReview: true,
    // string | Filtro por ID da infração. (optional)
    id: id_example,
    // string | Filtro por protocolo. (optional)
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
| **contentType** | `application/json` | Obrigatório em toda chamada PayZu. | [Defaults to `&#39;application/json&#39;`] [Enum: application/json] |
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
| **sortBy** | `string` | Campo de ordenação. | [Optional] [Defaults to `undefined`] |
| **sortDirection** | `asc`, `desc` | Direção da ordenação. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **reportedAtFrom** | `Date` | Filtro: reportedAt a partir de. | [Optional] [Defaults to `undefined`] |
| **reportedAtTo** | `Date` | Filtro: reportedAt até. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Filtro: createdAt a partir de. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Filtro: createdAt até. | [Optional] [Defaults to `undefined`] |
| **expiresAtFrom** | `Date` | Filtro: expiresAt a partir de. | [Optional] [Defaults to `undefined`] |
| **expiresAtTo** | `Date` | Filtro: expiresAt até. | [Optional] [Defaults to `undefined`] |
| **updatedAtFrom** | `Date` | Filtro: updatedAt a partir de. | [Optional] [Defaults to `undefined`] |
| **updatedAtTo** | `Date` | Filtro: updatedAt até. | [Optional] [Defaults to `undefined`] |
| **needsManualReview** | `boolean` | Filtro: precisa de revisão manual. | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Filtro por ID da infração. | [Optional] [Defaults to `undefined`] |
| **protocol** | `string` | Filtro por protocolo. | [Optional] [Defaults to `undefined`] |

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

> InfractionDetail getInfractionsById(contentType, id)

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
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
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
| **contentType** | `application/json` | Obrigatório em toda chamada PayZu. | [Defaults to `&#39;application/json&#39;`] [Enum: application/json] |
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

> Defense getInfractionsDefenseById(contentType, infractionId, defenseId)

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
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
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
| **contentType** | `application/json` | Obrigatório em toda chamada PayZu. | [Defaults to `&#39;application/json&#39;`] [Enum: application/json] |
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

> Array&lt;Defense&gt; getInfractionsDefenses(contentType, id)

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
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
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
| **contentType** | `application/json` | Obrigatório em toda chamada PayZu. | [Defaults to `&#39;application/json&#39;`] [Enum: application/json] |
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

