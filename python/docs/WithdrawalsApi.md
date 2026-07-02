# payzu_pix.WithdrawalsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pix_key**](WithdrawalsApi.md#get_pix_key) | **GET** /pix/key | Dict Pix Key Lookup
[**get_withdraw**](WithdrawalsApi.md#get_withdraw) | **GET** /withdraw | Retrieve Withdrawal
[**get_withdraw_proof**](WithdrawalsApi.md#get_withdraw_proof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt
[**post_pix_qrcode_read**](WithdrawalsApi.md#post_pix_qrcode_read) | **POST** /pix/qrcode/read | Read QR Code
[**post_withdraw**](WithdrawalsApi.md#post_withdraw) | **POST** /withdraw | Create Withdrawal (Pix key)
[**post_withdraw_qrcode**](WithdrawalsApi.md#post_withdraw_qrcode) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code


# **get_pix_key**
> PixKeyInfo get_pix_key(content_type, pix_key)

Dict Pix Key Lookup

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner's details and associated financial institution.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.pix_key_info import PixKeyInfo
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    content_type = application/json # str | Obrigatório em toda chamada PayZu. (default to application/json)
    pix_key = 'example@payzu.com.br' # str | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).

    try:
        # Dict Pix Key Lookup
        api_response = api_instance.get_pix_key(content_type, pix_key)
        print("The response of WithdrawalsApi->get_pix_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->get_pix_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Obrigatório em toda chamada PayZu. | [default to application/json]
 **pix_key** | **str**| The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | 

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pix key information retrieved successfully |  -  |
**400** | Invalid Pix key format |  -  |
**404** | Pix key not found in DICT |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_withdraw**
> Transaction get_withdraw(content_type, id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)

Retrieve Withdrawal

Retorna o status e os detalhes atuais de um saque. Informe pelo menos um destes parâmetros: `id`, `clientReference` ou `endToEndId`. Se informar mais de um, todos são aplicados como filtro (AND), o que pode não retornar registro caso não apontem para a mesma transação.

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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    content_type = application/json # str | Obrigatório em toda chamada PayZu. (default to application/json)
    id = 'PAYZU2025081721512946OOLK75' # str | Transaction ID. (optional)
    client_reference = 'client_reference_example' # str | External reference provided when creating the withdrawal. (optional)
    end_to_end_id = 'end_to_end_id_example' # str | Pix end-to-end ID. (optional)
    virtual_account = 'virtual_account_example' # str | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. (optional)

    try:
        # Retrieve Withdrawal
        api_response = api_instance.get_withdraw(content_type, id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)
        print("The response of WithdrawalsApi->get_withdraw:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->get_withdraw: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Obrigatório em toda chamada PayZu. | [default to application/json]
 **id** | **str**| Transaction ID. | [optional] 
 **client_reference** | **str**| External reference provided when creating the withdrawal. | [optional] 
 **end_to_end_id** | **str**| Pix end-to-end ID. | [optional] 
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
**200** | Current withdrawal state |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_withdraw_proof**
> GetProof200Response get_withdraw_proof(content_type, id, type=type)

Get Withdrawal Receipt

Retorna o comprovante da transação como JSON com o campo `base64` (PDF codificado). Decodifique pra exibir ou salvar como `.pdf`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_proof200_response import GetProof200Response
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    content_type = application/json # str | Obrigatório em toda chamada PayZu. (default to application/json)
    id = 'PAYZU2025081721512946OOLK75' # str | Transaction ID.
    type = pdf # str | Return format. (optional) (default to pdf)

    try:
        # Get Withdrawal Receipt
        api_response = api_instance.get_withdraw_proof(content_type, id, type=type)
        print("The response of WithdrawalsApi->get_withdraw_proof:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->get_withdraw_proof: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Obrigatório em toda chamada PayZu. | [default to application/json]
 **id** | **str**| Transaction ID. | 
 **type** | **str**| Return format. | [optional] [default to pdf]

### Return type

[**GetProof200Response**](GetProof200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Base64 if &#x60;type&#x3D;base64&#x60;, otherwise binary PDF. |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pix_qrcode_read**
> QRCodeReadResponse post_pix_qrcode_read(post_pix_qrcode_read_request)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. No momento a PayZu só suporta QR Code dinâmico. QR estático ainda não é processado.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_pix_qrcode_read_request import PostPixQrcodeReadRequest
from payzu_pix.models.qr_code_read_response import QRCodeReadResponse
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    post_pix_qrcode_read_request = payzu_pix.PostPixQrcodeReadRequest() # PostPixQrcodeReadRequest | 

    try:
        # Read QR Code
        api_response = api_instance.post_pix_qrcode_read(post_pix_qrcode_read_request)
        print("The response of WithdrawalsApi->post_pix_qrcode_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->post_pix_qrcode_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_pix_qrcode_read_request** | [**PostPixQrcodeReadRequest**](PostPixQrcodeReadRequest.md)|  | 

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QR Code decoded successfully |  -  |
**400** | Invalid QR Code format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_withdraw**
> Transaction post_withdraw(post_withdraw_request)

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_withdraw_request import PostWithdrawRequest
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    post_withdraw_request = payzu_pix.PostWithdrawRequest() # PostWithdrawRequest | 

    try:
        # Create Withdrawal (Pix key)
        api_response = api_instance.post_withdraw(post_withdraw_request)
        print("The response of WithdrawalsApi->post_withdraw:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->post_withdraw: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_withdraw_request** | [**PostWithdrawRequest**](PostWithdrawRequest.md)|  | 

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
**200** | Withdrawal created |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_withdraw_qrcode**
> Transaction post_withdraw_qrcode(post_withdraw_qrcode_request)

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If `amount` is not provided, the QR Code's embedded value will be used. No momento a PayZu só suporta QR Code dinâmico. QR estático ainda não é processado.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_withdraw_qrcode_request import PostWithdrawQrcodeRequest
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    post_withdraw_qrcode_request = payzu_pix.PostWithdrawQrcodeRequest() # PostWithdrawQrcodeRequest | 

    try:
        # Create Withdrawal using QR Code
        api_response = api_instance.post_withdraw_qrcode(post_withdraw_qrcode_request)
        print("The response of WithdrawalsApi->post_withdraw_qrcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->post_withdraw_qrcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_withdraw_qrcode_request** | [**PostWithdrawQrcodeRequest**](PostWithdrawQrcodeRequest.md)|  | 

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
**200** | Withdrawal created from QR Code |  -  |
**400** | Invalid QR Code or missing amount for static QR Code without value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

