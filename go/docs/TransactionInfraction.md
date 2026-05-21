# TransactionInfraction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Protocol** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**ReportDetails** | Pointer to **string** |  | [optional] 
**ReportedBy** | Pointer to **string** |  | [optional] 
**AnalysisResult** | Pointer to **string** |  | [optional] 
**AnalysisDetails** | Pointer to **string** |  | [optional] 
**ReportedAt** | Pointer to **time.Time** |  | [optional] 
**ExpiresAt** | Pointer to **time.Time** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewTransactionInfraction

`func NewTransactionInfraction() *TransactionInfraction`

NewTransactionInfraction instantiates a new TransactionInfraction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionInfractionWithDefaults

`func NewTransactionInfractionWithDefaults() *TransactionInfraction`

NewTransactionInfractionWithDefaults instantiates a new TransactionInfraction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionInfraction) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionInfraction) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionInfraction) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TransactionInfraction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetProtocol

`func (o *TransactionInfraction) GetProtocol() string`

GetProtocol returns the Protocol field if non-nil, zero value otherwise.

### GetProtocolOk

`func (o *TransactionInfraction) GetProtocolOk() (*string, bool)`

GetProtocolOk returns a tuple with the Protocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocol

`func (o *TransactionInfraction) SetProtocol(v string)`

SetProtocol sets Protocol field to given value.

### HasProtocol

`func (o *TransactionInfraction) HasProtocol() bool`

HasProtocol returns a boolean if a field has been set.

### GetStatus

`func (o *TransactionInfraction) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionInfraction) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionInfraction) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TransactionInfraction) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *TransactionInfraction) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionInfraction) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionInfraction) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionInfraction) HasType() bool`

HasType returns a boolean if a field has been set.

### GetReportDetails

`func (o *TransactionInfraction) GetReportDetails() string`

GetReportDetails returns the ReportDetails field if non-nil, zero value otherwise.

### GetReportDetailsOk

`func (o *TransactionInfraction) GetReportDetailsOk() (*string, bool)`

GetReportDetailsOk returns a tuple with the ReportDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDetails

`func (o *TransactionInfraction) SetReportDetails(v string)`

SetReportDetails sets ReportDetails field to given value.

### HasReportDetails

`func (o *TransactionInfraction) HasReportDetails() bool`

HasReportDetails returns a boolean if a field has been set.

### GetReportedBy

`func (o *TransactionInfraction) GetReportedBy() string`

GetReportedBy returns the ReportedBy field if non-nil, zero value otherwise.

### GetReportedByOk

`func (o *TransactionInfraction) GetReportedByOk() (*string, bool)`

GetReportedByOk returns a tuple with the ReportedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedBy

`func (o *TransactionInfraction) SetReportedBy(v string)`

SetReportedBy sets ReportedBy field to given value.

### HasReportedBy

`func (o *TransactionInfraction) HasReportedBy() bool`

HasReportedBy returns a boolean if a field has been set.

### GetAnalysisResult

`func (o *TransactionInfraction) GetAnalysisResult() string`

GetAnalysisResult returns the AnalysisResult field if non-nil, zero value otherwise.

### GetAnalysisResultOk

`func (o *TransactionInfraction) GetAnalysisResultOk() (*string, bool)`

GetAnalysisResultOk returns a tuple with the AnalysisResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisResult

`func (o *TransactionInfraction) SetAnalysisResult(v string)`

SetAnalysisResult sets AnalysisResult field to given value.

### HasAnalysisResult

`func (o *TransactionInfraction) HasAnalysisResult() bool`

HasAnalysisResult returns a boolean if a field has been set.

### GetAnalysisDetails

`func (o *TransactionInfraction) GetAnalysisDetails() string`

GetAnalysisDetails returns the AnalysisDetails field if non-nil, zero value otherwise.

### GetAnalysisDetailsOk

`func (o *TransactionInfraction) GetAnalysisDetailsOk() (*string, bool)`

GetAnalysisDetailsOk returns a tuple with the AnalysisDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisDetails

`func (o *TransactionInfraction) SetAnalysisDetails(v string)`

SetAnalysisDetails sets AnalysisDetails field to given value.

### HasAnalysisDetails

`func (o *TransactionInfraction) HasAnalysisDetails() bool`

HasAnalysisDetails returns a boolean if a field has been set.

### GetReportedAt

`func (o *TransactionInfraction) GetReportedAt() time.Time`

GetReportedAt returns the ReportedAt field if non-nil, zero value otherwise.

### GetReportedAtOk

`func (o *TransactionInfraction) GetReportedAtOk() (*time.Time, bool)`

GetReportedAtOk returns a tuple with the ReportedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedAt

`func (o *TransactionInfraction) SetReportedAt(v time.Time)`

SetReportedAt sets ReportedAt field to given value.

### HasReportedAt

`func (o *TransactionInfraction) HasReportedAt() bool`

HasReportedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *TransactionInfraction) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *TransactionInfraction) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *TransactionInfraction) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *TransactionInfraction) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *TransactionInfraction) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionInfraction) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionInfraction) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *TransactionInfraction) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *TransactionInfraction) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransactionInfraction) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransactionInfraction) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *TransactionInfraction) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


