# TransactionInfraction

Infraction details if the transaction has been disputed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**protocol** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**report_details** | **str** |  | [optional] 
**reported_by** | **str** |  | [optional] 
**analysis_result** | **str** |  | [optional] 
**analysis_details** | **str** |  | [optional] 
**reported_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from payzu_pix.models.transaction_infraction import TransactionInfraction

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionInfraction from a JSON string
transaction_infraction_instance = TransactionInfraction.from_json(json)
# print the JSON string representation of the object
print(TransactionInfraction.to_json())

# convert the object into a dict
transaction_infraction_dict = transaction_infraction_instance.to_dict()
# create an instance of TransactionInfraction from a dict
transaction_infraction_from_dict = TransactionInfraction.from_dict(transaction_infraction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


