# payzu_pix.InternalTransferApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_internal_transfer**](InternalTransferApi.md#get_internal_transfer) | **GET** /internal-transfer | Get internal transfer
[**post_internal_transfer**](InternalTransferApi.md#post_internal_transfer) | **POST** /internal-transfer | Create internal transfer


# **get_internal_transfer**
> Transaction get_internal_transfer(content_type, id=id, client_reference=client_reference, virtual_account=virtual_account)

Get internal transfer

Retrieve an internal transfer by id or clientReference Use apenas um destes parâmetros: id, clientReference. Combinar mais de um retorna erro.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.transaction import Transaction
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.InternalTransferApi(api_client)
    content_type = application/json # str | Obrigatório em toda chamada PayZu. (default to application/json)
    id = 'id_example' # str | Transaction ID (optional)
    client_reference = 'client_reference_example' # str | External reference (optional)
    virtual_account = 'virtual_account_example' # str | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. (optional)

    try:
        # Get internal transfer
        api_response = api_instance.get_internal_transfer(content_type, id=id, client_reference=client_reference, virtual_account=virtual_account)
        print("The response of InternalTransferApi->get_internal_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalTransferApi->get_internal_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Obrigatório em toda chamada PayZu. | [default to application/json]
 **id** | **str**| Transaction ID | [optional] 
 **client_reference** | **str**| External reference | [optional] 
 **virtual_account** | **str**| Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transfer details |  -  |
**400** | Provide either &#x60;id&#x60; or &#x60;clientReference&#x60; |  -  |
**404** | Transfer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_internal_transfer**
> Transaction post_internal_transfer(post_internal_transfer_request)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_internal_transfer_request import PostInternalTransferRequest
from payzu_pix.models.transaction import Transaction
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.InternalTransferApi(api_client)
    post_internal_transfer_request = payzu_pix.PostInternalTransferRequest() # PostInternalTransferRequest | 

    try:
        # Create internal transfer
        api_response = api_instance.post_internal_transfer(post_internal_transfer_request)
        print("The response of InternalTransferApi->post_internal_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalTransferApi->post_internal_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_internal_transfer_request** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transfer completed |  -  |
**400** | Invalid payload (e.g. payerAccountNumber does not belong to the requester) |  -  |
**403** | allowInternalTransfer disabled or token missing WITHDRAW permission |  -  |
**404** | Receiver account not found |  -  |
**422** | Insufficient balance / amount below ticket minimum |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

