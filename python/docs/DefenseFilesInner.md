# DefenseFilesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**mime_type** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**url** | **str** | Signed download URL (expires in 9 minutes). Present only when fetching an individual defense; absent in the listing. | [optional] 

## Example

```python
from payzu_pix.models.defense_files_inner import DefenseFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseFilesInner from a JSON string
defense_files_inner_instance = DefenseFilesInner.from_json(json)
# print the JSON string representation of the object
print(DefenseFilesInner.to_json())

# convert the object into a dict
defense_files_inner_dict = defense_files_inner_instance.to_dict()
# create an instance of DefenseFilesInner from a dict
defense_files_inner_from_dict = DefenseFilesInner.from_dict(defense_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


