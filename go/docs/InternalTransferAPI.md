# \InternalTransferAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInternalTransfer**](InternalTransferAPI.md#GetInternalTransfer) | **Get** /internal-transfer | Get internal transfer
[**PostInternalTransfer**](InternalTransferAPI.md#PostInternalTransfer) | **Post** /internal-transfer | Create internal transfer



## GetInternalTransfer

> Transaction GetInternalTransfer(ctx).ContentType(contentType).Id(id).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()

Get internal transfer



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
	id := "id_example" // string | Transaction ID (optional)
	clientReference := "clientReference_example" // string | External reference (optional)
	virtualAccount := "virtualAccount_example" // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InternalTransferAPI.GetInternalTransfer(context.Background()).ContentType(contentType).Id(id).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InternalTransferAPI.GetInternalTransfer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInternalTransfer`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `InternalTransferAPI.GetInternalTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInternalTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **string** | Obrigatório em toda chamada PayZu. | [default to &quot;application/json&quot;]
 **id** | **string** | Transaction ID | 
 **clientReference** | **string** | External reference | 
 **virtualAccount** | **string** | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostInternalTransfer

> Transaction PostInternalTransfer(ctx).PostInternalTransferRequest(postInternalTransferRequest).Execute()

Create internal transfer



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
	postInternalTransferRequest := *openapiclient.NewPostInternalTransferRequest("513579", "987654", float32(100.5)) // PostInternalTransferRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InternalTransferAPI.PostInternalTransfer(context.Background()).PostInternalTransferRequest(postInternalTransferRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InternalTransferAPI.PostInternalTransfer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostInternalTransfer`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `InternalTransferAPI.PostInternalTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostInternalTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postInternalTransferRequest** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md) |  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

