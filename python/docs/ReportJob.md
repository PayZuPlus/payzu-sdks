# ReportJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] 
**status** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**expires_at** | **datetime** | When the file expires from storage (typically 7 days after creation) | [optional] 

## Example

```python
from payzu_pix.models.report_job import ReportJob

# TODO update the JSON string below
json = "{}"
# create an instance of ReportJob from a JSON string
report_job_instance = ReportJob.from_json(json)
# print the JSON string representation of the object
print(ReportJob.to_json())

# convert the object into a dict
report_job_dict = report_job_instance.to_dict()
# create an instance of ReportJob from a dict
report_job_from_dict = ReportJob.from_dict(report_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


