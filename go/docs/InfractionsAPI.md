# \InfractionsAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInfractions**](InfractionsAPI.md#GetInfractions) | **Get** /user/infractions | List Infractions
[**GetInfractionsById**](InfractionsAPI.md#GetInfractionsById) | **Get** /user/infractions/{id} | Get Infraction
[**GetInfractionsDefenseById**](InfractionsAPI.md#GetInfractionsDefenseById) | **Get** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense
[**GetInfractionsDefenses**](InfractionsAPI.md#GetInfractionsDefenses) | **Get** /user/infractions/{id}/defenses | List Defenses
[**PostInfractionsDefense**](InfractionsAPI.md#PostInfractionsDefense) | **Post** /user/infractions/{id}/defenses | Create Defense



## GetInfractions

> InfractionListResponse GetInfractions(ctx).ContentType(contentType).Page(page).Limit(limit).Status(status).Type_(type_).EndToEndId(endToEndId).TransactionId(transactionId).AmountMin(amountMin).AmountMax(amountMax).AnalysisResult(analysisResult).ReportedBy(reportedBy).ParticipantDocument(participantDocument).ParticipantName(participantName).Execute()

List Infractions



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
	status := "status_example" // string | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) (optional)
	type_ := "type__example" // string | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) (optional)
	endToEndId := "endToEndId_example" // string |  (optional)
	transactionId := "transactionId_example" // string |  (optional)
	amountMin := float32(8.14) // float32 |  (optional)
	amountMax := float32(8.14) // float32 |  (optional)
	analysisResult := "analysisResult_example" // string | Comma-separated AnalysisResult (optional)
	reportedBy := "reportedBy_example" // string | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) (optional)
	participantDocument := "participantDocument_example" // string |  (optional)
	participantName := "participantName_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractions(context.Background()).ContentType(contentType).Page(page).Limit(limit).Status(status).Type_(type_).EndToEndId(endToEndId).TransactionId(transactionId).AmountMin(amountMin).AmountMax(amountMax).AnalysisResult(analysisResult).ReportedBy(reportedBy).ParticipantDocument(participantDocument).ParticipantName(participantName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractions`: InfractionListResponse
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]
 **page** | **int32** |  | [default to 1]
 **limit** | **int32** |  | [default to 10]
 **status** | **string** | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | 
 **type_** | **string** | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | 
 **endToEndId** | **string** |  | 
 **transactionId** | **string** |  | 
 **amountMin** | **float32** |  | 
 **amountMax** | **float32** |  | 
 **analysisResult** | **string** | Comma-separated AnalysisResult | 
 **reportedBy** | **string** | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | 
 **participantDocument** | **string** |  | 
 **participantName** | **string** |  | 

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInfractionsById

> InfractionDetail GetInfractionsById(ctx, id).ContentType(contentType).Execute()

Get Infraction



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
	id := "id_example" // string | Infraction ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractionsById(context.Background(), id).ContentType(contentType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractionsById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractionsById`: InfractionDetail
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractionsById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Infraction ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]


### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInfractionsDefenseById

> Defense GetInfractionsDefenseById(ctx, infractionId, defenseId).ContentType(contentType).Execute()

Get Defense



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
	infractionId := "infractionId_example" // string | Infraction ID
	defenseId := "defenseId_example" // string | Defense ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractionsDefenseById(context.Background(), infractionId, defenseId).ContentType(contentType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractionsDefenseById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractionsDefenseById`: Defense
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractionsDefenseById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**infractionId** | **string** | Infraction ID | 
**defenseId** | **string** | Defense ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsDefenseByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]



### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInfractionsDefenses

> []Defense GetInfractionsDefenses(ctx, id).ContentType(contentType).Execute()

List Defenses



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
	id := "id_example" // string | Infraction ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractionsDefenses(context.Background(), id).ContentType(contentType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractionsDefenses``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractionsDefenses`: []Defense
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractionsDefenses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Infraction ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsDefensesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]


### Return type

[**[]Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostInfractionsDefense

> Defense PostInfractionsDefense(ctx, id).Defense(defense).Files(files).Execute()

Create Defense



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
	id := "id_example" // string | Infraction ID
	defense := "defense_example" // string | Defense text (max: 1000 characters)
	files := []*os.File{"TODO"} // []*os.File | Evidence files (max: 10MB total) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.PostInfractionsDefense(context.Background(), id).Defense(defense).Files(files).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.PostInfractionsDefense``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostInfractionsDefense`: Defense
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.PostInfractionsDefense`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Infraction ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostInfractionsDefenseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **defense** | **string** | Defense text (max: 1000 characters) | 
 **files** | **[]*os.File** | Evidence files (max: 10MB total) | 

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

