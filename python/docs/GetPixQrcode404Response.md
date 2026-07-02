# GetPixQrcode404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** |  | [optional] 
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from payzu_pix.models.get_pix_qrcode404_response import GetPixQrcode404Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPixQrcode404Response from a JSON string
get_pix_qrcode404_response_instance = GetPixQrcode404Response.from_json(json)
# print the JSON string representation of the object
print(GetPixQrcode404Response.to_json())

# convert the object into a dict
get_pix_qrcode404_response_dict = get_pix_qrcode404_response_instance.to_dict()
# create an instance of GetPixQrcode404Response from a dict
get_pix_qrcode404_response_from_dict = GetPixQrcode404Response.from_dict(get_pix_qrcode404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


