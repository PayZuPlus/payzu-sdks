# PostWithdrawQrcode400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from payzu_pix.models.post_withdraw_qrcode400_response import PostWithdrawQrcode400Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostWithdrawQrcode400Response from a JSON string
post_withdraw_qrcode400_response_instance = PostWithdrawQrcode400Response.from_json(json)
# print the JSON string representation of the object
print(PostWithdrawQrcode400Response.to_json())

# convert the object into a dict
post_withdraw_qrcode400_response_dict = post_withdraw_qrcode400_response_instance.to_dict()
# create an instance of PostWithdrawQrcode400Response from a dict
post_withdraw_qrcode400_response_from_dict = PostWithdrawQrcode400Response.from_dict(post_withdraw_qrcode400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


