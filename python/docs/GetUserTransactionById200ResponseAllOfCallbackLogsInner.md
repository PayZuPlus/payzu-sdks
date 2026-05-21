# GetUserTransactionById200ResponseAllOfCallbackLogsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**status** | **int** | HTTP status code returned by the receiver | [optional] 
**response_time** | **float** | Round-trip time in ms | [optional] 
**created_at** | **datetime** |  | [optional] 

## Example

```python
from payzu_pix.models.get_user_transaction_by_id200_response_all_of_callback_logs_inner import GetUserTransactionById200ResponseAllOfCallbackLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserTransactionById200ResponseAllOfCallbackLogsInner from a JSON string
get_user_transaction_by_id200_response_all_of_callback_logs_inner_instance = GetUserTransactionById200ResponseAllOfCallbackLogsInner.from_json(json)
# print the JSON string representation of the object
print(GetUserTransactionById200ResponseAllOfCallbackLogsInner.to_json())

# convert the object into a dict
get_user_transaction_by_id200_response_all_of_callback_logs_inner_dict = get_user_transaction_by_id200_response_all_of_callback_logs_inner_instance.to_dict()
# create an instance of GetUserTransactionById200ResponseAllOfCallbackLogsInner from a dict
get_user_transaction_by_id200_response_all_of_callback_logs_inner_from_dict = GetUserTransactionById200ResponseAllOfCallbackLogsInner.from_dict(get_user_transaction_by_id200_response_all_of_callback_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


