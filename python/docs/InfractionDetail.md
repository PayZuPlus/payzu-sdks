# InfractionDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**protocol** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**reported_by** | **str** |  | [optional] 
**report_details** | **str** |  | [optional] 
**analysis_result** | **str** |  | [optional] 
**analysis_details** | **str** |  | [optional] 
**reported_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] 
**defense_history** | [**List[Defense]**](Defense.md) |  | [optional] 

## Example

```python
from payzu_pix.models.infraction_detail import InfractionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionDetail from a JSON string
infraction_detail_instance = InfractionDetail.from_json(json)
# print the JSON string representation of the object
print(InfractionDetail.to_json())

# convert the object into a dict
infraction_detail_dict = infraction_detail_instance.to_dict()
# create an instance of InfractionDetail from a dict
infraction_detail_from_dict = InfractionDetail.from_dict(infraction_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


