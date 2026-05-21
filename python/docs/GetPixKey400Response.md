# GetPixKey400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from payzu_pix.models.get_pix_key400_response import GetPixKey400Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPixKey400Response from a JSON string
get_pix_key400_response_instance = GetPixKey400Response.from_json(json)
# print the JSON string representation of the object
print(GetPixKey400Response.to_json())

# convert the object into a dict
get_pix_key400_response_dict = get_pix_key400_response_instance.to_dict()
# create an instance of GetPixKey400Response from a dict
get_pix_key400_response_from_dict = GetPixKey400Response.from_dict(get_pix_key400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


