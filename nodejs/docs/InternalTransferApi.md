# InternalTransferApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInternalTransfer**](InternalTransferApi.md#getinternaltransfer) | **GET** /internal-transfer | Get internal transfer |
| [**postInternalTransfer**](InternalTransferApi.md#postinternaltransferoperation) | **POST** /internal-transfer | Create internal transfer |



## getInternalTransfer

> Transaction getInternalTransfer(contentType, id, clientReference, virtualAccount)

Get internal transfer

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: &#x60;id&#x60; ou &#x60;clientReference&#x60; (também aceita &#x60;virtualAccount&#x60;). Se informar mais de um, todos são aplicados como filtro (AND).

### Example

```ts
import {
  Configuration,
  InternalTransferApi,
} from 'payzu-pix';
import type { GetInternalTransferRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InternalTransferApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
    // string | Transaction ID (optional)
    id: id_example,
    // string | External reference (optional)
    clientReference: clientReference_example,
    // string | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. (optional)
    virtualAccount: virtualAccount_example,
  } satisfies GetInternalTransferRequest;

  try {
    const data = await api.getInternalTransfer(body);
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
| **id** | `string` | Transaction ID | [Optional] [Defaults to `undefined`] |
| **clientReference** | `string` | External reference | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Subconta virtual (até 50 caracteres) usada na criação. Aceito como chave de busca alternativa. | [Optional] [Defaults to `undefined`] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transfer details |  -  |
| **400** | Provide either &#x60;id&#x60; or &#x60;clientReference&#x60; |  -  |
| **404** | Transfer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postInternalTransfer

> Transaction postInternalTransfer(postInternalTransferRequest)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.

### Example

```ts
import {
  Configuration,
  InternalTransferApi,
} from 'payzu-pix';
import type { PostInternalTransferOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InternalTransferApi(config);

  const body = {
    // PostInternalTransferRequest
    postInternalTransferRequest: ...,
  } satisfies PostInternalTransferOperationRequest;

  try {
    const data = await api.postInternalTransfer(body);
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
| **postInternalTransferRequest** | [PostInternalTransferRequest](PostInternalTransferRequest.md) |  | |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transfer completed |  -  |
| **400** | Invalid payload (e.g. payerAccountNumber does not belong to the requester) |  -  |
| **403** | allowInternalTransfer disabled or token missing WITHDRAW permission |  -  |
| **404** | Receiver account not found |  -  |
| **422** | Insufficient balance / amount below ticket minimum |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

