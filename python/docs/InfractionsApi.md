# payzu_pix.InfractionsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_infractions**](InfractionsApi.md#get_infractions) | **GET** /user/infractions | List Infractions
[**get_infractions_by_id**](InfractionsApi.md#get_infractions_by_id) | **GET** /user/infractions/{id} | Get Infraction
[**get_infractions_defense_by_id**](InfractionsApi.md#get_infractions_defense_by_id) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense
[**get_infractions_defenses**](InfractionsApi.md#get_infractions_defenses) | **GET** /user/infractions/{id}/defenses | List Defenses
[**post_infractions_defense**](InfractionsApi.md#post_infractions_defense) | **POST** /user/infractions/{id}/defenses | Create Defense


# **get_infractions**
> InfractionListResponse get_infractions(page=page, limit=limit, status=status, type=type, end_to_end_id=end_to_end_id, transaction_id=transaction_id, amount_min=amount_min, amount_max=amount_max, analysis_result=analysis_result, reported_by=reported_by, participant_document=participant_document, participant_name=participant_name, sort_by=sort_by, sort_direction=sort_direction, reported_at_from=reported_at_from, reported_at_to=reported_at_to, created_at_from=created_at_from, created_at_to=created_at_to, expires_at_from=expires_at_from, expires_at_to=expires_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, needs_manual_review=needs_manual_review, id=id, protocol=protocol)

List Infractions

List all infractions for the authenticated user with pagination and filters.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.infraction_list_response import InfractionListResponse
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    limit = 10 # int |  (optional) (default to 10)
    status = 'status_example' # str | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) (optional)
    type = 'type_example' # str | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) (optional)
    end_to_end_id = 'end_to_end_id_example' # str |  (optional)
    transaction_id = 'transaction_id_example' # str |  (optional)
    amount_min = 3.4 # float |  (optional)
    amount_max = 3.4 # float |  (optional)
    analysis_result = 'analysis_result_example' # str | Comma-separated AnalysisResult (optional)
    reported_by = 'reported_by_example' # str | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) (optional)
    participant_document = 'participant_document_example' # str |  (optional)
    participant_name = 'participant_name_example' # str |  (optional)
    sort_by = 'sort_by_example' # str | Sort field. (optional)
    sort_direction = 'sort_direction_example' # str | Sort direction. (optional)
    reported_at_from = '2013-10-20T19:20:30+01:00' # datetime | Filter: reportedAt from. (optional)
    reported_at_to = '2013-10-20T19:20:30+01:00' # datetime | Filter: reportedAt up to. (optional)
    created_at_from = '2013-10-20T19:20:30+01:00' # datetime | Filter: createdAt from. (optional)
    created_at_to = '2013-10-20T19:20:30+01:00' # datetime | Filter: createdAt up to. (optional)
    expires_at_from = '2013-10-20T19:20:30+01:00' # datetime | Filter: expiresAt from. (optional)
    expires_at_to = '2013-10-20T19:20:30+01:00' # datetime | Filter: expiresAt up to. (optional)
    updated_at_from = '2013-10-20T19:20:30+01:00' # datetime | Filter: updatedAt from. (optional)
    updated_at_to = '2013-10-20T19:20:30+01:00' # datetime | Filter: updatedAt up to. (optional)
    needs_manual_review = True # bool | Filter: needs manual review. (optional)
    id = 'id_example' # str | Filter by infraction ID. (optional)
    protocol = 'protocol_example' # str | Filter by protocol. (optional)

    try:
        # List Infractions
        api_response = api_instance.get_infractions(page=page, limit=limit, status=status, type=type, end_to_end_id=end_to_end_id, transaction_id=transaction_id, amount_min=amount_min, amount_max=amount_max, analysis_result=analysis_result, reported_by=reported_by, participant_document=participant_document, participant_name=participant_name, sort_by=sort_by, sort_direction=sort_direction, reported_at_from=reported_at_from, reported_at_to=reported_at_to, created_at_from=created_at_from, created_at_to=created_at_to, expires_at_from=expires_at_from, expires_at_to=expires_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, needs_manual_review=needs_manual_review, id=id, protocol=protocol)
        print("The response of InfractionsApi->get_infractions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **limit** | **int**|  | [optional] [default to 10]
 **status** | **str**| Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] 
 **type** | **str**| Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] 
 **end_to_end_id** | **str**|  | [optional] 
 **transaction_id** | **str**|  | [optional] 
 **amount_min** | **float**|  | [optional] 
 **amount_max** | **float**|  | [optional] 
 **analysis_result** | **str**| Comma-separated AnalysisResult | [optional] 
 **reported_by** | **str**| Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] 
 **participant_document** | **str**|  | [optional] 
 **participant_name** | **str**|  | [optional] 
 **sort_by** | **str**| Sort field. | [optional] 
 **sort_direction** | **str**| Sort direction. | [optional] 
 **reported_at_from** | **datetime**| Filter: reportedAt from. | [optional] 
 **reported_at_to** | **datetime**| Filter: reportedAt up to. | [optional] 
 **created_at_from** | **datetime**| Filter: createdAt from. | [optional] 
 **created_at_to** | **datetime**| Filter: createdAt up to. | [optional] 
 **expires_at_from** | **datetime**| Filter: expiresAt from. | [optional] 
 **expires_at_to** | **datetime**| Filter: expiresAt up to. | [optional] 
 **updated_at_from** | **datetime**| Filter: updatedAt from. | [optional] 
 **updated_at_to** | **datetime**| Filter: updatedAt up to. | [optional] 
 **needs_manual_review** | **bool**| Filter: needs manual review. | [optional] 
 **id** | **str**| Filter by infraction ID. | [optional] 
 **protocol** | **str**| Filter by protocol. | [optional] 

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of infractions with pagination |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_by_id**
> InfractionDetail get_infractions_by_id(id)

Get Infraction

Get a specific infraction by ID.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.infraction_detail import InfractionDetail
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'id_example' # str | Infraction ID

    try:
        # Get Infraction
        api_response = api_instance.get_infractions_by_id(id)
        print("The response of InfractionsApi->get_infractions_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Infraction ID | 

### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Infraction details |  -  |
**404** | Infraction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_defense_by_id**
> Defense get_infractions_defense_by_id(infraction_id, defense_id)

Get Defense

Get a specific defense for an infraction. **Requires support privileges**.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    infraction_id = 'infraction_id_example' # str | Infraction ID
    defense_id = 'defense_id_example' # str | Defense ID

    try:
        # Get Defense
        api_response = api_instance.get_infractions_defense_by_id(infraction_id, defense_id)
        print("The response of InfractionsApi->get_infractions_defense_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_defense_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **infraction_id** | **str**| Infraction ID | 
 **defense_id** | **str**| Defense ID | 

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Defense details |  -  |
**404** | Defense not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_defenses**
> List[Defense] get_infractions_defenses(id)

List Defenses

List all defenses for a specific infraction. **Requires support privileges**.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'id_example' # str | Infraction ID

    try:
        # List Defenses
        api_response = api_instance.get_infractions_defenses(id)
        print("The response of InfractionsApi->get_infractions_defenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_defenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Infraction ID | 

### Return type

[**List[Defense]**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of defenses |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_infractions_defense**
> Defense post_infractions_defense(id, defense, files=files)

Create Defense

Create a defense for a specific infraction.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'id_example' # str | Infraction ID
    defense = 'defense_example' # str | Defense text (max: 1000 characters)
    files = None # List[bytes] | Evidence files (max: 10MB total) (optional)

    try:
        # Create Defense
        api_response = api_instance.post_infractions_defense(id, defense, files=files)
        print("The response of InfractionsApi->post_infractions_defense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->post_infractions_defense: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Infraction ID | 
 **defense** | **str**| Defense text (max: 1000 characters) | 
 **files** | **List[bytes]**| Evidence files (max: 10MB total) | [optional] 

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Defense created |  -  |
**400** | Invalid file or provider does not support defense |  -  |
**404** | Infraction not found |  -  |
**422** | Infraction not open for defense |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

