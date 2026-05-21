# InfractionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Protocol** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**ReportedBy** | Pointer to **string** |  | [optional] 
**ReportDetails** | Pointer to **string** |  | [optional] 
**AnalysisResult** | Pointer to **string** |  | [optional] 
**AnalysisDetails** | Pointer to **string** |  | [optional] 
**ReportedAt** | Pointer to **time.Time** |  | [optional] 
**ExpiresAt** | Pointer to **time.Time** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 
**Transaction** | Pointer to [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] 
**DefenseHistory** | Pointer to [**[]Defense**](Defense.md) |  | [optional] 

## Methods

### NewInfractionDetail

`func NewInfractionDetail() *InfractionDetail`

NewInfractionDetail instantiates a new InfractionDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfractionDetailWithDefaults

`func NewInfractionDetailWithDefaults() *InfractionDetail`

NewInfractionDetailWithDefaults instantiates a new InfractionDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InfractionDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InfractionDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InfractionDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *InfractionDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetProtocol

`func (o *InfractionDetail) GetProtocol() string`

GetProtocol returns the Protocol field if non-nil, zero value otherwise.

### GetProtocolOk

`func (o *InfractionDetail) GetProtocolOk() (*string, bool)`

GetProtocolOk returns a tuple with the Protocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocol

`func (o *InfractionDetail) SetProtocol(v string)`

SetProtocol sets Protocol field to given value.

### HasProtocol

`func (o *InfractionDetail) HasProtocol() bool`

HasProtocol returns a boolean if a field has been set.

### GetStatus

`func (o *InfractionDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InfractionDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InfractionDetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InfractionDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *InfractionDetail) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InfractionDetail) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InfractionDetail) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *InfractionDetail) HasType() bool`

HasType returns a boolean if a field has been set.

### GetReportedBy

`func (o *InfractionDetail) GetReportedBy() string`

GetReportedBy returns the ReportedBy field if non-nil, zero value otherwise.

### GetReportedByOk

`func (o *InfractionDetail) GetReportedByOk() (*string, bool)`

GetReportedByOk returns a tuple with the ReportedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedBy

`func (o *InfractionDetail) SetReportedBy(v string)`

SetReportedBy sets ReportedBy field to given value.

### HasReportedBy

`func (o *InfractionDetail) HasReportedBy() bool`

HasReportedBy returns a boolean if a field has been set.

### GetReportDetails

`func (o *InfractionDetail) GetReportDetails() string`

GetReportDetails returns the ReportDetails field if non-nil, zero value otherwise.

### GetReportDetailsOk

`func (o *InfractionDetail) GetReportDetailsOk() (*string, bool)`

GetReportDetailsOk returns a tuple with the ReportDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDetails

`func (o *InfractionDetail) SetReportDetails(v string)`

SetReportDetails sets ReportDetails field to given value.

### HasReportDetails

`func (o *InfractionDetail) HasReportDetails() bool`

HasReportDetails returns a boolean if a field has been set.

### GetAnalysisResult

`func (o *InfractionDetail) GetAnalysisResult() string`

GetAnalysisResult returns the AnalysisResult field if non-nil, zero value otherwise.

### GetAnalysisResultOk

`func (o *InfractionDetail) GetAnalysisResultOk() (*string, bool)`

GetAnalysisResultOk returns a tuple with the AnalysisResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisResult

`func (o *InfractionDetail) SetAnalysisResult(v string)`

SetAnalysisResult sets AnalysisResult field to given value.

### HasAnalysisResult

`func (o *InfractionDetail) HasAnalysisResult() bool`

HasAnalysisResult returns a boolean if a field has been set.

### GetAnalysisDetails

`func (o *InfractionDetail) GetAnalysisDetails() string`

GetAnalysisDetails returns the AnalysisDetails field if non-nil, zero value otherwise.

### GetAnalysisDetailsOk

`func (o *InfractionDetail) GetAnalysisDetailsOk() (*string, bool)`

GetAnalysisDetailsOk returns a tuple with the AnalysisDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisDetails

`func (o *InfractionDetail) SetAnalysisDetails(v string)`

SetAnalysisDetails sets AnalysisDetails field to given value.

### HasAnalysisDetails

`func (o *InfractionDetail) HasAnalysisDetails() bool`

HasAnalysisDetails returns a boolean if a field has been set.

### GetReportedAt

`func (o *InfractionDetail) GetReportedAt() time.Time`

GetReportedAt returns the ReportedAt field if non-nil, zero value otherwise.

### GetReportedAtOk

`func (o *InfractionDetail) GetReportedAtOk() (*time.Time, bool)`

GetReportedAtOk returns a tuple with the ReportedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedAt

`func (o *InfractionDetail) SetReportedAt(v time.Time)`

SetReportedAt sets ReportedAt field to given value.

### HasReportedAt

`func (o *InfractionDetail) HasReportedAt() bool`

HasReportedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *InfractionDetail) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *InfractionDetail) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *InfractionDetail) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *InfractionDetail) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *InfractionDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *InfractionDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *InfractionDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *InfractionDetail) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *InfractionDetail) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *InfractionDetail) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *InfractionDetail) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *InfractionDetail) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetTransaction

`func (o *InfractionDetail) GetTransaction() InfractionDetailTransaction`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *InfractionDetail) GetTransactionOk() (*InfractionDetailTransaction, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *InfractionDetail) SetTransaction(v InfractionDetailTransaction)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *InfractionDetail) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.

### GetDefenseHistory

`func (o *InfractionDetail) GetDefenseHistory() []Defense`

GetDefenseHistory returns the DefenseHistory field if non-nil, zero value otherwise.

### GetDefenseHistoryOk

`func (o *InfractionDetail) GetDefenseHistoryOk() (*[]Defense, bool)`

GetDefenseHistoryOk returns a tuple with the DefenseHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefenseHistory

`func (o *InfractionDetail) SetDefenseHistory(v []Defense)`

SetDefenseHistory sets DefenseHistory field to given value.

### HasDefenseHistory

`func (o *InfractionDetail) HasDefenseHistory() bool`

HasDefenseHistory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


