# PostUserReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **datetime** |  | 
**date_to** | **datetime** |  | 
**status** | **List[str]** |  | [optional] 
**type** | **List[str]** |  | [optional] 

## Example

```python
from payzu_pix.models.post_user_report_request import PostUserReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostUserReportRequest from a JSON string
post_user_report_request_instance = PostUserReportRequest.from_json(json)
# print the JSON string representation of the object
print(PostUserReportRequest.to_json())

# convert the object into a dict
post_user_report_request_dict = post_user_report_request_instance.to_dict()
# create an instance of PostUserReportRequest from a dict
post_user_report_request_from_dict = PostUserReportRequest.from_dict(post_user_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


