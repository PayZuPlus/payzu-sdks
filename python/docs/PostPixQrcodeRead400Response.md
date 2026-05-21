# PostPixQrcodeRead400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from payzu_pix.models.post_pix_qrcode_read400_response import PostPixQrcodeRead400Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostPixQrcodeRead400Response from a JSON string
post_pix_qrcode_read400_response_instance = PostPixQrcodeRead400Response.from_json(json)
# print the JSON string representation of the object
print(PostPixQrcodeRead400Response.to_json())

# convert the object into a dict
post_pix_qrcode_read400_response_dict = post_pix_qrcode_read400_response_instance.to_dict()
# create an instance of PostPixQrcodeRead400Response from a dict
post_pix_qrcode_read400_response_from_dict = PostPixQrcodeRead400Response.from_dict(post_pix_qrcode_read400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


