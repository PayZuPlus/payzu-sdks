# \ReportsAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DownloadUserReport**](ReportsAPI.md#DownloadUserReport) | **Post** /user/report/{id}/download | Download report
[**GetUserReport**](ReportsAPI.md#GetUserReport) | **Get** /user/report/{id} | List report job status
[**GetUserTransactionById**](ReportsAPI.md#GetUserTransactionById) | **Get** /user/transactions/{id} | List transaction details
[**GetUserTransactions**](ReportsAPI.md#GetUserTransactions) | **Get** /user/transactions | List Transactions
[**ListUserReports**](ReportsAPI.md#ListUserReports) | **Get** /user/report | List report jobs
[**PostUserReport**](ReportsAPI.md#PostUserReport) | **Post** /user/report | Generate transactions report



## DownloadUserReport

> DownloadUserReport200Response DownloadUserReport(ctx, id).ContentType(contentType).Execute()

Download report



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuPlus/payzu-sdks/payzupix"
)

func main() {
	contentType := "contentType_example" // string | Obrigatório em toda chamada PayZu. (default to "application/json")
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.DownloadUserReport(context.Background(), id).ContentType(contentType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.DownloadUserReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DownloadUserReport`: DownloadUserReport200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.DownloadUserReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadUserReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]


### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserReport

> ReportJob GetUserReport(ctx, id).ContentType(contentType).Execute()

List report job status



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuPlus/payzu-sdks/payzupix"
)

func main() {
	contentType := "contentType_example" // string | Obrigatório em toda chamada PayZu. (default to "application/json")
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserReport(context.Background(), id).ContentType(contentType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserReport`: ReportJob
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]


### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserTransactionById

> GetUserTransactionById200Response GetUserTransactionById(ctx, id).ContentType(contentType).Execute()

List transaction details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuPlus/payzu-sdks/payzupix"
)

func main() {
	contentType := "contentType_example" // string | Obrigatório em toda chamada PayZu. (default to "application/json")
	id := "id_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserTransactionById(context.Background(), id).ContentType(contentType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserTransactionById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserTransactionById`: GetUserTransactionById200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserTransactionById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserTransactionByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]


### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserTransactions

> GetUserTransactions200Response GetUserTransactions(ctx).ContentType(contentType).DateFrom(dateFrom).DateTo(dateTo).Limit(limit).Page(page).Id(id).Status(status).Type_(type_).Amount(amount).Document(document).Name(name).EndToEndId(endToEndId).SortBy(sortBy).SortDirection(sortDirection).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()

List Transactions



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuPlus/payzu-sdks/payzupix"
)

func main() {
	contentType := "contentType_example" // string | Obrigatório em toda chamada PayZu. (default to "application/json")
	dateFrom := "2025-08-01" // string | Start date (YYYY-MM-DD). (optional)
	dateTo := "2025-08-17" // string | End date (YYYY-MM-DD). (optional)
	limit := float32(10) // float32 | Items per page (max 1000). (optional) (default to 10)
	page := float32(1) // float32 | Page number (default 1). (optional) (default to 1)
	id := "PAYZU2025081418333632CYKN8M" // string | Transaction ID. (optional)
	status := "COMPLETED" // string | Status da transação. Aceita CSV: PENDING,COMPLETED,etc. (optional)
	type_ := "DEPOSIT" // string | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION. (optional)
	amount := float32(15000) // float32 | Amount filter. (optional)
	document := "12345678901" // string | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. (optional)
	name := "Alice" // string | Name filter. (optional)
	endToEndId := "E00360305202508141833bcf1f37b487" // string | Pix end-to-end ID. (optional)
	sortBy := "sortBy_example" // string | Field to sort by (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Sort direction (optional) (default to "desc")
	clientReference := "clientReference_example" // string | Filter by external reference (optional)
	virtualAccount := "virtualAccount_example" // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserTransactions(context.Background()).ContentType(contentType).DateFrom(dateFrom).DateTo(dateTo).Limit(limit).Page(page).Id(id).Status(status).Type_(type_).Amount(amount).Document(document).Name(name).EndToEndId(endToEndId).SortBy(sortBy).SortDirection(sortDirection).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserTransactions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserTransactions`: GetUserTransactions200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserTransactions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]
 **dateFrom** | **string** | Start date (YYYY-MM-DD). | 
 **dateTo** | **string** | End date (YYYY-MM-DD). | 
 **limit** | **float32** | Items per page (max 1000). | [default to 10]
 **page** | **float32** | Page number (default 1). | [default to 1]
 **id** | **string** | Transaction ID. | 
 **status** | **string** | Status da transação. Aceita CSV: PENDING,COMPLETED,etc. | 
 **type_** | **string** | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION. | 
 **amount** | **float32** | Amount filter. | 
 **document** | **string** | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | 
 **name** | **string** | Name filter. | 
 **endToEndId** | **string** | Pix end-to-end ID. | 
 **sortBy** | **string** | Field to sort by | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Sort direction | [default to &quot;desc&quot;]
 **clientReference** | **string** | Filter by external reference | 
 **virtualAccount** | **string** | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | 

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListUserReports

> ListUserReports200Response ListUserReports(ctx).ContentType(contentType).Page(page).Limit(limit).Status(status).Execute()

List report jobs



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuPlus/payzu-sdks/payzupix"
)

func main() {
	contentType := "contentType_example" // string | Obrigatório em toda chamada PayZu. (default to "application/json")
	page := int32(56) // int32 |  (optional) (default to 1)
	limit := int32(56) // int32 |  (optional) (default to 10)
	status := "status_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.ListUserReports(context.Background()).ContentType(contentType).Page(page).Limit(limit).Status(status).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.ListUserReports``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListUserReports`: ListUserReports200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.ListUserReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUserReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]
 **page** | **int32** |  | [default to 1]
 **limit** | **int32** |  | [default to 10]
 **status** | **string** |  | 

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostUserReport

> ReportJob PostUserReport(ctx).PostUserReportRequest(postUserReportRequest).Execute()

Generate transactions report



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuPlus/payzu-sdks/payzupix"
)

func main() {
	postUserReportRequest := *openapiclient.NewPostUserReportRequest(time.Now(), time.Now()) // PostUserReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.PostUserReport(context.Background()).PostUserReportRequest(postUserReportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.PostUserReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostUserReport`: ReportJob
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.PostUserReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostUserReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserReportRequest** | [**PostUserReportRequest**](PostUserReportRequest.md) |  | 

### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

