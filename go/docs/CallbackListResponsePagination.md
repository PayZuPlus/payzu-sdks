# CallbackListResponsePagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Page** | Pointer to **float32** | Current page | [optional] 
**Limit** | Pointer to **float32** | Items per page | [optional] 
**HasNextPage** | Pointer to **bool** | Indicates if there is a next page | [optional] 

## Methods

### NewCallbackListResponsePagination

`func NewCallbackListResponsePagination() *CallbackListResponsePagination`

NewCallbackListResponsePagination instantiates a new CallbackListResponsePagination object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallbackListResponsePaginationWithDefaults

`func NewCallbackListResponsePaginationWithDefaults() *CallbackListResponsePagination`

NewCallbackListResponsePaginationWithDefaults instantiates a new CallbackListResponsePagination object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPage

`func (o *CallbackListResponsePagination) GetPage() float32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *CallbackListResponsePagination) GetPageOk() (*float32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *CallbackListResponsePagination) SetPage(v float32)`

SetPage sets Page field to given value.

### HasPage

`func (o *CallbackListResponsePagination) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetLimit

`func (o *CallbackListResponsePagination) GetLimit() float32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *CallbackListResponsePagination) GetLimitOk() (*float32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *CallbackListResponsePagination) SetLimit(v float32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *CallbackListResponsePagination) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasNextPage

`func (o *CallbackListResponsePagination) GetHasNextPage() bool`

GetHasNextPage returns the HasNextPage field if non-nil, zero value otherwise.

### GetHasNextPageOk

`func (o *CallbackListResponsePagination) GetHasNextPageOk() (*bool, bool)`

GetHasNextPageOk returns a tuple with the HasNextPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNextPage

`func (o *CallbackListResponsePagination) SetHasNextPage(v bool)`

SetHasNextPage sets HasNextPage field to given value.

### HasHasNextPage

`func (o *CallbackListResponsePagination) HasHasNextPage() bool`

HasHasNextPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


