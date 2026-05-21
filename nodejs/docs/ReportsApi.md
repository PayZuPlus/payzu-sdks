# ReportsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadUserReport**](ReportsApi.md#downloaduserreport) | **POST** /user/report/{id}/download | Download report |
| [**getUserReport**](ReportsApi.md#getuserreport) | **GET** /user/report/{id} | List report job status |
| [**getUserTransactionById**](ReportsApi.md#getusertransactionbyid) | **GET** /user/transactions/{id} | List transaction details |
| [**getUserTransactions**](ReportsApi.md#getusertransactions) | **GET** /user/transactions | List Transactions |
| [**listUserReports**](ReportsApi.md#listuserreports) | **GET** /user/report | List report jobs |
| [**postUserReport**](ReportsApi.md#postuserreportoperation) | **POST** /user/report | Generate transactions report |



## downloadUserReport

> DownloadUserReport200Response downloadUserReport(contentType, id)

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '@payzu/pix';
import type { DownloadUserReportRequest } from '@payzu/pix';

async function example() {
  console.log("🚀 Testing @payzu/pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadUserReportRequest;

  try {
    const data = await api.downloadUserReport(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signed download URL |  -  |
| **404** | Report not found |  -  |
| **410** | Report file expired |  -  |
| **422** | Report not ready (still processing) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserReport

> ReportJob getUserReport(contentType, id)

List report job status

List report jobs created by the authenticated user.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '@payzu/pix';
import type { GetUserReportRequest } from '@payzu/pix';

async function example() {
  console.log("🚀 Testing @payzu/pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUserReportRequest;

  try {
    const data = await api.getUserReport(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report job |  -  |
| **404** | Report not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactionById

> GetUserTransactionById200Response getUserTransactionById(contentType, id)

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '@payzu/pix';
import type { GetUserTransactionByIdRequest } from '@payzu/pix';

async function example() {
  console.log("🚀 Testing @payzu/pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
    // string
    id: id_example,
  } satisfies GetUserTransactionByIdRequest;

  try {
    const data = await api.getUserTransactionById(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction details |  -  |
| **404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(contentType, dateFrom, dateTo, limit, page, id, status, type, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount)

List Transactions

Paginated list of account transactions with filters.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '@payzu/pix';
import type { GetUserTransactionsRequest } from '@payzu/pix';

async function example() {
  console.log("🚀 Testing @payzu/pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
    // string | Start date (YYYY-MM-DD). (optional)
    dateFrom: 2025-08-01,
    // string | End date (YYYY-MM-DD). (optional)
    dateTo: 2025-08-17,
    // number | Items per page (max 1000). (optional)
    limit: 10,
    // number | Page number (default 1). (optional)
    page: 1,
    // string | Transaction ID. (optional)
    id: PAYZU2025081418333632CYKN8M,
    // string | Status da transação. Aceita CSV: PENDING,COMPLETED,etc. (optional)
    status: COMPLETED,
    // string | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION. (optional)
    type: DEPOSIT,
    // number | Amount filter. (optional)
    amount: 15000,
    // string | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. (optional)
    document: 12345678901,
    // string | Name filter. (optional)
    name: Alice,
    // string | Pix end-to-end ID. (optional)
    endToEndId: E00360305202508141833bcf1f37b487,
    // 'createdAt' | 'updatedAt' | Field to sort by (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
    // string | Filter by external reference (optional)
    clientReference: clientReference_example,
    // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. (optional)
    virtualAccount: virtualAccount_example,
  } satisfies GetUserTransactionsRequest;

  try {
    const data = await api.getUserTransactions(body);
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
| **dateFrom** | `string` | Start date (YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **dateTo** | `string` | End date (YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Items per page (max 1000). | [Optional] [Defaults to `10`] |
| **page** | `number` | Page number (default 1). | [Optional] [Defaults to `1`] |
| **id** | `string` | Transaction ID. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Status da transação. Aceita CSV: PENDING,COMPLETED,etc. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION. | [Optional] [Defaults to `undefined`] |
| **amount** | `number` | Amount filter. | [Optional] [Defaults to `undefined`] |
| **document** | `string` | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Name filter. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | Pix end-to-end ID. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Field to sort by | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **clientReference** | `string` | Filter by external reference | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction page |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUserReports

> ListUserReports200Response listUserReports(contentType, page, limit, status)

List report jobs

List report jobs created by the authenticated user.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '@payzu/pix';
import type { ListUserReportsRequest } from '@payzu/pix';

async function example() {
  console.log("🚀 Testing @payzu/pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'EXPIRED' (optional)
    status: status_example,
  } satisfies ListUserReportsRequest;

  try {
    const data = await api.listUserReports(body);
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
| **status** | `PENDING`, `PROCESSING`, `COMPLETED`, `FAILED`, `EXPIRED` |  | [Optional] [Defaults to `undefined`] [Enum: PENDING, PROCESSING, COMPLETED, FAILED, EXPIRED] |

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of report jobs |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserReport

> ReportJob postUserReport(postUserReportRequest)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '@payzu/pix';
import type { PostUserReportOperationRequest } from '@payzu/pix';

async function example() {
  console.log("🚀 Testing @payzu/pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // PostUserReportRequest
    postUserReportRequest: ...,
  } satisfies PostUserReportOperationRequest;

  try {
    const data = await api.postUserReport(body);
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
| **postUserReportRequest** | [PostUserReportRequest](PostUserReportRequest.md) |  | |

### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Report job enqueued |  -  |
| **422** | No transactions match the filter / concurrency limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

