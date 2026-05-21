# InfractionListResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**total_items** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] 

## Example

```python
from payzu_pix.models.infraction_list_response_pagination import InfractionListResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionListResponsePagination from a JSON string
infraction_list_response_pagination_instance = InfractionListResponsePagination.from_json(json)
# print the JSON string representation of the object
print(InfractionListResponsePagination.to_json())

# convert the object into a dict
infraction_list_response_pagination_dict = infraction_list_response_pagination_instance.to_dict()
# create an instance of InfractionListResponsePagination from a dict
infraction_list_response_pagination_from_dict = InfractionListResponsePagination.from_dict(infraction_list_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


