# InfractionDetailTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**payer_name** | **str** |  | [optional] 
**payer_document** | **str** |  | [optional] 
**receiver_name** | **str** |  | [optional] 
**receiver_document** | **str** |  | [optional] 
**end_to_end_id** | **str** |  | [optional] 

## Example

```python
from payzu_pix.models.infraction_detail_transaction import InfractionDetailTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionDetailTransaction from a JSON string
infraction_detail_transaction_instance = InfractionDetailTransaction.from_json(json)
# print the JSON string representation of the object
print(InfractionDetailTransaction.to_json())

# convert the object into a dict
infraction_detail_transaction_dict = infraction_detail_transaction_instance.to_dict()
# create an instance of InfractionDetailTransaction from a dict
infraction_detail_transaction_from_dict = InfractionDetailTransaction.from_dict(infraction_detail_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


