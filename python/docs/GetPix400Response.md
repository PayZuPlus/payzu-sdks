# GetPix400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** |  | [optional] 
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from payzu_pix.models.get_pix400_response import GetPix400Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPix400Response from a JSON string
get_pix400_response_instance = GetPix400Response.from_json(json)
# print the JSON string representation of the object
print(GetPix400Response.to_json())

# convert the object into a dict
get_pix400_response_dict = get_pix400_response_instance.to_dict()
# create an instance of GetPix400Response from a dict
get_pix400_response_from_dict = GetPix400Response.from_dict(get_pix400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


