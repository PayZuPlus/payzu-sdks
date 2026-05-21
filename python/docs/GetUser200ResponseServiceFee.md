# GetUser200ResponseServiceFee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_in_minimum** | **float** |  | [optional] 
**cash_in_fixed** | **float** |  | [optional] 
**cash_in_percent** | **float** |  | [optional] 
**cash_out_minimum** | **float** |  | [optional] 
**cash_out_fixed** | **float** |  | [optional] 
**cash_out_percent** | **float** |  | [optional] 

## Example

```python
from payzu_pix.models.get_user200_response_service_fee import GetUser200ResponseServiceFee

# TODO update the JSON string below
json = "{}"
# create an instance of GetUser200ResponseServiceFee from a JSON string
get_user200_response_service_fee_instance = GetUser200ResponseServiceFee.from_json(json)
# print the JSON string representation of the object
print(GetUser200ResponseServiceFee.to_json())

# convert the object into a dict
get_user200_response_service_fee_dict = get_user200_response_service_fee_instance.to_dict()
# create an instance of GetUser200ResponseServiceFee from a dict
get_user200_response_service_fee_from_dict = GetUser200ResponseServiceFee.from_dict(get_user200_response_service_fee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


