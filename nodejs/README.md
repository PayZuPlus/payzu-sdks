# payzu-pix@0.1.0

A TypeScript SDK client for the api.payzu.processamento.com API.

## Usage

First, install the SDK from npm.

```bash
npm install payzu-pix --save
```

Next, try it out.


```ts
import {
  Configuration,
  AccountApi,
} from 'payzu-pix';
import type { GetUserRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // 'application/json' | Obrigatório em toda chamada PayZu.
    contentType: contentType_example,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AccountApi* | [**getUser**](docs/AccountApi.md#getuser) | **GET** /user | Account Info
*AccountApi* | [**getUserBalance**](docs/AccountApi.md#getuserbalance) | **GET** /user/balance | Account Balance
*CallbacksApi* | [**getUserCallbackById**](docs/CallbacksApi.md#getusercallbackbyid) | **GET** /user/callbacks/{id} | Get Callback
*CallbacksApi* | [**getUserCallbacks**](docs/CallbacksApi.md#getusercallbacks) | **GET** /user/callbacks | List Callbacks
*CallbacksApi* | [**resendUserCallbackSingle**](docs/CallbacksApi.md#resendusercallbacksingle) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single)
*CallbacksApi* | [**resendUserCallbacks**](docs/CallbacksApi.md#resendusercallbacksoperation) | **POST** /user/callbacks/resend | Re-send callbacks (bulk)
*InfractionsApi* | [**getInfractions**](docs/InfractionsApi.md#getinfractions) | **GET** /user/infractions | List Infractions
*InfractionsApi* | [**getInfractionsById**](docs/InfractionsApi.md#getinfractionsbyid) | **GET** /user/infractions/{id} | Get Infraction
*InfractionsApi* | [**getInfractionsDefenseById**](docs/InfractionsApi.md#getinfractionsdefensebyid) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense
*InfractionsApi* | [**getInfractionsDefenses**](docs/InfractionsApi.md#getinfractionsdefenses) | **GET** /user/infractions/{id}/defenses | List Defenses
*InfractionsApi* | [**postInfractionsDefense**](docs/InfractionsApi.md#postinfractionsdefense) | **POST** /user/infractions/{id}/defenses | Create Defense
*InternalTransferApi* | [**getInternalTransfer**](docs/InternalTransferApi.md#getinternaltransfer) | **GET** /internal-transfer | Get internal transfer
*InternalTransferApi* | [**postInternalTransfer**](docs/InternalTransferApi.md#postinternaltransferoperation) | **POST** /internal-transfer | Create internal transfer
*PixOperationsApi* | [**getPix**](docs/PixOperationsApi.md#getpix) | **GET** /pix | Retrieve Charge
*PixOperationsApi* | [**getPixQrcode**](docs/PixOperationsApi.md#getpixqrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG)
*PixOperationsApi* | [**getProof**](docs/PixOperationsApi.md#getproof) | **GET** /proof/{id} | Get Transaction Receipt
*PixOperationsApi* | [**postPix**](docs/PixOperationsApi.md#postpixoperation) | **POST** /pix | Create Charge (Pix deposit)
*ReportsApi* | [**downloadUserReport**](docs/ReportsApi.md#downloaduserreport) | **POST** /user/report/{id}/download | Download report
*ReportsApi* | [**getUserReport**](docs/ReportsApi.md#getuserreport) | **GET** /user/report/{id} | Consultar status do relatório
*ReportsApi* | [**getUserTransactionById**](docs/ReportsApi.md#getusertransactionbyid) | **GET** /user/transactions/{id} | List transaction details
*ReportsApi* | [**getUserTransactions**](docs/ReportsApi.md#getusertransactions) | **GET** /user/transactions | List Transactions
*ReportsApi* | [**listUserReports**](docs/ReportsApi.md#listuserreports) | **GET** /user/report | List report jobs
*ReportsApi* | [**postUserReport**](docs/ReportsApi.md#postuserreportoperation) | **POST** /user/report | Generate transactions report
*WithdrawalsApi* | [**getPixKey**](docs/WithdrawalsApi.md#getpixkey) | **GET** /pix/key | Dict Pix Key Lookup
*WithdrawalsApi* | [**getWithdraw**](docs/WithdrawalsApi.md#getwithdraw) | **GET** /withdraw | Retrieve Withdrawal
*WithdrawalsApi* | [**getWithdrawProof**](docs/WithdrawalsApi.md#getwithdrawproof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt
*WithdrawalsApi* | [**postPixQrcodeRead**](docs/WithdrawalsApi.md#postpixqrcodereadoperation) | **POST** /pix/qrcode/read | Read QR Code
*WithdrawalsApi* | [**postWithdraw**](docs/WithdrawalsApi.md#postwithdrawoperation) | **POST** /withdraw | Create Withdrawal (Pix key)
*WithdrawalsApi* | [**postWithdrawQrcode**](docs/WithdrawalsApi.md#postwithdrawqrcodeoperation) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code


### Models

- [CallbackDetail](docs/CallbackDetail.md)
- [CallbackListResponse](docs/CallbackListResponse.md)
- [CallbackListResponsePagination](docs/CallbackListResponsePagination.md)
- [Defense](docs/Defense.md)
- [DefenseFilesInner](docs/DefenseFilesInner.md)
- [DownloadUserReport200Response](docs/DownloadUserReport200Response.md)
- [GetPix400Response](docs/GetPix400Response.md)
- [GetPixKey400Response](docs/GetPixKey400Response.md)
- [GetPixKey404Response](docs/GetPixKey404Response.md)
- [GetProof200Response](docs/GetProof200Response.md)
- [GetUser200Response](docs/GetUser200Response.md)
- [GetUser200ResponseDailyWithdrawLimit](docs/GetUser200ResponseDailyWithdrawLimit.md)
- [GetUser200ResponseServiceFee](docs/GetUser200ResponseServiceFee.md)
- [GetUserBalance200Response](docs/GetUserBalance200Response.md)
- [GetUserTransactionById200Response](docs/GetUserTransactionById200Response.md)
- [GetUserTransactionById200ResponseAllOfCallbackLogInner](docs/GetUserTransactionById200ResponseAllOfCallbackLogInner.md)
- [GetUserTransactionById200ResponseAllOfInfractionInner](docs/GetUserTransactionById200ResponseAllOfInfractionInner.md)
- [GetUserTransactions200Response](docs/GetUserTransactions200Response.md)
- [InfractionDetail](docs/InfractionDetail.md)
- [InfractionDetailTransaction](docs/InfractionDetailTransaction.md)
- [InfractionListResponse](docs/InfractionListResponse.md)
- [InfractionListResponsePagination](docs/InfractionListResponsePagination.md)
- [ListUserReports200Response](docs/ListUserReports200Response.md)
- [PixKeyInfo](docs/PixKeyInfo.md)
- [PostInternalTransferRequest](docs/PostInternalTransferRequest.md)
- [PostPixQrcodeRead400Response](docs/PostPixQrcodeRead400Response.md)
- [PostPixQrcodeReadRequest](docs/PostPixQrcodeReadRequest.md)
- [PostPixRequest](docs/PostPixRequest.md)
- [PostUserReportRequest](docs/PostUserReportRequest.md)
- [PostWithdrawQrcode400Response](docs/PostWithdrawQrcode400Response.md)
- [PostWithdrawQrcodeRequest](docs/PostWithdrawQrcodeRequest.md)
- [PostWithdrawRequest](docs/PostWithdrawRequest.md)
- [QRCodeReadResponse](docs/QRCodeReadResponse.md)
- [ReportJob](docs/ReportJob.md)
- [ResendUserCallbackSingle200Response](docs/ResendUserCallbackSingle200Response.md)
- [ResendUserCallbacks200Response](docs/ResendUserCallbacks200Response.md)
- [ResendUserCallbacksRequest](docs/ResendUserCallbacksRequest.md)
- [Transaction](docs/Transaction.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.6.0`
- Package version: `0.1.0`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://suporte.payzu.com.br](https://suporte.payzu.com.br)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
